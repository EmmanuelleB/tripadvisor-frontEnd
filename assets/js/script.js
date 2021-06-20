document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  document.getElementById("btn-connexion").addEventListener("click", () => {
    document.getElementById("open-modal").classList.add("modal-window");
  });

  // document.querySelector("closed-form-connexion").addEventListener("click", () => {
  //   document.getElementById("open-modal").classList.remove("modal-window");
  // });

  document.getElementById("form-connexion").addEventListener("click", async (event) => {
    event.preventDefault();
    console.log("Btn cliqué");

    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const response = await axios.post("http://localhost:3000/form", data);
    console.log(data);
  });
});
