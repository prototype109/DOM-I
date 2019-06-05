const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navLinks = document.querySelectorAll('a');

// for(let i = 0; i < 6; i++){
//   navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
// }

navLinks.forEach((link, index) =>{
  link.textContent = siteContent["nav"][`nav-item-${index + 1}`];
});

let ctaTxt = document.querySelector('.cta-text');
//ctaTxt.removeChild('h1');

let h1Array = [];
let anyText = siteContent["cta"]["h1"].split(" ");

h1Array = anyText.map(word => {
  let text = document.createElement('h1');
  text.textContent = word;
  return text;
});

//console.log(h1Array);
h1Array = h1Array.reverse();
h1Array.forEach(textBlock => ctaTxt.prepend(textBlock));

let ctaBttn = document.querySelector('.cta-text button');
ctaBttn.textContent = siteContent["cta"]["button"];

// let ctaH1 = document.querySelector('.cta-text h1');
// ctaH1.textContent = siteContent["cta"]["h1"];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

let main = document.querySelector('.main-content');


let mainContentText = Object.values(siteContent["main-content"]);
let mainSection = document.querySelectorAll('.text-content');

mainContentText.splice(4, 1);

// for(let i = 0; i < mainSection.length; i++){
//   for(let j = 0; j < mainSection[i].childElementCount; j++){
//     mainSection[i].children[j].textContent = mainContentText.shift();
//   }
// }

mainSection.forEach(elem =>{
  let textContentChildren = Array.from(elem.children);
  textContentChildren.forEach(child => child.textContent = mainContentText.shift());
});

let midImg = document.querySelector('.middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

let contactValues = Object.values(siteContent["contact"]);
let contactSection = document.querySelector(".contact");
let contactChildren = Array.from(contactSection.children);

// for(let i = 0; i < contactSection.childElementCount; i++){
//   contactSection.children[i].textContent = contactValues[i];
// }

contactChildren.forEach((elem, index) => elem.textContent = contactValues[index]);

let footer = document.querySelector('footer p');

footer.textContent = siteContent["footer"]["copyright"];
