function contar(){
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var resposta = document.getElementById('resposta')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        resposta.innerHTML('Não foi possível contar.')
        alert('ERRO: Os dados fornecidos são insuficientes!')
    }
    else{
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        resposta.innerHTML = ''

        if(passo <= 0){
            alert('ERRO: Passo inválido (padrão = 1)')
            passo = 1
        }

        if(inicio < fim){
            for(var cont = inicio; cont < fim; cont += passo){
                resposta.innerHTML += `${cont} \u{1F449}`
            }
        }
        else{
            for(var cont = inicio; cont >= fim; cont -= passo){
                resposta.innerHTML += `${cont} \u{1F449}`
            }
        }
        resposta.innerHTML += 'Fim'
    }
}