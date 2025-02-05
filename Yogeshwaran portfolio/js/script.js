

// light and dark mode

let themeBtn = document.querySelector('[data-theme-btn]');

let HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;


if(sessionStorage.getItem("theme")){
    HTML.dataset.theme=sessionStorage.getItem("theme")
}else{
    HTML.dataset.theme = isDark ? "dark" :"light";

    sessionStorage.setItem("theme",HTML.dataset.theme)
}


let changeTheme =  ()=>{
    HTML.dataset.theme = sessionStorage.getItem("theme")=== "light" ? "dark" : "light";

    sessionStorage.setItem("theme",HTML.dataset.theme)
}


themeBtn.addEventListener('click',changeTheme)

// tab


let tabBtn=document.querySelectorAll('[data-tab-btn]');

let [lastActiveTab]= document.querySelectorAll('[data-tab-content]')

let [lastActiveBtn]=tabBtn


tabBtn.forEach(item=>{
    item.addEventListener('click',function(){
        lastActiveTab.classList.remove('active');
        lastActiveBtn.classList.remove('active');

        let tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);

        tabContent.classList.add('active')

        this.classList.add('active')

        lastActiveTab=tabContent
        lastActiveBtn=this;
    })
})




// typing animation

const titleElement = document.getElementById('developer-title');
const titles = ["Software Engineer", "Python Developer"]; // Add other titles you want to cycle through
let currentIndex = 0;

function cycleTitles() {
  const currentTitle = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;

  typeText(currentTitle, 0);
}

function typeText(text, index) {
  if (index <= text.length) {
    titleElement.textContent = text.substring(0, index);
    setTimeout(() => typeText(text, index + 1), 100); // Typing speed (adjust as needed)
  } else {
    setTimeout(cycleTitles, 2000); // Recurse to the next title every 4 seconds
  }
}

cycleTitles(); // Start the cycling




