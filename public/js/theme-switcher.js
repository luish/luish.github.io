document.addEventListener('DOMContentLoaded', function(){
  const switcherTextElement = document.querySelector('.theme-switcher-text');

  const setDarkTheme = () => {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    switcherTextElement.innerHTML = 'Light mode';
  }

  const setLightTheme = () => {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('theme');
    switcherTextElement.innerHTML = 'Dark mode';
  }

  if (localStorage.getItem('theme') === 'dark') {
    setDarkTheme();
  }

  const themeSwitcher = document.querySelector(".theme-switcher");
  if (themeSwitcher) {   
    themeSwitcher.addEventListener('click', (event) => {
      event.preventDefault();
      if (document.body.getAttribute('data-theme') === 'dark') {
        setLightTheme();
      } else {
        setDarkTheme();
      }
    });
  }
});