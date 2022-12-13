const mtk = 83
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 100

const hitungUN = (...nilaiUN) => {
    let average = 0
    
    for (const nilai of nilaiUN) {
        if (isNaN(nilai)) {
            return "input harus berupa angka"
        }

        if (!nilai){
            return "semua nilai harus diisi terlebih dahulu"
        }
        average += nilai
    }

    average /= nilaiUN.length
    
    let grade = ""
    
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

    return `average: ${average}\ngrade: ${grade}`
}

console.log(hitungUN(mtk, bahasaIndonesia, bahasaInggris, ipa));