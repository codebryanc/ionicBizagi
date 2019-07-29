
// console.log();

for_principal:
for (let i = 1; i <= 5; i++) {
    console.log("i", i);

    for_secundario:
    for (let j = 1; j <= 5; j++) {
        console.log("j", j);

        //continue for_principal;

        for (let x = 1; x <= 5 ; x++) {
            console.log("x", x);
            break for_principal; // Solo lo hace una vez todo porque estoy en un break del for principal
        }
    }
}

