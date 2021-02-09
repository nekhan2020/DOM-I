const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

/* 
---------------------------------------------- nav ------------------------------------
 */

let nav = document.querySelectorAll("nav a");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

/* 
---------------------------------------------- cta ------------------------------------
 */

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let ctah1 = document.querySelector(".cta h1"); // need a break
ctah1.textContent = siteContent["cta"]["h1"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

/* 
---------------------------------------------- main content ----------------------------
 */

let featuresContent = document.querySelectorAll(
  ".main-content .text-content p"
);

let featuresH4 = document.querySelectorAll(".main-content .text-content h4");

featuresH4[0].textContent = siteContent["main-content"]["features-h4"];
featuresContent[0].textContent =
  siteContent["main-content"]["features-content"];

featuresH4[1].textContent = siteContent["main-content"]["about-h4"];
featuresContent[1].textContent = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

featuresH4[2].textContent = siteContent["main-content"]["services-h4"];
featuresContent[2].textContent =
  siteContent["main-content"]["services-content"];

featuresH4[3].textContent = siteContent["main-content"]["product-h4"];
featuresContent[3].textContent = siteContent["main-content"]["product-content"];

featuresH4[4].textContent = siteContent["main-content"]["vision-h4"];
featuresContent[4].textContent = siteContent["main-content"]["vision-content"];

/* 
------------------------------------------ contact ------------------------------------
 */
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"]; // need to add a break
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

/* 
---------------------------------------------- footer ------------------------------------
 */

let copyright = document.querySelector("footer");
copyright.textContent = siteContent["footer"]["copyright"];
