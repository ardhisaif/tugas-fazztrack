const printSegitiga = 6

for (let i = printSegitiga; i > 0; i--) {
    for (let j = 1 ; j <= i; j++) {
        process.stdout.write(`${j}`)
    }
    console.log();
}