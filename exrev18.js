//Crie um programa para classificar a faixa etária entre "Criança", "Adolescente" ou "Adulto".

let idade = 18
if(idade <= 13) {
    console.log(`Criança`)
} else if(idade >= 14 && idade <= 17) {
    console.log(`Adolescente`);
} else if(idade >= 18) {
    console.log(`Adulto`)
}