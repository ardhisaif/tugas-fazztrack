const nameList = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

const searchName = (text, maxWord, callback)=> {
    let arr = []
    for (let i = 0; i < nameList.length; i++) {
        const name = nameList[i].toLocaleLowerCase()
        const isName = callback(name, text)
        if (isName) {
            arr.push(nameList[i])
        }
        if (arr.length === maxWord) {
            return arr
        }
    }
    return arr
}

const checkName = (nama, input)=> {
    for (let i = 0; i < nama.length; i++) {
        let string = ""
        for (let j = 0; j < input.length; j++) {

            if (nama[i + j] === input[j]) {
            string += input[j]
            }

            if (string.length === input.length) {
                return true
            }
        }
    }
    return false
}

console.log(searchName("an", 3, checkName));
console.log(searchName("al", 2, checkName));
console.log(searchName("ell", 3, checkName));
console.log(searchName("carol", 3, checkName));
console.log(searchName("caroli", 3, checkName));



// const searchName = (text, maxWord, textName) => {
//     console.log(textName(text, maxWord));
// }

// const textName = (input, maxWord) => {
//     let arr = []
//     for (let i = 0; i < name.length; i++) { //looping array name
//         let j = 0;
//         const nameLowerCase = name[i].toLocaleLowerCase() //mengubah nama ke lowercase
//         while ( j < nameLowerCase.length) { //looping tiap huruf
//             const text = nameLowerCase;
//             let k = 0
//             let str = 0
//             while (k < input.length) { //looping input 
//                 if(text[j + k] === input[k]) { //membandingkan tiap huruf name dengan input
//                     str ++ 
//                     if (str === input.length) { //jika yang dibandingkan sama semua maka akan push ke array
//                         arr.push(name[i])
//                         if (arr.length === maxWord) {
//                             return arr   
//                         }
//                         break
//                     }
//                 }
//                 k++
//             }
//             j++
//         }
//     }
//     return arr
// }


// searchName("an", 3, textName)

// const textName = (input) => {
//     let arr = []
//     for (let i = 0; i < name.length; i++) {
//         for (let j = 0; j < name[i].length; j++) {
//             const text = name[i];
//             let k = 0
//             if (text[j + 0] === input[0] && text[j + 1] === input[1]) {
//                 arr.push(name[i]) 
//                 break
//             }
//         }
//     }
//     console.log(arr);
// }
