// Untuk apel
let apel = document.querySelector('.apel');
const jmlapel = document.querySelector('.jumlahBeliapel');

// Untuk pisang
let pisang = document.querySelector('.pisang');
const jmlpisang = document.querySelector('.jumlahBelipisang');

// Untuk anggur
let anggur = document.querySelector('.anggur');
const jmlanggur = document.querySelector('.jumlahBelianggur');
// Untuk mangga
let mangga = document.querySelector('.mangga');
const jmlmangga = document.querySelector('.jumlahBelimangga');
// Hasil
const hasil = document.querySelector('#total');

// Ketika tombol proses ditekan
const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function () {
    // Kalo barang gak ada yang di check tampilkan alert
    if (apel.checked === false && pisang.checked === false && anggur.checked === false && mangga.checked === false) {
        alert('Check barang terlebih dahulu!');
    }

    // Kalo barang apel di check maka akan dikali dengan jumlah barang yang di beli
    let hargaapel = 23000; // Harga awal apel, sudah kita tentukan
    if (apel.checked === true) {
        hargaapel *= jmlapel.value;
        hasil.value = hargaapel;
    }

    // Kalo barang pisang di check maka akan dikali dengan jumlah barang yang di beli
    let hargapisang = 12000; // Harga awal pisang, sudah kita tentukan
    if (pisang.checked === true) {
        hargapisang *= jmlpisang.value;
        hasil.value = hargapisang;
    }

    // Kalo barang anggur di check maka akan dikali dengan jumlah barang yang di beli
    let hargaanggur = 35000; // Harga awal anggur, sudah kita tentukan
    if (anggur.checked === true) {
        hargaanggur *= jmlanggur.value;
        hasil.value = hargaanggur;
    }
    // Kalo barang mangga di check maka akan dikali dengan jumlah barang yang di beli
    let hargamangga = 17000; // Harga awal mangga, sudah kita tentukan
    if (mangga.checked === true) {
        hargamangga *= jmlmangga.value;
        hasil.value = hargamangga;
    }

    // Kalo semua barang di check maka akan dijumlahkan harga nya dan ditampilkan ke hasil value atau ke bagian input Total Harga
    if (apel.checked === true && pisang.checked === true && anggur.checked === true && mangga.checked === true) {
        hasil.value = hargaapel + hargapisang + hargaanggur + hargamangga;

        // Kalo yang di check cuman barang hp dan laptop saja, maka akan dijumlahkan harga hp dan laptop saja
    } else if (apel.checked === true && pisang.checked === true && anggur.checked === true) {
        hasil.value = hargaapel + hargapisang + hargaanggur ;

        // Kalo yang di check cuman barang hp dan komputer saja, maka akan dijumlahkan harga hp dan komputer saja
    } else if (apel.checked === true && anggur.checked === true && mangga.checked === true) {
        hasil.value = hargaapel + hargaanggur + hargamangga;
    
    } else if (apel.checked === true && pisang.checked === true && mangga.checked === true) {
        hasil.value = hargaapel + hargapisang + hargamangga;

    } else if (pisng.checked === true && anggur.checked === true && mangga.checked === true) {
        hasil.value = hargapisang + hargaanggur + hargamangga;

        // Kalo yang di check cuman barang laptop dan komputer saja, maka akan dijumlahkan harga laptop dan komputer saja
    }
});