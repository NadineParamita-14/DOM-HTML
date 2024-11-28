// Mengganti warna background div menjadi warna favorit
document.getElementById("container1").style.backgroundColor = "lightblue"; // Ganti dengan warna favorit Anda
document.getElementById("container2").style.backgroundColor = "lightblue"; // Ganti dengan warna favorit Anda

// Mengganti href atribut pada tag <a> menjadi "https://www.google.com"
document.querySelector("a").setAttribute("href", "https://www.google.com");

// Menggunakan loop untuk mengubah teks, style, size, dan warna background
const listItems = document.querySelectorAll(".list");
listItems.forEach((item, index) => {
    item.textContent = `List Baru ${index + 1}`; // Mengubah teks menjadi "List Baru 1", dst.
    item.style.fontSize = `${16 + index * 2}px`; // Mengubah ukuran font (bebas)
    item.style.fontStyle = "italic"; // Mengubah style font (bebas)
    item.style.backgroundColor = "#ccc"; // Mengubah warna background menjadi abu-abu
});
