const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  form.querySelector('[name="user_email"]').setAttribute("required", "");
  document.querySelector('[name="user_message"]').classList.add("success");
  const statusBlock = document.createElement("div");
  let loadText = "Загрузка...";
  let errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";

  const isValid = (e) => {
    if (e.target.matches('[name="user_name"]')) {
      let value = e.target.value;
      if (value.replace(/^[а-яё][а-яё\' ']{1,20}$/gi, "")) {
        e.target.classList.remove("success");
        e.target.classList.add("error");
        e.target.style = "border:solid; border-width: 5px; border-color: red;";
        value = false;
      } else if (!value.replace(/^[а-яё][а-яё\' ']{1,20}$/gi, "")) {
        e.target.classList.remove("error");
        e.target.style = "";
        e.target.classList.add("success");
        value = true;
      }
      return validate(value);
    }

    if (e.target.matches('[name="user_email"]')) {
      let value = e.target.value;

      if (value.replace(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i, "")) {
        e.target.classList.remove("success");
        e.target.classList.add("error");
        e.target.style = "border:solid; border-width: 5px; border-color: red;";
        value = false;
      } else if (!value.replace(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i, "")) {
        e.target.classList.remove("error");
        e.target.style = "";
        e.target.classList.add("success");
        value = true;
      }
      return validate(value);
    }
    if (e.target.matches('[name="user_phone"]')) {
      let value = e.target.value;
      if (
        value.replace(/^\+?[78][-\(]?\d{3}\)?-?\d{0,3}-?\d{2}-?\d{0,2}$/i, "")
      ) {
        e.target.classList.remove("success");
        e.target.classList.add("error");
        e.target.style = "border:solid; border-width: 5px; border-color: red;";
        value = false;
      } else if (
        !value.replace(/^\+?[78][-\(]?\d{3}\)?-?\d{0,3}-?\d{2}-?\d{0,2}$/i, "")
      ) {
        {
          e.target.classList.remove("error");
          e.target.style = "";
          e.target.classList.add("success");
          value = true;
        }
      }
      return validate(value);
    }
  };
  const validate = (list) => {
    let success = true;
    Array.from(list).forEach((input) => {
      if (!input.classList.contains("success")) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    // Отправленние данных
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    // Отправить форму
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      statusBlock.textContent = loadText;

      if (val !== "") {
        formBody[key] = val;
      }
      statusBlock.style = "color: white;";
      form.append(statusBlock);
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block" && element.textContent !== "0") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      // Отправленные данные
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          if (statusBlock.textContent === successText) {
            setTimeout(function () {
              statusBlock.style.display = "none";
            }, 3000);
          }

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = "";
    }
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста!!!");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }

  form.addEventListener("input", isValid);
};
export default sendForm;
