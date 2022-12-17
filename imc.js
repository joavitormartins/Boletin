const calcular = document.querySelector('#calcular')

calcular.addEventListener('click',calacularB);
calcular.addEventListener('touch',calacularB);

function calacularB(){
const bimestre1 = parseFloat(document.querySelector('#Bimestre1').value) 
const bimestre2 = parseFloat(document.querySelector('#Bimestre2').value) 
const bimestre3 = parseFloat(document.querySelector('#Bimestre3').value) 
const bimestre4 = parseFloat(document.querySelector('#Bimestre4').value) 
const materia = document.querySelector("#materia").value
const resultado = document.querySelector("#resultado")
const nome = document.querySelector("#nome").value

console.log(bimestre1)
console.log(bimestre2)
console.log(bimestre3)
console.log(bimestre4)

if(nome != "" && materia != "" && bimestre1 != "" && bimestre2 != ""&& bimestre3 != ""&& bimestre4 != ""){
    const media = (bimestre1+bimestre2+bimestre3+bimestre4)/4;

     if(media>=6){

        resultado.innerHTML = `nome:${nome} materia:${materia} media:${media} você foi:APROVADO `

     }else{
        resultado.innerHTML = `nome:${nome} materia:${materia} media:${media} você foi:REPROVADO `

     }

}else{
    resultado.innerHTML = "por favor,Preencha todos os campos"
}

}
