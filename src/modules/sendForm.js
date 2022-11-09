const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';
    const formName = form.querySelector('[name="user_name"]');
    const formEmail = form.querySelector('[name="user_email"]');
    const formPhone = form.querySelector('[name="user_phone"]');
    const formMess = document.querySelector('[name="user_message"]');

    formName.addEventListener('input', (e) => {
        if (e.target === formName) {
            let value = e.target.value;
            let isValidName = validName(value);

            if (isValidName === false) {
                e.target.classList.remove("success");
                e.target.classList.add("error");
                e.target.style = 'border:solid; border-width: 5px; border-color: red;';
            }

            if (isValidName === true) {
                e.target.classList.remove("error");
                e.target.style = '';
                e.target.classList.add("success");
            }
            return validate(isValidName);
        }
    });

    const validName = (value) => {
        if (value.length <= 2) {
            return false;
        }
        if (value.length > 2) {
            return true;
        }
    };

    formEmail.addEventListener('input', (e) => {
        if (e.target === formEmail) {
            let value = e.target.value;
            let isValidEmail = validEmail(value);

            if (isValidEmail === false) {
                e.target.classList.remove("success");
                e.target.classList.add("error");
                e.target.style = 'border:solid; border-width: 5px; border-color: red;';
            } if (isValidEmail === true) {
                e.target.classList.remove("error");
                e.target.style = '';
                e.target.classList.add("success");
            }
            return validate(isValidEmail);
        }
    });

    const validEmail = (value) => {
        if (value === value.replace(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i, "")) {
            return false;
        } else {
            return true;
        }
    };

    formPhone.addEventListener('input', (e) => {
        if (e.target === formPhone) {
            let value = e.target.value;
            let isValidPhone = validPhone(value);

            if (isValidPhone === false) {
                e.target.classList.remove("success");
                e.target.classList.add("error");
                e.target.style = 'border:solid; border-width: 5px; border-color: red;';
            } if (isValidPhone === true) {
                e.target.classList.remove("error");
                e.target.style = '';
                e.target.classList.add("success");
            }
            return validate(isValidPhone);
        }
    });

    const validPhone = (value) => {
        if (value === value.replace(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/i, "")) {
            return false;
        } else {
            return true;
        }
    };

    formMess.addEventListener('input', (e) => {
        if (e.target === formMess) {
            let value = e.target.value;
            let isValidMess = validMess(value);

            if (isValidMess === false) {
                e.target.classList.remove("success");
                e.target.classList.add("error");
                e.target.style = 'border:solid; border-width: 5px; border-color: red;';
            }
            if (isValidMess === true) {
                e.target.classList.remove("error");
                e.target.style = '';
                e.target.classList.add("success");
            }
            return validate(isValidMess);
        }
    });

    const validMess = (value) => {
        if (value === value.replace(/[^а-яё\- ?!,.]/gi, "")) {
            return true;
        }

        if (value !== value.replace(/[^а-яё\- ?!,.]/gi, "")) {
            return false;
        }
    };

    const validate = (list) => {
        let success = true;
        Array.from(list).forEach(input => {
            console.log(input);
            if (!input.classList.contains('success')) {
                success = false;
            }
        });
        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);

        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);
        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                });
            })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert('Данные не валидны!!!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!!!');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;


