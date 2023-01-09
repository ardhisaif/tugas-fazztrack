# 1. Buatlah sambungan program menggunakan : 
- then catch 
- try catch 

untuk mengecek hari kerja dari kode Asynchronous disamping dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya
```js
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
            let cek = dataDay.find((item)=> {
                return item === day //mengecek apakah ada data yang sama
            })
            // console.log(cek);
            if (cek) { //jika true maka mengembalikan data cek dan ditangkap di then / try
                resolve(cek)
            }else{ //jika false mengembalikan error dan ditangkap di catch
                reject(new Error(`hari ${day} bukan hari kerja`))
            }
        }, 3000)
    })
}
```

# 2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

Contoh : getMonth(showMonth?)
```js
const getMonth = (callback) => {
    setTimeout(() => {
        let err = true
        let month = ["Januari", "Februari", "Maret", "April", 
                    "Mei", "Juni", "Juli", "Agustus", "September",
                    "Oktober", "November", "Desember"]
        if (!err) {
            callback(null, month)
        }else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
} 
```

# 3. Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
# 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
https://jsonplaceholder.typicode.com/users
Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya