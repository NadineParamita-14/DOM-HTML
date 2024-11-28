// Mengubah warna background container1 dan container2
document.getElementById('container1').style.backgroundColor = 'pink'; 
document.getElementById('container2').style.backgroundColor = 'lightblue'; 
// Mengganti href dari link
document.querySelector('a').setAttribute('href', 'https://www.google.com');

// Menggunakan loop untuk mengubah text, style, size, dan warna background list
const lists = document.querySelectorAll('li'); 

lists.forEach((list, index) => {
    list.textContent = `List Baru ${index + 1}`; 
    list.style.fontSize = '25px'; 
    list.style.fontStyle = 'courier'; 
    list.style.backgroundColor = 'skyblue'; 
    list.style.color = 'darkblue'; 
});
