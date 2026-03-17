//Crie um programa com uma condicional composta para avaliar o desempenho escolar entre "Excelente", "Ótimo", "Bom", "Regular" ou "Ruim". Dependendo da nota.

let nota = 50;
if (nota >= 90) {
    console.log(`Excelente`);
} else if(nota >= 80) {
    console.log (`Ótimo`);
} else if (nota >= 70) {
    console.log(`Bom`);
} else if(nota >= 60) {
    console.log(`Regular`);
} else if(nota <= 59) {
    console.log(`Ruim`);
}