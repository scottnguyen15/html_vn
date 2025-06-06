// Set a given theme and store in localStorage
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// Immediately apply theme on load
(function () {
  const savedTheme = localStorage.getItem('theme') || 'theme-main';
  setTheme(savedTheme);
})();
