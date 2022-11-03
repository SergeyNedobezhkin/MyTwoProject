
const fieldValidator = (formName, formEmail, formPhone) => {

function checkLength() {
    console.log('У вас : 2 символов'); 
  }
const addText = (event) => {
    event.target.value = event.target.value.replace(/[^а-яё\- ]/gi, "");

    if (event.target.value.length < 2) {
        checkLength();
    }
};
formName.forEach(item => {
    item.addEventListener('mousedown', addText);
});
 

};

export default fieldValidator;


