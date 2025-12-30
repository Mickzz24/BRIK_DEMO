document.addEventListener("DOMContentLoaded", () => {
  if (!location.pathname.includes("login") &&
      localStorage.getItem("auth") !== "true") {
    location.href = "login.html";
  }

  const emailBox = document.getElementById("emailBox");
  if (emailBox) emailBox.innerText = localStorage.getItem("email");
});

function openProject() {
  location.href = "project.html";
}
