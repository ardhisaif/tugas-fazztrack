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

function showMonth(err, month) {
    if (err) {
        console.log(err);
    }else{
        month.map(element => {
            console.log(element);
        })
    }
}

getMonth(showMonth)
