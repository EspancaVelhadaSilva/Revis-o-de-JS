//Crie um programa com uma condicional composta para avaliar o desempenho escolar entre "Excelente", "Ótimo", "Bom", "Regular" ou "Ruim". Dependendo da nota.

let nota = 20;
if (nota >= 90) {
    console.log(`Excelente`);
} else if(nota <= 89 && nota >= 75) {
    console.log (`Ótimo`);
} else if (nota <= 74 && nota >= 65) {
    console.log(`Bom`);
} else if(nota <= 64 && nota >= 55) {
    console.log(`Regular`);
} else if(nota <= 54) {
    console.log(`Ruim`);
}
