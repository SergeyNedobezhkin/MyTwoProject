
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import check from './modules/check';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import fieldValidator from './modules/fieldValidator';
timer('5 nov 2022');
menu();
modal();
check();
tabs();
slider();
calc();
fieldValidator(document.querySelectorAll('[name="user_name"]'),document.querySelectorAll('[name="user_email"]'),
document.querySelectorAll('[name="user_phone"]'));

