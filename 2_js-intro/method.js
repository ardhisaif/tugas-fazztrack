//convert number ke string
let num = 99
console.log("1.");
console.log(typeof(num));
const string = num.toString()
console.log(typeof(string), "\n");

//memisahkan kalimat menjadi array
let text1 = "saya belajar javascript";
const arr = text1.split(" ");//memasukkan parameter triger split
console.log("2.");
console.log(arr, "\n");

//semua huruf menjadi huruf besar
let text2 = "Selamat Pagi";
const uppercase = text2.toUpperCase();
console.log("3.");
console.log(uppercase, "\n");

//semua huruf menjadi huruf kecil
let text3 = "Selamat Pagi";
const lowercase = text2.toLowerCase();
console.log("4.");
console.log(lowercase, "\n");

// bulatkan ke atas
const mathCeil = Math.ceil(5.1);//membulatkan angka diatas terdekatnya
console.log("5.");
console.log(mathCeil, "\n");

// bulatkan ke bawah
const mathFloor = Math.floor(5.1);//membulatkan angka dibawah terdekatnya
console.log("6.");
console.log(mathFloor  , "\n");

// mencari angka terbesar
const max = Math.max(1, 150, 30, 20, 38);
console.log("7.");
console.log(max, "\n");

// mencari angka terbesar
const min = Math.min(1, 150, 30, 20, 38);
console.log("8.");
console.log(min, "\n");

// mengembalikan angka acak
const random10 = Math.random() * 10; //angka acak dari 0 - 10
console.log("9.");
console.log(Math.floor(random10), "\n");

// cek apakah input merupakan angka
const input = 56
console.log("10.");
console.log(Number.isInteger(input));