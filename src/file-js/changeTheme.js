const onThemeForBody = document.body;
const changeToolbarTheme = document.querySelector('#theme-switch-toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  changeToolbarTheme.addEventListener('change', onChangeTheme);

  onThemeForBody.classList.add(
    localStorage.getItem('theme'=== null)
  ? Theme.LIGHT : localStorage.getItem('theme')
  );
  if (onThemeForBody.cheked===Theme.DARK) {
    changeToolbarTheme.cheked=true;
  }

  function onChangeTheme(e) {
      if (e.target.checked) {
        onThemeForBody.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK)
        // return;
      } 
      else {
        onThemeForBody.classList.replace(Theme.DARK,Theme.LIGHT);
        // localStorage.removeItem('theme');
        localStorage.setItem('theme',Theme.LIGHT);
      } 
  }
  const correctStorage = localStorage.getItem('theme');
 
// =======================================================
  // const Theme = {
  //   LIGHT: 'light-theme',
  //   DARK: 'dark-theme',
  // };
  // const checkBodyTheme = document.body.classList;
  // const inputCheckBox = document.querySelector('#theme-switch-toggle');
  // console.log(checkBodyTheme);
  
  

  // checkBodyTheme.add(
  //   localStorage.getItem('theme') === null
  //     ? Theme.LIGHT
  //     : localStorage.getItem('theme'),
  // );
  
  // if (checkBodyTheme.value === Theme.DARK) {
  //   inputCheckBox.checked = true;
  // }
  
  // const checkedTheme = event => {
  //   if (event.target.checked) {
  //     localStorage.setItem('theme', Theme.DARK);
  //     checkBodyTheme.replace(Theme.LIGHT, Theme.DARK);
  
  //     return;
  //   }
  
  //   localStorage.setItem('theme', Theme.LIGHT);
  //   checkBodyTheme.replace(Theme.DARK, Theme.LIGHT);
  // };
  // inputCheckBox.addEventListener('change', checkedTheme);

  // ====================================================

  // function onChangeTheme() {
  //   if (changeToolbarTheme.checked) {
  //     addRemoveTheme(Theme.DARK, Theme.LIGHT);
  //     localStorage.setItem('theme', Theme.DARK);
  //   } else {
  //     addRemoveTheme(Theme.LIGHT, Theme.DARK);
  //     localStorage.removeItem('theme');
  //     localStorage.setItem('theme', Theme.LIGHT);
  //   }
  // }
  
  // function addRemoveTheme(add, remove) {
  //   onThemeForBody.classList.add(add);
  //   onThemeForBody.classList.remove(remove);
  // }
  
  // const currentTheme = localStorage.getItem('theme');
  // if (currentTheme === Theme.DARK) {
  //   changeToolbarTheme.checked = true;
  //   addRemoveTheme(Theme.DARK, Theme.LIGHT);
  // }
  
