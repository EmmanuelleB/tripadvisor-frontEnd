const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  const header = $.querySelector("header");
  const btnConnect = $.getElementById("btn-connexion");
  const modal = $.querySelector(".modal-window");
  const body = $.querySelector("body");
  const btnCloseForm = $.querySelector(".closed-form-connexion");
  const form = $.getElementById("form-connexion");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    console.log(scroll);
    if (scroll !== 0) {
      header.classList.add("header-border");
    } else {
      header.classList.remove("header-border");
    }
  });

  btnConnect.addEventListener("click", () => {
    modal.classList.remove("hidden-modal");
    body.classList.add("no-scroll");
  });

  btnCloseForm.addEventListener("click", () => {
    modal.classList.add("hidden-modal");
    body.classList.remove("no-scroll");
  });

  form.addEventListener("click", async (event) => {
    event.preventDefault();
    console.log("Btn cliqué");

    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const response = await axios.post("https://my-tripadvisor-app.herokuapp.com/form", data);
    console.log(data);
  });
});
