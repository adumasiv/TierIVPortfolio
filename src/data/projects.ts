export const projects = [
  {
    id: "ai-labeling",
    title: "AI Data Labeling Tool",
    description:
      "Full-stack platform that accelerated AI model training by 25% through efficient data labeling workflows.",
    tech: ["Python", "React", "PostgreSQL", "OAuth"],
    image: "/images/deepgram1.png.webp",
    github: "https://github.com/adumasiv/Deepgram_AI_Tool",
    demo: "/projects/ai-labeling",
    content: {
      problem:
        "Manual data labeling is time-consuming and slows down the development of machine learning models.",
      solution:
        "Developed a full-stack labeling platform using Python, React, and PostgreSQL with Google OAuth authentication to streamline dataset creation and management.",
      impact:
        "Improved model training efficiency by 25% and enabled more consistent, scalable data workflows.",
    },
  },
  {
    id: "football-ml",
    title: "College Football Prediction Model",
    description:
      "Deep learning model using PyTorch to predict game outcomes with ~80% accuracy.",
    tech: ["PyTorch", "NumPy", "Pandas", "Sklearn"],
    image: "/images/espn.webp",
    github: "https://github.com/adumasiv/CFB_FNN_MK1",
    demo: "/projects/football-ml",
    content: {
      problem:
        "Predicting sports outcomes requires analyzing complex datasets with many variables and dependencies.",
      solution:
        "Built a Feedforward Neural Network (FFNN) using PyTorch, combined with feature engineering and data preprocessing using NumPy and Pandas.",
      impact:
        "Achieved approximately 80% accuracy in predicting game scores and season outcomes.",
    },
  },
  {
    id: "mlb-tool",
    title: "MLB Statistics Tool",
    description:
      "Custom algorithm for optimizing fantasy baseball drafting and player evaluation.",
    tech: ["Python", "Data Analysis"],
    image: "/images/mlb1.jpg.webp",
    github: "https://github.com/adumasiv/MLB_Statistics_Helper_Tool",
    demo: "/projects/mlb-tool",
    content: {
      problem:
        "Fantasy baseball drafting lacks consistent and reliable data-driven evaluation methods.",
      solution:
        "Developed a statistics engine with custom performance-weighting algorithms to analyze player performance and trends.",
      impact:
        "Improved prediction reliability and decision-making in user testing scenarios.",
    },
  },
  {
    id: "flask-api",
    title: "Flask API",
    description:
      "RESTful API with CLI integration for efficient data interaction and manipulation.",
    tech: ["Flask", "Python", "REST"],
    image: "/public/images/flask.png",
    github: "https://github.com/adumasiv/API-Solution",
    demo: "/projects/flask-api",
    content: {
      problem:
        "Managing and interacting with structured data via command-line tools lacked flexibility and scalability.",
      solution:
        "Built a Flask-based REST API supporting GET and POST requests, along with a CLI interface for seamless interaction with data objects.",
      impact:
        "Enabled efficient data retrieval and manipulation, improving usability and extensibility of the system.",
    },
  },
];