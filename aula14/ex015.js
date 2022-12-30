let array = [4, 12, 6, 1, 4, 7]
let num = 9
let posicao = array.indexOf(num)

array.push(10)
array.sort()

if(posicao == -1){
    console.log(`O valor ${num} não foi encontrado no array`)
}
else{
    console.log(`O valor ${num} está na posicao ${posicao}`)
}

console.log(`O array tem tamanho ${array.length}`)
console.log(array)

for(var cont in array){
    console.log(`${cont + 1}º valor = ${array[cont]}`)
}