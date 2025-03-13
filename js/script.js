// Ini file javascript

// Function to validate form
function validateForm() {
    // Get value from input
    const nameInput = document.getElementById('name-input');

    // Check if input is empty
    if (nameInput.value == '') {
        alert('Name must be filled out');
    } else {
        // Write value to the page
    }
}

let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    // Get all banner elements
    const banners = document.getElementsByClassName('banner-img');

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Show first banner
    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);

// Fungsi buat handle submit form tanpa reload halaman
function submitForm(event) {
    event.preventDefault(); // Cegah reload biar hasilnya bisa langsung muncul

    // Ambil data dari form
    let name = document.getElementById("name").value; // Ambil nama yang diisi user
    let date = document.getElementById("date").value; // Ambil tanggal
    let message = document.getElementById("message").value; // Ambil pesan yang diinput user
    let gender = document.querySelector('input[name="gender"]:checked'); // Cek jenis kelamin yang telah dipilih

    // Ambil waktu sekarang dalam format yang gampang dibaca
    let currentTime = new Date().toLocaleString();

    // Kalau gender belum dipilih, kasih default "Tidak Dipilih"
    let genderValue = gender ? gender.value : "Tidak Dipilih";

    // Masukin hasil input ke dalam message-result
    document.getElementById("current-time").textContent = `Current time : ${currentTime}`;
    document.getElementById("result-name").textContent = `Nama : ${name}`;
    document.getElementById("result-date").textContent = `Tanggal : ${date}`;
    document.getElementById("result-gender").textContent = `Jenis Kelamin : ${genderValue}`;
    document.getElementById("result-message").textContent = `Pesan : ${message}`;
}