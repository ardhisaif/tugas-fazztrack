let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
    
let updateData = {
    name: "ahmad",
    email: "ahmad@gmail.com",
    hobby: "mancing"
}

const dataMerged = {...data, ...updateData}

console.log(dataMerged);

const {street, city} = data.address
// const street = data.address.street
// const city = data.address.city

console.log(street);
console.log(city);
