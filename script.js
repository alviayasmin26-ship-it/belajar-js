console.log("Halo, JavaScript!");
const hewan = "Elang";
console.log("Hewan favoritku: " + hewan);

let favorit = prompt("Apa hewan favoritmu?");
alert("Hewan favoritmu: " + favorit + "!");

const judul = document.querySelector("#judul h1");
console.log(judul.textContent);
judul.textContent = "Mengenal Hewan Nusantara";

//BLOK 1: TOMBOL SUKA
let jumlahSuka = 0;
const tombolSuka = document.querySelector(".btn-suka");
const teksSuka = document.querySelector(".jumlah-suka");

function tambahSuka() {
    jumlahSuka =jumlahSuka + 1;
    teksSuka.textContent = jumlahSuka;
}

tombolSuka.addEventListener("click", tambahSuka);

//BLOK 2: BACA SELENGKAP NYA

const tombolBaca = document.querySelector(".btn-baca");
const teksLengkap = document.querySelector(".selengkapnya");

function bukaTutup() {
    teksLengkap.classList.toggle("sembunyi");
    if (teksLengkap.classList.contains("sembunyi")) {
        tombolBaca.textContent = "Baca selengkapnya";
    } else {
        tombolBaca.textContent = "Sembunyikan"
    }
}

tombolBaca.addEventListener("click", bukaTutup);

// BLOK 3: MODE GELAP
const tombolGelap = document.querySelector("#tombol-gelap");

function gantiMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        tombolGelap.textContent = "Mode Terang";
    } else {
    tombolGelap.textContent = "Mode Gelap";
    }
}

tombolGelap.addEventListener("click",gantiMode);

// BLOK 1 KARTU 2: TOMBOL SUKA
let jumlahSuka2 = 0;
const tombolSuka2 = document.querySelectorAll(".btn-suka")[1];
const teksSuka2 = document.querySelectorAll(".jumlah-suka")[1];

function tambahSuka2() {
  jumlahSuka2 = jumlahSuka2 + 1;
  teksSuka2.textContent = jumlahSuka2;
}

tombolSuka2.addEventListener("click", tambahSuka2);


// BLOK 2 KARTU 2: BACA SELENGKAPNYA
const tombolBaca2 = document.querySelectorAll(".btn-baca")[1];
const teksLengkap2 = document.querySelectorAll(".selengkapnya")[1];

function bukaTutup2() {
  teksLengkap2.classList.toggle("sembunyi");
  if (teksLengkap2.classList.contains("sembunyi")) {
    tombolBaca2.textContent = "Baca selengkapnya";
  } else {
    tombolBaca2.textContent = "Tutup";
  }
}

tombolBaca2.addEventListener("click", bukaTutup2);




