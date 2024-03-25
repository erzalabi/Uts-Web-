document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Erzal" && password === "1111") {
      window.location.href = "order.html";
    } else {
      alert("Nama pengguna atau Password yang anda masukkan salah !");
    }
  });
