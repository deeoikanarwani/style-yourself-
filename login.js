function login() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter email");
    return;
  }

  localStorage.setItem("loggedInUser", email);
  window.location.href = "index.html";
}
