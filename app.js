// Theme Pop Up Module 
const openTheme = document.getElementById("openTheme")
const closeTheme = document.getElementById("closeTheme")
const themeModal = document.getElementById("theme")

openTheme.addEventListener('click', () => {
  themeModal.classList.add('show');
});

closeTheme.addEventListener('click', () => {
  themeModal.classList.remove('show');
});

// Theme Click Module
const summerToggle = document.getElementById("summer")
const fallToggle = document.getElementById("fall")
const springToggle = document.getElementById("spring")
const autumnToggle = document.getElementById("autumn")
const darkToggle = document.getElementById("dark")
const lightToggle = document.getElementById("light")


// Summer Click Module
summerToggle.addEventListener('click', () => { 
  document.body.classList.toggle("summer-theme")
})

// Fall Click Module
fallToggle.addEventListener('click', () => { 
  document.body.classList.toggle("fall-theme")
})

// Spring Click Module
springToggle.addEventListener('click', () => { 
  document.body.classList.toggle("spring-theme")
})

// Autumn Click Module
autumnToggle.addEventListener('click', () => { 
  document.body.classList.toggle("autumn-theme")
})

// Dark Click Module
darkToggle.addEventListener('click', () => { 
  document.body.classList.toggle("dark-theme")
})

// Light Click Module
lightToggle.addEventListener('click', () => { 
  document.body.classList.toggle("light-theme")
})