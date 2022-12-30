function mostrarHora(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    mensagem.innerHTML = `Agora são ${hora}h:${minutos}min`

    if(hora < 6){
        imagem.src = 'images/madrugada.jpg'
        document.body.style.background = 'rgb(10, 10, 40)'
    }
    else if(hora < 12){
        imagem.src = 'images/manha.jpg'
        document.body.style.background = 'rgb(75, 180, 230)'
    }
    else if(hora < 18){
        imagem.src = 'images/tarde.jpg'
        document.body.style.background = 'rgb(220, 170, 20)'
    }
    else if(hora < 24){
        imagem.src = 'images/noite.jpg'
        document.body.style.background = 'rgb(40, 25, 100)'
    }
}