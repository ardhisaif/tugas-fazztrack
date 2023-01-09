

function checkUsername(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(userName) !== 'string') {
                reject(new Error("username tidak boleh angka"))
            }

            if (userName.length < 4) {
                reject(new Error("panjang username harus lebih dari 3"))
            }
            
            resolve(userName)
        }, 2000);
    });
}

function login() {
    const name = "wre"

    checkUsername(name)
        .then(() => {
            if (name === "ahmad") {
                console.log("anda login");
            }else{
                console.log("anda gagal login");
            }
        })
        .catch(err => {
            console.log(err);
        })
}

// login()

function checkEmail(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(input);
            let checkInput = input.search("@")
            if (checkInput === -1) {
                reject(new Error("format email salah"))
            }

            const email = ["tes@gmail.com", "cek@gmail.com", "ahmad@gmail.com"]
            email.find((item) => {
                if (item === input) {
                    reject(new Error("email already exist"))
                }


                resolve(input)
            })


        }, 2000);
    })
}

async function register() {
    try {
        const input = "ardhi@gmail.com"
        
        const result = await checkEmail(input)
        console.log(result);
        
    } catch (err) {
        console.log(err);
    }
    
    
}

register()