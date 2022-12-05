
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import check from './modules/check';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import {swiperFunc} from './modules/swiper';
timer('10 dec 2022');
menu();
modal();
check();
tabs();
slider();
calc();
swiperFunc();
sendForm({ formId:'form1', someElem:[{  type: 'block', id: 'total'}]});
sendForm({ formId:'form3', someElem:[{  type: 'block', id: 'total'}]});
sendForm({ formId:'form2', someElem:[{  type: 'block', id: 'total'}]});


