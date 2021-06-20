document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  document.getElementById("btn-connexion").addEventListener("click", () => {
    document.getElementById("open-modal").classList.add("modal-window");
  });

  document.getElementById("form-connexion").addEventListener("click", async (event) => {
    event.preventDefault();
    console.log("Btn cliqué");

    const data = {
      firstname: document.getElementById("firstname"),
      lastname: document.getElementById("lastname"),
      email: document.getElementById("email"),
      message: document.getElementById("message"),
    };

    const response = await axios.post("?", data);
    console.log(response);
  });
});
