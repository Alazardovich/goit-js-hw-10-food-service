const onThemeForBody = document.body;
const changeToolbarTheme = document.querySelector('#theme-switch-toggle');
console.log(onThemeForBody);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  changeToolbarTheme.addEventListener('change', onChangeTheme);
  function onChangeTheme() {
      if (changeToolbarTheme.checked){
        onThemeForBody.classList.toggle('Theme.LIGHT', 'Theme.DARK');
      }; 
    
        onThemeForBody.classList.toggle('Theme.DARK', 'Theme.LIGHT'); 
     
    

  }