document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  document.getElementById("btn-connexion").addEventListener("click", () => {
    document.querySelector(".modal-window").classList.remove("hidden-modal");
    document.querySelector("body").classList.add("no-scroll");
  });

  document.querySelector("closed-form-connexion").addEventListener("click", () => {
    document.querySelector(".modal-window").classList.add("hidden-modal");
    document.querySelector("body").classList.remove("no-scroll");
  });

  document.getElementById("form-connexion").addEventListener("click", async (event) => {
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
