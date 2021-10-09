const onThemeForBody = document.body;
const changeToolbarTheme = document.querySelector('#theme-switch-toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  changeToolbarTheme.addEventListener('change', onChangeTheme);

  function onChangeTheme(e) {
    e.preventDefault();
      if (changeToolbarTheme.checked){
        onThemeForBody.classList.add(Theme.DARK);
        onThemeForBody.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'Theme.DARK')
      } else {
        onThemeForBody.classList.replace(Theme.DARK,Theme.LIGHT);
        localStorage.removeItem('theme');
        localStorage.setItem('theme','Theme.LIGHT');
      } 
  }
  const correctStorage = localStorage.getItem('theme');
  if (correctStorage === Theme.DARK) {
    changeToolbarTheme.checked = true;
    onThemeForBody.classList.replace(Theme.DARK,Theme.LIGHT);
  }
 