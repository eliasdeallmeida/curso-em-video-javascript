function calcularTabuada(){
    var txtnum = document.getElementById('txtnum')
    var tabuada = document.getElementById('tabuada')

    if(txtnum.value.length == 0){
        alert('ERRO: Por favor, informe um número para calcular a tabuada!')
    }
    else{
        var num = Number(txtnum.value)
        tabuada.innerHTML = ''

        for(var cont = 0; cont <= 10; cont++){
            var item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num * cont}`
            item.value = `tab${cont}`
            tabuada.appendChild(item)
        }
    }
}