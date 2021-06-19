document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");
  document.getElementById("btn-connexion").addEventListener("click", () => {
    document.getElementById("open-modal").classList.add("modal-window");
  });
});
