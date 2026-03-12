

export const submit = (e, loadingForm) => {
  e.preventDefault();

  const elemMap = Array.from(e.target.elements)
    .filter(elem => elem.id && elem.id !== "submit")
    .map(elem => {return {
      value: elem.value,
      elem: elem,
      id: elem.id,
      isValid: !(elem.value == null || elem.value == undefined || elem.value.split(" ").join("") == ""),
    }})

  if (!elemMap.every(elem => elem.isValid == true)) {
    animFail(e.target.elements.submit);

    const failElem = elemMap.filter(elem => !elem.isValid);

    failElem.forEach((elem) => animFail(elem.elem))

  } else {
    const values = Object.fromEntries(
      elemMap.map(elem => [elem.id, elem.value])
    )
    sendContactMail(e, values, loadingForm);
  }
};

const sendContactMail = (e, values, loadingForm) => {

  const { fname, lname, eMail, phone, subject, message } = values;

  loadingForm.classList.remove("hidden");

  const submitBtn = e.target.elements.submit;
  submitBtn.classList.add("hidden")

  fetch(`https://formsubmit.co/ajax/b36899de9bfed69f262e357158a5c7e4`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({
      Obra: "Nahuel Huapi 4265",
      Nombre: `${fname}`,
      Apellido: `${lname}`,
      eMail: `${eMail}`,
      phone: `${phone}`,
      Asunto: `${subject}`,
      Mensaje: `${message}`,
      _subject: `Nuevo mensaje de ${fname} ${lname}`,
    })
  })
    .then(response => {
      //console.log("Response object:", response);
      return response.json();
    })
    .then(data => {
      //console.log("JSON recibido:", data);
      e.target.reset();
      animSuccess(submitBtn);
    })
    .catch(error => {
      //console.log(error);
    }).finally(() => {
      submitBtn.classList.remove("hidden")
      loadingForm.classList.add("hidden");
    });
}

const animSuccess = (elem) => {
  elem.classList.add("success");
  elem.addEventListener("animationend", () => elem.classList.remove("success"), { once: true })
}

const animFail = (elem) => {
  elem.classList.add("fail");
  elem.addEventListener("animationend", () => elem.classList.remove("fail"), { once: true })
}
