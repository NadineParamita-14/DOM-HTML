// Ganti warna background div 
document.getElementById("container1").style.backgroundColor = "pink"; 
document.getElementById("container2").style.backgroundColor = "lightblue"; 

// Ganti href atribut pada tag <a> menjadi "https://www.google.com"
document.querySelector("a").setAttribute("href", "https://www.google.com");

// Menggunakan loop untuk mengubah teks, style, size, dan warna background
const listItems = document.querySelectorAll(".list");
listItems.forEach((item, index) => {
    item.textContent = `List Baru ${index + 1}`; 
    item.style.fontSize = `${16 + index * 2}px`; 
    item.style.fontStyle = "Verdana, Arial, sans-serif"; 
    item.style.backgroundColor = "#ccc"; 
});
