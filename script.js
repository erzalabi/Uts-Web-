const orderListEl = document.getElementById("order-list");
const totalHargaEl = document.getElementById("total-harga");
const checkoutButtonEl = document.getElementById("checkout-button");

let dataPesanan = []; // Array to store order data

// Adding event listener to order buttons
const orderButtons = document.querySelectorAll(".order-button");
for (const button of orderButtons) {
  button.addEventListener("click", function () {
    const id = parseInt(button.dataset.id); // Get item ID from data-id attribute
    const makanan = menuItems[id - 1]; // Access corresponding item from menuItems array

    // Add item to dataPesanan array
    dataPesanan.push(makanan);

    // Create a new list item for the order
    const orderItemEl = document.createElement("li");
    orderItemEl.textContent = `${makanan.nama} - Rp ${makanan.harga}`;
    orderListEl.appendChild(orderItemEl);

    // Calculate total price
    let totalHarga = 0;
    for (const item of dataPesanan) {
      totalHarga += item.harga;
    }

    // Update total price display
    totalHargaEl.textContent = `Rp ${totalHarga}`;
  });
}

// Adding event listener to checkout button
checkoutButtonEl.addEventListener("click", function () {
  // You can add validation (optional)

  // Display confirmation message (example using alert)
  alert(
    "Pesanan Anda telah diproses!\nTotal Harga: Rp " + totalHargaEl.textContent
  );

  // Reset data
  dataPesanan = [];
  orderListEl.innerHTML = "";
  totalHargaEl.textContent = "Rp 0";
});

// Sample menu items data (replace with your actual data)
const menuItems = [
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
  {
    nama: "Mie Ayam",
    harga: 12000,
  },
  {
    nama: "Burger",
    harga: 20000,
  },
  {
    nama: "Pizza",
    harga: 25000,
  },
  {
    nama: "Sate Ayam",
    harga: 18000,
  },
];
