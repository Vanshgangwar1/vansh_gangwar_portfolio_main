/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vansh Gangwar",
  title: "Hi all, I'm Vansh",
  subTitle: emoji(
    "A Computer Science undergraduate who loves turning raw data into insight 📊 — from relational database design and SQL business analysis to building computer-vision and machine learning models with Python, Pandas and OpenCV."
  ),
  resumeLink: "true", // Set to empty string to hide the button. Actual file downloaded is src/containers/greeting/resume.pdf
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vanshgangwar1", // TODO: replace with your GitHub profile
  linkedin: "https://www.linkedin.com/in/vansh-gangwar-5b174132b?utm_source=share_via&utm_content=profile&utm_medium=member_android", // TODO: replace with your LinkedIn profile
  gmail: "vanshgangwar029@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AN ASPIRING DATA SCIENTIST WHO LOVES TURNING DATA INTO DECISIONS",
  skills: [
    emoji(
      "⚡ Apply exploratory data analysis, data cleaning and statistics to uncover insights from real-world datasets"
    ),
    emoji(
      "⚡ Build and train machine learning and computer-vision models, from preprocessing through evaluation"
    ),
    emoji(
      "⚡ Design normalized relational databases and write business-focused SQL queries at scale"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "data-visualization",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "jupyter",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "power-bi",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dr. APJ Abdul Kalam Technical University, Lucknow",
      // logo: require("./assets/images/YOUR_UNIVERSITY_LOGO.png"), // TODO: add a logo image and uncomment this line
      subHeader: "B.Tech, Computer Science and Engineering",
      duration: "Expected Graduation: 2027",
      desc: "CGPA: 8.0/10.",
      descBullets: [
        "Hackathon Winner (1x)",
        "Recipient of a merit-based scholarship"
      ]
    },
    {
      schoolName: "Class XII, CBSE",
      duration: "2024",
      desc: "Scored 78.6%"
    },
    {
      schoolName: "Class X, CBSE",
      duration: "2022",
      desc: "Scored 80.3%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis (Python, Pandas, SQL)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Databases (MySQL, Database Design)",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning / Computer Vision",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
// No formal work experience yet — hidden for now. Set display to true and fill
// in `experience` once you have an internship or job to show.

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A FEW THINGS I'VE BUILT WHILE LEARNING DATA SCIENCE AND MACHINE LEARNING",
  projects: [
    {
      // image: require("./assets/images/campusEyeLogo.png"), // TODO: add a screenshot/logo and uncomment
      projectName: "CampusEYE – AI-Based Smart Classroom Monitoring System",
      projectDesc:
        "An AI-powered classroom monitoring system that automates attendance and bunk detection using real-time, multi-face facial recognition from live webcam feeds, a timetable-aware attendance engine, automated WhatsApp/SMS alerts, and MySQL for backend storage.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/student_recog.git" // TODO: add your repo link
        }
      ]
    },
    {
      // image: require("./assets/images/foodDeliveryAnalyticsLogo.png"),
      projectName: "Food Delivery Analytics – End-to-End SQL & Data Analytics Case Study",
      projectDesc:
        "Designed a normalized relational database for a food delivery platform, generated a realistic synthetic dataset with Faker and loaded it via SQLAlchemy, wrote 20+ business-focused SQL queries, and visualized key metrics in Pandas and Matplotlib.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/food_delivery_case_study.git"
        }
      ]
    },
    {
      // image: require("./assets/images/irisClassificationLogo.png"),
      projectName: "Iris Flower Classification – Machine Learning Model",
      projectDesc:
        "Built and trained a supervised classification model to predict Iris flower species from physical measurements, with a proper train/test split and exploratory data analysis in Jupyter Notebook.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/Flower-classification-model.git"
        }
      ]
    },
    {
      // image: require("./assets/images/expenseTrackerLogo.png"),
      projectName: "Smart Expense Tracker – Personal Finance Analytics Tool",
      projectDesc:
        "A personal expense-tracking application with category-wise spending analysis in Pandas and NumPy, plus visual monthly spend summaries in Matplotlib to support data-driven budgeting.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/Expense-Tracker.git"
        }
      ]
    },
    {
      // image: require("./assets/images/housePriceLogo.png"),
      projectName: "House Price Prediction – Machine Learning Model",
      projectDesc:
        "A machine learning model built to accurately predict residential house prices using exploratory data analysis, feature engineering, and regression techniques in Python.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/house_pricing_ml_model"
        }
      ]
    },
    {
      // image: require("./assets/images/fordCarPriceLogo.png"),
      projectName: "Ford Car Price Prediction – Machine Learning Model",
      projectDesc:
        "An end-to-end data analytics and predictive modeling project to estimate Ford used car prices based on vehicle features, mileage, engine size, and fuel type.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/ford_car_price"
        }
      ]
    },
    {
      projectName: "Heart Disease Prediction – Machine Learning Model",
      projectDesc:
        "A machine learning project predicting the presence of heart disease from clinical patient attributes (age, blood pressure, cholesterol, max heart rate, etc.) using classification algorithms like Logistic Regression, Random Forest, SVM, and KNN with Scikit-Learn, Pandas, and Seaborn.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/heart_disease_pred"
        }
      ]
    },
    {
      projectName: "Titanic Survival Prediction – Machine Learning Model",
      projectDesc:
        "A predictive modeling project that analyzes passenger demographics and parameters from the classic Titanic dataset to predict survival likelihood using classification algorithms in Scikit-Learn.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Vanshgangwar1/titanic_survival_pred"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, certifications and other things I'm proud of.",

  achievementsCards: [
    {
      title: "Data Science & Machine Learning",
      subtitle:
        "Udemy Certificate of Completion covering Data Science, Machine Learning models, Python, Pandas, and exploratory data analysis.",
      image: require("./assets/images/udemyDataScience.jpg"),
      imageAlt: "Udemy Data Science & Machine Learning Certificate",
      footerLink: [
        {
          name: "View Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-42d62419-868c-47e0-b5b9-026836d6d291.jpg"
        }
      ]
    },
    {
      title: "SQL (Intermediate) Certificate",
      subtitle:
        "HackerRank Skill Certification in SQL (Intermediate), validating complex queries, subqueries, joins, aggregations, and database optimization.",
      image: require("./assets/images/hacker_Rank_certificate.png"),
      imageAlt: "HackerRank SQL (Intermediate) Certificate",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/d15b31902fc2"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
// No blog posts yet — hidden for now.

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
// No talks yet — hidden for now.

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
// No podcast — hidden for now.

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91-7060629254",
  email_address: "vanshgangwar029@gmail.com"
};

// Twitter Section
// No Twitter/X handle provided — hidden for now.

const twitterDetails = {
  userName: "twitter", // Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
