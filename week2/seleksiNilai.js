const arr = [2, 25, 4, 14, 17, 30, 8]

const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray )=> {
    if (nilaiAwal >= nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal"
    }

    if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5"
    }

    let arr = []
    for (let i = 0; i < dataArray.length; i++) {
        const num = dataArray[i];
        if (num > nilaiAwal && num < nilaiAkhir) {
            arr.push(num)
        }
    }

    if (arr.length === 0) {
        return "Nilai tidak ditemukan"
    }

    return arr.sort(function(a, b){return a - b});
}

console.log(SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(4, 17 , [2, 25, 4]));
console.log(SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]));