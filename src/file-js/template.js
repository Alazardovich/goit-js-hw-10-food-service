
import template from '../template.hbs';
import menuList from '../menu.json';

const addTemplate = template(menuList);
const menuItem = document.querySelector('body');

menuItem.insertAdjacentHTML('beforeend', addTemplate);

