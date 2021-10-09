
import template from '../template.hbs';
import menuList from '../menu.json';

const addTemplate = template(menuList);
const menuItem = document.querySelector('.js-menu');

menuItem.insertAdjacentHTML('beforeend', addTemplate);

