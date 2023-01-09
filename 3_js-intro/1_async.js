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

function promiseKerja() {
    const today = "senin" 

    cekHariKerja(today)//memasukkan variabel today ke parameter
        .then((day)=> {
            console.log(`hari ${day} adalah hari kerja`);
        })
        .catch((err) => {
            console.log(err);
        })
}

async function asyncKerja() {
    try {
        const today = "senin"
        const day = await cekHariKerja(today) //memasukkan variabel today ke parameter
        if (day) {
            console.log(`hari ${day} adalah hari kerja`);
        }
        
    } catch (err) {
        console.log(err);
    }
}

// promiseKerja()
asyncKerja()
