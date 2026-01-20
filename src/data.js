// Skills Icons
import clangIcon from "./images/skillsIcon/ISO_C++_Logo.svg.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/git_gihub_logo.png"
import RPIIcon from "./images/skillsIcon/java_logo.png"
import SolidworksIcon from "./images/skillsIcon/linux.png"
import codeIcon from "./images/skillsIcon/Python-logo-notext.svg.png"
import isaacsIcon from "./images/skillsIcon/bullet-physics-logo.png"
import airplaneIcon from "./images/skillsIcon/lidar_slam2.png"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import googleScholarIcon from "./images/contactIcon/gscholar.png"


// Company icon
import TeslaIcon from "./images/company/Tesla.webp"
import NVIDIAIcon from "./images/company/NVIDIA.webp"
import EcobeeIcon from "./images/company/ecobee.webp"
import UwaterlooIcon from "./images/company/Uwaterloo.webp"
import KhazanahIcon from "./images/company/Khazanah.webp"
import FordIcon from "./images/company/Ford.webp"

// company image
import TeslaImg from "./images/workPhotos/TeslaWork_v2.mp4"
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4"
import Khazanah from "./images/workPhotos/khazanah.mp4"
import uwaterloo from "./images/workPhotos/uwaterlootaImg.webp"
import ford from "./images/workPhotos/Ford.webp"
import ecobee from "./images/workPhotos/ecobeeProduct.webp"

// School images
import WaterlooLogo from "./images/school/tulsa_logo_quality.png"
import WaterlooImg from "./images/school/waterloo_eng_img.webp"


// Helper function for getting text (simplified as we now only support English)
export const getText = (textObj) => {
  // If it's already a string, return as-is
  if (typeof textObj === 'string') return textObj;
  
  // If it's an object, return English or first value
  if (textObj && typeof textObj === 'object') {
    return textObj.en || Object.values(textObj)[0] || '';
  }
  
  // Fallback
  return textObj || '';
};

const siteData = {

  name: "Hi, I am Baqer Hassani",
 
  headerParagraph: "I am a robotics systems engineer passionate about bringing autonomous and biomimetic robots to life.",

  // Navigation labels
  nav: {
    home: "Home",
    work: "Work",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume"
  },

  // Section titles  
  sections: {
    about: "About",
    nvidia: "My projects",
    publications: "Publications",
    education: "Education",
    internships: "Internships",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },

  // Button text translations
  buttons: {
    explore: "Explore",
    readMore: "Read More",
    close: "Close"
  },

  contactEmail: "bah3944@utulsa.edu",

  education: [
    {
      title: "University of Tulsa",
      para: "Bachelor of Computer Science with a Minor in Artificial Intelligence",
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "https://uwaterloo.ca/mechanical-mechatronics-engineering/",
      description: [
        "GPA: 3.7, specialized in robotics, artificial intelligence, control systems, and embedded systems",
        "Clubs: SAE AutoDrive Challenge (Level 4 Autonomous Vehicle), Waterloop (Hyperloop)",
        "Scholarships: President's Scholarship, Sanford Flaming Foundation Award, Term Dean's Honor List"
      ],
    }
   
  ],

  projects: [
    {
      title: "Tesla",
      position: "Body Controls Developer - Tesla",
      para: "Developed lighting apps for new Model S/X and Tesla Semi, including Tesla Light Test.",
      imageSrc: TeslaIcon,
      url: "/work/tesla/",
      date: "05/2022 - 08/2022 ",
      description: [
        'Designed "Semi LightTest" feature for controlling 19 unique light groups across 4 controllers in C, displayed at the Tesla Semi Delivery Event by Elon Musk',
        'Set up simulations for the Semi Truck lighting controllers in Python and created Software In a Loop tests using Python, drafted "Semi Light Test" specs on Polarion',
        'Brought up lighting fault detection and lighting alerts for Tesla Semi headlamps, rear lights, and trailer lights using C via CAN network',
        'Created self-tests for checking Semi\'s mirror, latch, steering wheel, and horn and fixed various firmware bugs for Model S/X lighting in C'
      ],
      workImg: TeslaImg,
    },
    {
      title: "NVIDIA",
      position: "Robotics Simulation Engineer - NVIDIA",
      para: "Built realistic sensors and simulated quadruped robots in NVIDIA Isaac Sim's robotics platform.",
      imageSrc: NVIDIAIcon,
      url: "/work/nvidia/",
      date: "01/2022 - 04/2022 ",
      description: [
        "Developed Quadruped extension for unitree A1 robots on Isaac Sim using Python, connected quadruped gait controlers to the quadruped model, and created ROS, ROS2, and Visual Inertial Odometry examples for Isaac Sim.",
        "Created Isaac Sensor extension for simulating physic based sensors such as the contact sensor and IMU sensors using C++ and Python, written USD schema for the sensors, enabling visualization and modification of sensor parameters during runtime from the GUI",
        "Drafted user manual and extension documentations using Sphinx, and created unit tests for the quadruped and Isaac sensor extension."
      ],
      workImg: IsaacSim,
    },

    {
      title: "ecobee",
      position: "Embedded Systems Developer - ecobee",
      para: "Built production test fixtures and CV/ML algorithms for smart thermostat display testing.",
      imageSrc: EcobeeIcon,
      url: "/work/ecobee/",
      date: "05/2021 - 08/2021 ",
      description: [
        "Built display testing pipeline using C++ OpenCV to detect discoloration, misalignment, dead pixels, and poor connections, capable of detecting alignment offsets of 0.5mm and dead pixels under 0.2mm",
        "Prototyped LCD tests using Convolutional Neural Network and TensorFlow with 98% accuracy, won Best Internal Impact Award",
        "Gathered requirements, designed, and developed customer firmware flash and label printer software for the smart thermostats using C++/CLI and .NET framework, logging results using MongoDB, printing labels using ZPL",
        "Drafted documentation and deployed customer firmware flash and label printer software at Wistron factory for Design Validation Test, projected to flash 80000+ units per month in full production"
      ],
      workImg: ecobee,
    },
    {
      title: "University of Waterloo, Faculty of Electrical and Computer Engineering",
      position: "Teaching Assistant - University of Waterloo",
      para: "TA for intro C++ course; led tutorials, graded, designed exams.",
      imageSrc: UwaterlooIcon,
      url: "/work/uwaterloo/",
      date: "09/2020 - 12/2020 ",
      description: [
        "Designed questions on quizzes, midterm, and final and created automated testing using C++ and python to grade 300+ submissions per assessment and provide instantaneous feedback using Python expect library and regular expression based on the SOLID design principle",
        "Lead lab and help sessions for 300+ students assisted with teaching concepts in C++, such as dynamic memory allocation, Object-Oriented Programming, pointers, and linked lists, leads to a significant increase in student grades"
      ],
      workImg: uwaterloo,
    },
    {
      title: "Khazanah National Americas",
      position: "Innovation Developer - Khazanah",
      para: "Explored drone, CV, and AR/VR tech to support investor understanding and decision-making.",
      imageSrc: KhazanahIcon,
      url: "/work/khazanah/",
      date: "01/2020 - 04/2020 ",
      description: [
        "Created a VR game based on Atari's Asteroids for Oculus Go platform, designed game logic, collision physics, and cloud leaderboard using C#, Unity, and Oculus developer toolkit, created asteroid models with blender",
        "Developed novel computer vision-based control for drones using Python OpenCV library, capable of tracking and following an Aruco marker in different lighting conditions up to 10 meters away, and autonomous take-off and land.",
        "Design open-sourced smart germicidal device with UV-C bulbs to sterilize personal devices; won Editor's Choice Award on Instructable"
      ],
      workImg: Khazanah,
    },
    {
      title: "Ford Motor Company",
      position: "Manufacturing Software Developer - Ford",
      para: "Supported F150 Lightning development and testing using Jenkins, TestStand, C#, Python.",
      imageSrc: FordIcon,
      url: "/work/ford/",
      date: "05/2019 - 08/2019 ",
      description: [
        "Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests",
        "Prototyped utility in C# to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times",
        "Debugged audio issues for infotainment chips with TestStand and .Net Framework by recreating issues in controlled settings"
      ],
      workImg: ford,
    },
  ],

// About Section --------------
  aboutParaOne: "I am a robotics engineer with expertise in simulation development, narrowing the sim-to-real gap by creation of high-fidelity virtual environments to accelerate robotic testing and deployment. I am particularly passionate about reinforcement learning and imitation learning, exploring control strategies that enable safer, more human-like interactions.",
  
  aboutParaTwo: "",
  
  aboutParaThree: "",

  nvidiaTime: "2024 to Present",

nvidiaExperience: [
    "At NVIDIA, I worked on both Isaac Lab and Isaac Sim, focusing on distinct facets of robotic simulation. In Isaac Lab, I developed scalable humanoid and legged robot models and designed reinforcement learning-based locomotion policies. In Isaac Sim, I concentrated on high-fidelity simulation, building realistic digital twins, synthetic sensor models, and inference pipelines for deploying trained policies through ROS and Isaac Sim. I also presented several talks at NVIDIA GTC on robot composition and software-in-the-loop simulation pipelines."
],

// NVIDIA Carousel Items
nvidiaCarouselItems: [
  {
    media: "gr1ImitationVideo",
    type: 'video',
      title: "Tracer AgileX LiDAR mapping with Ouster and ROS2",
      description: "AgileX Tracer mobile robot equipped with an Ouster LiDAR, used to build 2D maps of indoor environments and reason about obstacles in real time. Using the ouster-ros2 driver and the Tracer ROS2 stack, the system streams point clouds into a SLAM and occupancy-grid pipeline, visualized in RViz while the robot drives through the space. The resulting maps capture walls, obstacles, and free space, providing a foundation for future navigation and path-planning experiments.",
      tags: ["ROS2", "Ouster LiDAR", "SLAM", "Mapping", "Mobile Robotics"],
      highlights: {
        role: "Integrated Ouster LiDAR with the Tracer base and built a ROS2 pipeline for online 2D mapping.",
        tech: "ouster-ros2, Tracer ROS2, LiDAR point clouds, 2D SLAM, RViz visualization, cmd_vel control.",
        impact: "Produced consistent environment maps and obstacle information suitable for downstream navigation and planning."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "h1FlipGif", // Will be imported in component
    type: 'video',
      title: "Robotic replication of ancient stone tool use",
      description: "7-axis Barrett robotic arm with force sensing used to replicate prehistoric scraping and cutting motions with experimental stone tools for archaeological research. I programmed the arm in C++ using the Libbarrett library and designed a custom SolidWorks haft that securely clamps irregular stone tools with top-mounted bolts, enabling precise control of pose, contact angle, and applied force. By scraping hides to generate use-wear while logging force–torque data at high rate, the system produces consistent, repeatable wear patterns that would otherwise require long, monotonous human experiments.",
      tags: ["Robotic Manipulation", "Force Sensing", "C++", "Libbarrett", "Experimental Archaeology"],
      highlights: {
        role: "Implemented control software and designed the mechanical haft system to automate archaeological use-wear experiments.",
        tech: "7-DOF Barrett arm, C++ and Libbarrett, force–torque sensing, custom end-effector design in SolidWorks.",
        impact: "Reduced the time and variability of archaeological experiments by automating complex, repetitive scraping motions with precise, repeatable forces and trajectories."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "h1TrainVideo",
    type: 'video',
      title: "Preventing tipping in mobile manipulators with ZMP analysis",
      description: "UR5e cobot mounted on Agilex Tracer and Clearpath Ridgeback mobile bases, used to study when mobile manipulators stay stable or tip over. In Gazebo and PyBullet simulation, I compared ground contact forces and base torques from physics engines with a Python ZMP-based model to check when the Zero-Moment Point leaves the support polygon. The videos show stable candlestick poses, tipping events, and close agreement between simulation and analysis, forming the basis of an ICRA 2026 paper on safe ZMP-based operation for UR5e/UR10/UR20 on different AMRs.",
      tags: ["Mobile Manipulator", "ZMP", "Stability", "Gazebo", "PyBullet"],
      highlights: {
        role: "Developed and validated the ZMP-based stability algorithm for UR cobots on Agilex and Ridgeback bases.",
        tech: "Gazebo-ROS simulation, PyBullet dynamics, URDF models of UR5e and Tracer/Ridgeback, Python ZMP computation, contact force and torque logging.",
        impact: "Provided a simple method to predict tipping and define safe operating conditions for mobile manipulators, supporting the ICRA 2026 paper \"Preventing Tipping in Mobile Manipulators Using Zero Moment Point Analysis\"."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "urLousdVideo",
    type: 'video',
      title: "Person-following Robot with ZED depth perception",
      description: "Tracer mobile robot equipped with a ZED depth camera that detects and follows a person wearing a blue shirt by combining 3D perception and ROS2-based control. Using OpenCV color segmentation and ZED’s depth API, the system estimates the person’s (x, y, z) position, computes distance via sqrt(x^2 + y^2 + z^2) and horizontal angle via atan(x/z), then commands linear.x and angular.z through Twist messages to keep the target centered and at a safe distance. This project demonstrates a full perception-to-control pipeline for human-aware robot behavior with real-time feedback.",
      tags: ["ROS2", "ZED Camera", "OpenCV", "Mobile Robotics", "Person Following","3D Perception"],
      highlights: {
        role: "Designed and implemented the end-to-end person-following pipeline from perception to Tracer base control.",
        tech: "ROS2, ZED SDK, OpenCV/cv2, depth-based 3D tracking, Twist command interfaces.",
        impact: "Enabled robust human-following behavior with precise distance and angle control, showcasing practical human-robot interaction in real environments."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "frankaMoveitVideo",
    type: 'video',
      title: "Leader–follower swarm of Tracer robots in PyBullet",
      description: "Three AgileX Tracer mobile robots simulated in PyBullet, where one robot acts as the leader and two others follow in formation. I implemented a simple swarm-style leader–follower controller in Python: the leader tracks a reference path, while the followers compute relative position errors in simulation and generate velocity commands to maintain spacing and alignment. This project introduced me to swarm robotics concepts like formation control and coordination, using simulation to safely explore behaviors before trying them on real robots.",
      tags: ["Swarm Robotics", "Multi-Robot Systems", "PyBullet", "Formation Control", "Mobile Robotics"],
      highlights: {
        role: "Built the multi-robot PyBullet environment and implemented the leader–follower control logic for three Tracer bases.",
        tech: "PyBullet physics simulation, Python control loops, multi-robot coordination, leader–follower formation control.",
        impact: "Created a reusable sandbox for experimenting with swarm behaviors and formation control on mobile robots before hardware deployment."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "frankaDrawerVideo",
    type: 'video',
      title: "Validating UR cobot kinematics in Gazebo and PyBullet",
      description: "UR cobots modeled in Gazebo and PyBullet using URDFs, where I compared the simulated kinematics against the real robots before running hardware experiments. I checked link frames and joint limits against Denavit–Hartenberg parameters, ran inverse kinematics to reach target poses, and verified that simulated motions respected joint, reach, and collision constraints. This workflow let me debug mismatches between the URDF and the real arm and build safer motion plans before sending trajectories to physical UR robots.",
      tags: ["UR Cobot", "Gazebo", "PyBullet", "Kinematics", "Simulation Safety"],
      highlights: {
        role: "Set up URDF-based UR simulations and validated kinematics and motion plans against real hardware models.",
        tech: "URDF modeling, DH parameter checks, inverse kinematics, joint-limit and collision checks in Gazebo and PyBullet.",
        impact: "Reduced the risk of unsafe motions on real UR cobots by catching kinematic and configuration issues in simulation first."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "claw",
    type: 'video',
      title: "JOLT Idea Challenge winning AI chatbot for student support",
      description: "AI chatbot designed to help university students with academic and administrative questions, from course requirements and deadlines to campus services and policies. The system is built to answer common FAQs, guide students to the right resources, and reduce the load on human advisors by providing fast, 24/7 support. This project won the JOLT Idea Challenge for its potential to improve student experience and streamline university support workflows.",
      tags: ["AI Chatbot", "Student Support", "Conversational AI", "Education"],
      highlights: {
        role: "Designed the chatbot experience and built the core logic for answering academic and administrative questions.",
        tech: "Conversational AI design, FAQ and knowledge-base querying, intent-focused dialogue flows.",
        impact: "Improved access to information for students while reducing repetitive support work for staff, earning the JOLT Idea Challenge award."
      },
      github: "https://github.com/bagherhassani"
  },
  {
    media: "leatherbackVideo",
    type: 'video',
      title: "Simulation for Tracer Robot with LiDAR",
      description: "ROS1 packages and Gazebo simulation setup for the AgileX Tracer mobile base with LiDAR, including drivers, URDF description, bringup, and visualization. I configured tracer_base, tracer_bringup, tracer_msgs, tracer_description, and tracer_gazebo_sim so the robot can be run in simulation with a mounted LiDAR, visualized in RViz, and controlled via teleop and cmd_vel. This work ties together CAN-to-USB setup, ugv_sdk, and launch files that spawn Tracer with LiDAR in a custom world, laying the groundwork for mapping and navigation experiments.",
      tags: ["ROS", "Tracer Mobile Base", "LiDAR Integration", "Gazebo", "RViz"],
      highlights: {
        role: "Integrated Tracer ROS packages, LiDAR, and Gazebo simulation into a single bringup pipeline.",
        tech: "tracer_ros stack (tracer_base, tracer_bringup, tracer_msgs, tracer_description, tracer_gazebo_sim), ugv_sdk, CAN interface setup, RViz navigation configs.",
        impact: "Provided a ready-to-use simulation and visualization setup for Tracer with LiDAR, enabling easier mapping, navigation, and testing without risking the real robot."
      },
      github: "https://github.com/bagherhassani"
  },
  
],

// Projects Carousel Items
projectsCarouselItems: [
  {
    media: "airplaneImage",
    type: 'image',
      title: "Airplane Project (2020)",
      subtitle: "The sky is calling!",
      description: "In this project, I built a remote controlled airplane from scratch using raspberry pi and esp8266 modules, and designed software and mechanical architectures from scratch in a team of two.",
    buttons: [
      {
          text: "Read More",
        url: "https://github.com/The-Airplane-Project/Remote-Controlled-Airplane"
      }
    ]
  },
  {
    media: "watoImage",
    type: 'image',
      title: "Watonomous",
      subtitle: "Bolty!",
      description: "Watonomous is a University of Waterloo design team that turns a chevy bolt to a level 4 autonomous vehicle. At Watonomous, I worked on local planning for the vehicle, particularly with the MPC controller and gained valuable experience with ROS.",
    buttons: [
      {
          text: "Read more",
        url: "https://www.watonomous.ca/"
      }
    ]
  },
  {
    media: "capstoneVideo",
    type: 'video',
      title: "Capstone Project (2023)",
      subtitle: "Multi-robot exploration and SLAM in a simulated warehouse",
      description: "Multi-robot SLAM system for exploring and mapping a 80000 sqft virtual warehouse.",
    buttons: [
      {
          text: "Read more",
        url: "https://github.com/FireScopeRobotics"
      }
    ]
  },
  {
    media: "webappImg",
    type: 'image',
      title: "Webapp Hackathon Projects",
      subtitle: "Best Use of Google Cloud Award (Purrtector, NWHacks 2021)",
      description: "Intelibatch (left) is a webapp for displaying and predicting COVID19 cases across North America using React (front end), Flask (back end), and Tensorflow (prediction) to compute the optimal batch size for repeated testing. Purrtector (right) is a chrome extension for encouraging planet positive behaviors by rewarding users with digital pets using React and Flask.",
    buttons: [
      {
          text: "Intelibatch",
        url: "https://devpost.com/software/pool-sampler"
      },
      {
          text: "Purrtector",
        url: "https://devpost.com/software/purrtech"
      }
    ]
  },
  {
    media: "wearableImg",
    type: 'image',
      title: "Wearable Hackathon Projects",
      subtitle: "1st Place (VisionSense, MakeUofT 2019)",
      description: "VisionSense (left) is an IoT outfit to haptically guide users with visual impairments/obstructions while monitoring their environment. Nightlight (right) is a wearable that allows bike users to signal turns at night via motion-sensing technologies which will activate turn lights.",
    buttons: [
      {
          text: "VisionSense",
        url: "https://devpost.com/software/visionsense"
      },
      {
          text: "NightLight",
        url: "https://devpost.com/software/team-18-go-team"
      }
    ]
  },
  {
    media: "mte380Img",
    type: 'image',
      title: "BOFA, the Line Follower Robot",
      subtitle: "2nd highest competition mark",
      description: "Lead the mechanical design for a line following robot using SolidWorks, drafted Bill of Material, and oversee software, mechanical, and electrical developments as project manager",
    buttons: [
      {
          text: "Read More",
        url: "https://github.com/B-O-F-A"
      }
    ]
  },
  {
    media: "hisecurityImage",
    type: 'image',
      title: "HiSecurity!",
      subtitle: "Hack the north, 2019",
      description: "This camera system which utilizes machine vision (OpenCV and Sktlearn) to physically track and identify faces using the stepper motors onboard. The handy ui also enables users to track the system remotely and in real time.",
    buttons: [
      {
          text: "Read More",
        url: "https://devpost.com/software/acs-htn2019"
      }
    ]
  },
  {
    media: "vexImg",
    type: 'image',
      title: "VEX Robotics",
      subtitle: "Finalists, Alberta Provincial Championship 2017 and 2018",
      description: "Over the three years, we explored various robotics systems such as holonomic drives, reverse double four bar lifts, and even learned C programming and programed PID controllers from scratch in a team of three.",
    buttons: [
      {
          text: "Read More",
        url: "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/"
      }
    ]
  },
  {
    media: "pilotImg",
    type: 'image',
      title: "Pilot",
      subtitle: "\"Oh! I slipped the surly bonds of earth and danced the skies on bright yellow wings.\"",
      description: "I finally touched the sky when I earned my glider pilot license in 2016 and private pilot license in 2017. This was an breathtaking experiences that inspires me to build robotics airplanes to this date.",
    buttons: []
  }
],


  skills: [
    {
      img: clangIcon,
      para:
        "C++",
    },
    {
      img: codeIcon,
      para:
        "Python",
    },
    {
      img: RPIIcon,
      para:
        "Java and OOP",
    },
    {
      img: rosIcon,
      para:
        "ROS, ROS2, Gazebo, Rviz",
    },
    {
      img: openCVIcon,
      para:
        "Git and Github",
    },
    {
      img: SolidworksIcon,
      para:
        "Linux, Bash, Shell Scripting",
    },
    
    {
      img: isaacsIcon,
      para:
        "Pybullet Physics Engine",
    },
    {
      img: airplaneIcon,
      para:
        "Lidar, SLAM, Path Planning, Computer Vision",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's chat about robots!",
  social: [

    { img: githubIcon, 
      url: "https://github.com/stevenf7"
    },
    {
      img: googleScholarIcon,
      url: "https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/stevenfeng7/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;
