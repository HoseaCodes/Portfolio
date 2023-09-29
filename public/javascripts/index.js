const project1Iframe = document.getElementById("project1-iframe");
const project1Video = document.getElementById("project1-video");
const project1Overview = document.getElementById("project1-overview");
const project1Browswe = document.getElementById("project1-browse");

const handleOverview = () => {
  console.log("click");
  project1Video.style.display = "block";
  project1Iframe.style.display = "none";
};

const handleBrowse = () => {
  console.log("click");
  project1Video.style.display = "none";
  project1Iframe.style.display = "block";
};

project1Overview.addEventListener("click", handleOverview);
project1Browswe.addEventListener("click", handleBrowse);
