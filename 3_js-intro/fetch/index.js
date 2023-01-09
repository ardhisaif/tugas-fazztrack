// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// const fetch = require("node-fetch")
import fetch from "node-fetch"

console.log("ok");

const apiURL = "https://jsonplaceholder.typicode.com/users/"
console.log(apiURL);
// fetch(apiURL, {
//     method: "GET"
// })
// .then(res => res.json())
// .then(data => {
//     data.map((user) => {
//         console.log(user.name);
//     })
// })

async function showName() {
    try {
        const res = await fetch(apiURL)
        const data = await res.json()
        const output = await data.map((user) => {
                        return user.name
                    })
        console.log(output);
    } catch (error) {
        console.log(error);
    }
    
}

showName()
