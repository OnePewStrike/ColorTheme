// Theme Click Module
const openTheme = document.getElementById("openTheme")
const closeTheme = document.getElementById("closeTheme")
const themeModal = document.getElementById("theme")

openChat.addEventListener('click', () => {
  themeModal.classList.add('show');
});

closeChat.addEventListener('click', () => {
  themeModal.classList.remove('show');
});