var dataAtual = new Date()
var horaAtual = dataAtual.getHours()

if(horaAtual < 6){
    console.log('Boa madrugada!')
}
else if(horaAtual < 12){
    console.log('Bom dia!')
}
else if(horaAtual < 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}