const inputField = document.getElementById('itemInput');
const addButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', function() {
    const itemText = inputField.value;

    // MEmeriksa jika input tidak kosong
    if (itemText.trim() !== '') {
        // Membuat elemen li baru
        const newItem = document.createElement('li');

        // Menambahkan teks ke elemen li
        newItem.textContent = itemText;

        // Menambahkan elemen li ke dalam ul
        itemList.appendChild(newItem);

        // mengosongkan input field
        inputField.value = '';
    } else {
        alert('Please enter an item!');
    }
});
