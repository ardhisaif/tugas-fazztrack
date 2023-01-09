## 1. Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:

- name (string)
- age(number)
- hobbies (array)
- IsMarried (boolean)
- schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
- skills (Array of Obj) with key skillName and level (beginner, advanced, expert)
- interestInCoding (Boolean)

Contoh: 
```js
const biodata = {
	name: “bagus”,
	age: …
.... : ...  
}
```

## 2. Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:

- 90 - 100 = A
- 80 - 89 = B
- 70 - 79 = C
- 60 - 69 = D
- 0 - 59 = E
 
Contoh: 
```js
const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69
…………….
…………....
```

Output: 
```js
Rata-rata = 82
Grade = B
```

## 3. Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

Contoh: 
```js
const printSegitiga = 5
//Output: 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1


const printSegitiga = “enam”

//Output:
“Data harus number”
```

## 4. Dari data dibawah ini
```js
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
```

### 1. Ubahlah data  tersebut menggunakan spread operator menjadi:
- name: nama anda
- email: email anda
- hobby: hobi anda

### 2. Ambilah data “street dan city” tersebut menggunakan destructuring
