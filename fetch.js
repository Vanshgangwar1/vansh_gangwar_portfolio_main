const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.warn(`[fetch.js Warning]: ${ERR.noUserName}`);
  } else {
    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
    const data = JSON.stringify({
      query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
    });

    const default_options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node"
      }
    };

    const req = https.request(default_options, res => {
      let responseData = "";

      console.log(`GitHub API statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        console.warn(`[fetch.js Warning]: ${ERR.requestFailed} (status: ${res.statusCode})`);
        return;
      }

      res.on("data", d => {
        responseData += d;
      });
      res.on("end", () => {
        fs.writeFile("./public/profile.json", responseData, function (err) {
          if (err) return console.error(err);
          console.log("Saved file to public/profile.json");
        });
      });
    });

    req.on("error", error => {
      console.warn(`[fetch.js Network Error]: ${error.message}`);
    });

    req.write(data);
    req.end();
  }
}

if (MEDIUM_USERNAME !== undefined && MEDIUM_USERNAME !== "") {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`Medium API statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn(`[fetch.js Warning]: ${ERR.requestFailedMedium} (status: ${res.statusCode})`);
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.error(err);
        console.log("Saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.warn(`[fetch.js Network Error]: ${error.message}`);
  });

  req.end();
}
