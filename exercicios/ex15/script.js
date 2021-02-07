function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
        
            if(idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menino.png')
                genero = 'Criança'
            } else if(idade < 60) {
                img.setAttribute('src', 'homem.png')
                genero = 'Homem'
            } else {
                img.setAttribute('src', 'idoso.png')
                genero = ' Idoso'
            }
        }
        if(fsex[1].checked) {

            if(idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menina.png')
                genero = 'Criança'
            } else if(idade < 60) {
                img.setAttribute('src', 'mulher.png')
                genero = 'Mulher'
            } else {
                img.setAttribute('src', 'idosa.png')
                genero = 'Idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}