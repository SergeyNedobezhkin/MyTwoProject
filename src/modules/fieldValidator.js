
// const fieldValidator = () => {
//     const form = document.querySelectorAll('form');
//     const form1 = document.getElementById('form1');
//     const formBtn = form1.querySelector('button');

//     const formName = form1.querySelector('[name="user_name"]');
//     const formEmail = form1.querySelector('[name="user_email"]');
//     const formPhone = form1.querySelector('[name="user_phone"]');
//     let checkName;
//     let checkEmail;
//     let checkPhone;

//     formName.addEventListener('click', (e) => {
//         if (e.target === formName) {
//             checkName = (e) => {
//                 let value = e.target.value;
//                 let isValidName = validName(value);

//                 if (isValidName === false) {
//                     e.target.classList.add("error");
//                     e.target.style = 'border:solid; border-width: 5px; border-color: red;';
//                 }
//                 if (isValidName === true) {
//                     e.target.classList.remove("error");
//                     e.target.style = '';
//                 }
//                 return validator(isValidName);
//             };
//             const validName = (value) => {
//                 if (value.length <= 2) {
//                     return false;
//                 }
//                 if (value.length > 2) {
//                     return true;
//                 }
//             };
//         }
//         formName.addEventListener('click', checkName);
//     });

//     formEmail.addEventListener('click', (e) => {
//         if (e.target === formEmail) {
//             checkEmail = (e) => {
//                 let value = e.target.value;
//                 let isValidEmail = validEmail(value);
//                 if (isValidEmail === false) {
//                     e.target.classList.add("error");
//                     e.target.style = 'border:solid; border-width: 5px; border-color: red;';
//                 } else {
//                     e.target.classList.remove("error");
//                     e.target.style = '';
//                 }
//                 return validator(isValidEmail);
//             };

//             const validEmail = (value) => {
//                 if (value === e.target.value.replace(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i, "")) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//             };
//         }
//         formEmail.addEventListener('blur', checkEmail);
//     });

//     formPhone.addEventListener('click', (e) => {
//         if (e.target === formPhone) {
//             checkPhone = (e) => {
//                 let value = e.target.value;
//                 let isValidPhone = validPhone(value);
//                 if (isValidPhone === false) {
//                     e.target.classList.add("error");
//                     e.target.style = 'border:solid; border-width: 5px; border-color: red;';
//                 } else {
//                     e.target.classList.remove("error");
//                     e.target.style = '';
//                 }

//                 return validator(isValidPhone);
//             };

//             const validPhone = (value) => {
//                 if (value === e.target.value.replace(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
//                     " ")) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//             };
//         }
//         formPhone.addEventListener('blur', checkPhone);
//     });

//     const validator = (isValidName, isValidEmail, isValidPhone) => {
//         let isValid = true;
//         if (isValidName === false || isValidEmail === false || isValidPhone === false) {
//             isValid = false;
//         } else {
//             isValid = true;
//         }
//         console.log(isValid);
//         return isValid;
//     };
// };
// export default fieldValidator;


