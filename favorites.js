const user = localStorage.getItem("loggedInUser");
const favResults = document.getElementById("favResults");

if (!user) {
  window.location.href = "login.html";
}

const key = `favorites_${user}`;
let favs = JSON.parse(localStorage.getItem(key)) || [];

if (favs.length === 0) {
  favResults.innerHTML = "<p>No favorites saved yet ❤️</p>";
}

favs.forEach((item, index) => {
  favResults.innerHTML += `
    <div class="card">
      <h3>${item}</h3>
      <button onclick="removeFav(${index})">❌ Remove</button>
    </div>
  `;
});

function removeFav(index) {
  favs.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(favs));
  location.reload();
}
