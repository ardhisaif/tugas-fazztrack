const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  0

const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
let grade =""

if (mtk && bahasaIndonesia && bahasaInggris && ipa) {
    if (average >=0 && average < 60) {
        grade = "E"
    }else if (average < 70) {
        grade = "D"
    }else if (average < 80) {
        grade = "C"
    }else if (average < 90) {
        grade = "B"
    }else if (average <= 100) {
        grade = "A"
    }

    console.log(average);
    console.log(grade);
}else{
    console.log("semua nilai harus diisi terlebih dahulu");
}

