const findResult = [
  {
    _id: 1,
    address: { street: "123 Test" },
    price: 90,
    images: { picture_url: "https://imgur.com/5xHWlqa.png" },
  },
  {
    _id: 2,
    address: { street: "123 Test" },
    price: 90,
    images: { picture_url: "https://i.imgur.com/0ykyWwZ.png" },
  },
  {
    _id: 3,
    address: { street: "123 Test" },
    price: 90,
    images: { picture_url: "https://i.imgur.com/0ykyWwZ.png" },
  },
  {
    _id: 4,
    address: { street: "123 Test" },
    price: 90,
    images: { picture_url: "https://i.imgur.com/0ykyWwZ.png" },
  },
  {
    _id: 5,
    address: { street: "123 Test" },
    price: 90,
    images: { picture_url: "https://i.imgur.com/0ykyWwZ.png" },
  },
  {
    _id: 6,
    address: { street: "123 Test" },
    price: 90,
    images: { picture_url: "https://i.imgur.com/0ykyWwZ.png" },
  },
];
const featured = [
  // {
  //     _id: 1,
  //     show: false,
  //     demoLink: "https://hoseacodes-sortingstyles.netlify.app/",
  //     videoLink: "https://i.imgur.com/DmYfP9T.mp4",
  //     projectName: "Sorting Styles",
  //     githubLink: "https://github.com/HoseaCodes/Sorting-Style",
  //     tags: ["JavaScript", "Node.js", "MongoDB", "Public API", "JSON"],
  //     iframe:
  //     "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
  //     description: ` Algorithms can be one of the most difficult learning challenges as a new Software Engineer. Sort
  //     Styles displays various types of sorting algorithms. I started with Merge Sort but I will cover
  //     some of the more popular sorting algorithms like Insertion Sort, Heapsort, Bucket Sort, Quicksort, Bubble
  //     Sort, Breadth-first Search, Selection Sort, Bogosort, and Linear. This application also helps to visualize
  //     the time complexity of each algorithm. Users are given the ability to generate an array with 300
  //     random numbers and select the sort they would like to veiw to see how the algorithm sorts.`,
  // },
  {
    _id: 2,
    show: true,
    demoLink: "https://sneaker-api-htx.herokuapp.com/",
    videoLink: "https://i.imgur.com/N3jaYVR.mp4",
    projectName: "Sneaker API",
    thumbnail: "https://i.imgur.com/REYRO79.png",
    githubLink: "https://github.com/HoseaCodes/Sneaker-Api",
    highlight: "This is a aggration of all sneaker head data across the web.",
    description: `Sneaker API produces JSON data with descriptions, images, 
    prices and release dates of the most popular sneakers. You can make HTTP request 
    to my API to get the JSON data. On the home page you can see some of the sample JSON 
    data if you click the submit button.`,
    features: [
      {
        feature: "RESTful API",
        description: "Hosting Sneaker Data from Nike and Addidas Releases.",
      },
      {
        feature: "WebScraping",
        description: "Scraps data from the most notable sneaker websites.",
      },
      {
        feature: "Data Visualization",
        description: "Created a UI to visualize the data.",
      },
    ],
    tags: ["JavaScript", "Node.js", "MongoDB", "Public API", "JSON"],
    images: [
      "https://i.imgur.com/18eU0Zl.png",
      "https://i.imgur.com/y9BsiDx.png",
      "https://i.imgur.com/18eU0Zl.png",
      "https://i.imgur.com/REYRO79.png",
      "https://i.imgur.com/g2ku8SN.png",
    ],
    iframe:
      "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
    description: `In the process of making projects I wanted to make a sneaker application using a 3rd party API but I
    discovered there weren't any API's or there weren't any that were accessible at that time. This dilemma
    brought Sneaker-API. Sneaker API produces JSON data with descriptions, images, prices, and release dates
    of the most popular sneakers. You can make HTTP requests to my API to get the JSON data. On the home
    page,
    you can see some of the sample JSON data if you click the submit button. Sneaker-API was built with a
    Node.js backend, MongoDB database, and serves JSON datato the client. This application uses RESTFUL
    routing to handle API requests allowing clients to receive details on individual sneakers. I used EJS to
    serve client views to get more information on the requests.`,
  },
  // {
  //     _id: 3,
  //     show: false,
  //     demoLink: "https://careerconnect.herokuapp.com/",
  //     videoLink: "https://i.imgur.com/B0drFQI.mp4",
  //     projectName: "Career Connect",
  //     githubLink: "https://github.com/HoseaCodes/CareerConnect",
  //     tags: ["JavaScript", "Node.js", "MongoDB", "Google Auth API", "JSON"],
  //     iframe:
  //     "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
  //     description: `Career Connect serves as a platform for new software developers to identify new technology as well as
  //     the latest tech updates. Users have the ability to network, find the latest developer resources and search
  //     through jobs using the GitHub jobs API. This application was made with JavaScript, MongoDB, Express,
  //     oAuth Google, Node.js, and RESTful routing.`,
  // },
  // {
  //     _id: 4,
  //     show: true,
  //     demoLink: "https://devcenter-629.herokuapp.com/",
  //     videoLink: "https://i.imgur.com/pWRTkXg.mp4",
  //     projectName: "Dev Center",
  //     githubLink: "https://github.com/HoseaCodes/DevCenter",
  //     tags: ["Python", "Django", "PostgresSQL", "GitHub API", "Twitter API"],
  //     iframe:
  //     "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
  //     description: `DevCenter was created in order to help users have less clutter open on their tabs. This application
  //     gives users the ability to authenticate with other applications and then be able to use some base
  //     functionality of those sites via a third party API. DevCenter was made with Python, PostgreSQL, Django, and Tweepy.`,
  // },
  // {
  //     _id: 5,
  //     show: false,
  //     demoLink: "https://caloriekitchen.herokuapp.com/",
  //     videoLink: "https://i.imgur.com/fVzb6sP.mp4",
  //     projectName: "Calorie-Kitchen",
  //     githubLink: "https://github.com/HoseaCodes/Calorie-Kitchen",
  //     tags: ["JavaScript", "Node.js", "Spoonful Auth API", "JSON"],
  //     iframe:
  //     "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
  //     description: `Calorie Kitchen is meant to be a one stop shop to find better eating alternatives. It was built with a
  //     Node.js backend and serves ejs templates for client-side views. This application uses RESTFUL routing to
  //     handle API requests allowing clients to receive details. Calorie Kitchen API - JavaScript, CSS, HTML -
  //     Created a single page application with client side rending with API and AJAX capabilities. The API
  //     accessed Spoonacular DB JSON data. A web app for gathering and displaying recipes, videos and food jokes.
  //     There is an AJAX call to the Spoonacular API to fetch all of the food data.`,
  // },
  // {
  //     _id: 6,
  //     show: false,
  //     demoLink: "",
  //     videoLink: "https://i.imgur.com/lVi4QBi.mp4",
  //     projectName: "Pure CSS",
  //     githubLink: "https://github.com/HoseaCodes/Pure-css",
  //     tags: ["Gatsby", "CSS"],
  //     iframe:
  //     "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
  //     description: `Pure CSS serves as a passion project to build my frontend muscles and use a Gatsby framework. The
  //     elements are built with pure css focuing on transitions, transforms, and key key frames. `,
  // },
];
const wip = [
  {
    _id: 1,
    show: false,
    demoLink: "http://www.mergeimmersive.com/",
    videoLink: "https://i.imgur.com/bRK2U7B.png",
    projectName: "Merge-Immersive",
    githubLink: "https://github.com/HoseaCodes/merge-immersive",
    tags: ["JavaScript", "Node.js", "MongoDB", "Github API", "React"],
    iframe:
      "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
    description: `Merge Immersive operates in a similar fashion to most social media websites but on a smaller scale. On
    the home page, you will see students profiles on cards, and their profile informaton upon clicking them.
    Within profiles, you can see a link to their github portfolio.`,
  },
  {
    _id: 2,
    show: true,
    // demoLink: "",
    videoLink: "https://i.imgur.com/ZeyHjih.png",
    projectName: "Storm Gate",
    githubLink: "https://github.com/HoseaCodes/Storm-Gate",
    tags: ["JavaScript", "Node.js", "MongoDB", "Github API", "EJS Templates"],
    // iframe:
    //   "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
    description: `A robust authentication API service, deployed on AWS EC2, engineered with Node.js for seamless and secure user authentication.`,
  },
];
const clients = [
  {
    _id: 1,
    show: true,
    demoLink: "http://www.social-ring.com/",
    videoLink: "https://i.imgur.com/CTXrMRw.mp4",
    projectName: "Social-Ring",
    githubLink: "https://github.com/HoseaCodes/Social-Ring-Web",
    tags: ["JavaScript"],
    // iframe:
    //   "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
    description: `Social-Ring is a static website hosted on netlify. This website is built on with vanallia javascript.`,
  },
  {
    _id: 2,
    show: true,
    demoLink: "https://pattongroup.github.io/StarterKit/",
    videoLink: "https://i.imgur.com/QcqJxi2.mp4",
    projectName: "Patton UniverCity Training",
    githubLink: "https://github.com/PattonGroup/StarterKit",
    tags: ["JavaScript"],
    // iframe:
    //   "https://runkit.com/e/oembed-iframe?target=%2Fusers%2Fhoseacodes%2Frepositories%2Fsneaker-api.server.js%2Fdefault&referrer=",
    description: `Patton UniverCity Training is a static website hosted on GitHub pages. This website is built on with
        vanallia javascript and custom hook components.`,
  },
];
const images = [
  {
    label: "Farms",
    imgSrc:
      "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    label: "Amazing views",
    imgSrc:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    label: "Countrysides",
    imgSrc:
      "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
  },
  {
    label: "Earth homes",
    imgSrc:
      "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
  },
  {
    label: "Beach",
    imgSrc:
      "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
  },
  {
    label: "Amazing pools",
    imgSrc:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    label: "Private rooms",
    imgSrc:
      "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
  },
  {
    label: "Treehouses",
    imgSrc:
      "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
  },
  {
    label: "OMG!",
    imgSrc:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    label: "Luxe",
    imgSrc:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    label: "Cabins",
    imgSrc:
      "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
  },
  {
    label: "Historical",
    imgSrc:
      "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    label: "Castles",
    imgSrc:
      "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
  },
  {
    label: "Islands",
    imgSrc:
      "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
  },
  {
    label: "Design",
    imgSrc:
      "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
  },
  {
    label: "Iconic cities",
    imgSrc:
      "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
  },
  {
    label: "National parks",
    imgSrc:
      "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
  },
  {
    label: "Trending",
    imgSrc:
      "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
  },
  {
    label: "Mansions",
    imgSrc:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    label: "Off the gird",
    imgSrc:
      "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
  },
  {
    label: "Tiny homes",
    imgSrc:
      "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
  },
  {
    label: "House boats",
    imgSrc:
      "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
  },
  {
    label: "top",
    imgSrc:
      "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
  },
  {
    label: "Tropical",
    imgSrc:
      "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
  },
  {
    label: "Camping",
    imgSrc:
      "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
  },
  {
    label: "Vineyards",
    imgSrc:
      "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
  },
  {
    label: "Caves",
    imgSrc:
      "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
  },
  {
    label: "Containers",
    imgSrc:
      "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
  },
  {
    label: "Bed&breakfast",
    imgSrc:
      "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
  },
  {
    label: "Play",
    imgSrc:
      "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
  },
  {
    label: "New",
    imgSrc:
      "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
  },
  {
    label: "Boats",
    imgSrc:
      "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
  },
  {
    label: "Creative spaces",
    imgSrc:
      "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
  },
  {
    label: "Skilling",
    imgSrc:
      "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
  },
  {
    label: "A-frames",
    imgSrc:
      "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
  },
  {
    label: "Chef's Kitchen",
    imgSrc:
      "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
  },
  {
    label: "Desert",
    imgSrc:
      "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
  },
  {
    label: "Domes",
    imgSrc:
      "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
  },
  {
    label: "Surfing",
    imgSrc:
      "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
  },
  {
    label: "Riads",
    imgSrc:
      "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
  },
  {
    label: "Arctic",
    imgSrc:
      "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
  },
  {
    label: "Windmills",
    imgSrc:
      "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
  },
  {
    label: "Ryokans",
    imgSrc:
      "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
  },
  {
    label: "Barns",
    imgSrc:
      "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
  },
  {
    label: "Golfing",
    imgSrc:
      "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
  },
  {
    label: "Towers",
    imgSrc:
      "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
  },
  {
    label: "Minsus",
    imgSrc:
      "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
  },
  {
    label: "Yurts",
    imgSrc:
      "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
  },
  {
    label: "Dammusi",
    imgSrc:
      "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
  },
  {
    label: "Cycladic homes",
    imgSrc:
      "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
  },
  {
    label: "Ski-in/out",
    imgSrc:
      "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
  },
  {
    label: "Trulli",
    imgSrc:
      "https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg",
  },
  {
    label: "Hanoks",
    imgSrc:
      "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
  },
  {
    label: "Casas particulares",
    imgSrc:
      "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
  },
  {
    label: "Grand pianos",
    imgSrc:
      "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
  },
  {
    label: "Adapted",
    imgSrc:
      "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg",
  },
  {
    label: "Grand pianos",
    imgSrc:
      "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
  },
  {
    label: "Adapted",
    imgSrc:
      "https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg",
  },
  {
    label: "Shepherd's huts",
    imgSrc:
      "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
  },
  {
    label: "Camper vans",
    imgSrc:
      "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
  },
  {
    label: "Lake",
    imgSrc:
      "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
  },
];
const sideProjects = [
  {
    name: "Pokègallery",
    link: "https://github.com/HoseaCodes/pokegallery",
    iframe: "https://hoseacodes.github.io/pokegallery/#!",
  },
  {
    name: "Career Compose",
    link: "https://www.careercompose.com/",
    iframe: "https://www.careercompose.com/",
  },
  // {
  //   name: "COVID-19-Tracker",
  //   link: "https://github.com/HoseaCodes/COVID-19-Tracker",
  //   iframe: "https://hoseacodes-covidtracker.netlify.app/",
  // },
  {
    name: "Kidvercity",
    link: "https://www.kidvercity.com/",
    iframe: "https://www.kidvercity.com/",
  },
  {
    name: "React Github Display",
    link: "https://hoseacodes-react-github.netlify.app/",
    iframe: "https://hoseacodes-react-github.netlify.app/",
  },
];

const property = {
  _id: 1,
  propertyid: 1,
  image:
    "https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  propertyName: "Demo",
  city: "Houston",
  state: "TX",
  country: "USA",
  price: 80,
};

const engineer = {
  name: "Dominique Hosea",
  profilePic: "https://i.imgur.com/6GvtEwF.jpg",
  apps: 78,
  stars: 0,
  yearsOfExp: 2,
  position: "Associate Software Engineer",
  weakness: "Socializing",
  funfact: "I like playing cod and collecting shoes.",
  unique:
    "My personal experience and the extra touches I put into each project.",
  communication:
    "I like to spend time several months worth of hours on each project to iron out all the details.",
  iAm: ` Easy going person who loves my family, friends. I really look forward to
          sharing my appplications and enthusiasm for the engineering with the world.`,
};

const useremail = ["email"];

let response = {
  name: "Ko",
  accommodates: 9,
  bedrooms: 6,
  beds: 6,
  bathrooms: 3,
  host: { host_picture_url: "" },
  guests_included: 3,
  house_rules: `Check-in after 11:00 am
Checkout before 12:00 pm
1 guests maximum
I just hope the guests treat the space as they´re own, with respect to it as well as to my neighbours! Espero apenas que os hóspedes tratem o lugar com carinho e respeito aos vizinhos!`,
  notes: `There´s a table in the living room now, that does not show in the photos.`,
  access: ``,
  neighborhood_overview: `This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy, bakery, small market - in the area.`,
  cancellation_policy: "morderate",
  cancellation_policy: "flexible",
  amenities: [],
  description: `One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area. Lovely one bedroom + sofa-bed in the living room, perfect for two but fits up to four comfortably. There´s a small outside garden with a shower There´s a well equipped open kitchen with both 110V / 220V wall plugs and one bathroom with shower, tub and even a sauna machine! All newly refurbished! I´ll be happy to help you with any doubts, tips or any other information needed during your stay. This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy`,
};

const propertyowner = [
  { firstName: "Test", profilePic: "", bed: 2, profilePic: "" },
];

module.exports = {
  clients,
  engineer,
  featured,
  findResult,
  images,
  property,
  propertyowner,
  response,
  sideProjects,
  useremail,
  wip,
};
