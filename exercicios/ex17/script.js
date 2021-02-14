    let num = document.getElementById('add')
    let sel = document.getElementById('sel')
    let res = document.querySelector('div#res')

    let valores = []

    function isNumber(n) {
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inList(n, l) {
        if(l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {

        if(num.value.length == 0) {
            window.alert('Por favor, digite um número.')

        }else if(isNumber(num.value) && !inList(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            sel.appendChild(item)
            res.innerHTML = ''

        }else {
            window.alert('Número inválido ou já contém na lista')
        }

        num.value = ''
        num.focus()
        
    }

    function finalizar() {

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0        

        if(valores.length == 1) {
            res.innerHTML = `Foi adicionado ${valores.length} valor.`
        } else if(valores.length == 0) {
            window.alert('Adicione valores antes de finalizar')
        } else {
            res.innerHTML = `Foram adicionados ${valores.length} valores.`
            for(let pos in valores) {
                if(valores[pos] > maior) {
                    maior = valores[pos]
                }
                if(valores[pos] < menor) {
                    menor = valores[pos]
                }

                soma += valores[pos]
                media = soma / valores.length
                
            }

            res.innerHTML += `<p>O maior número encontrado foi ${maior}</p>`
            res.innerHTML += `<p>O menor número encontrado foi ${menor}</p>`
            res.innerHTML += `<p>A soma dos números é igual a ${soma}</p>`
            res.innerHTML += `<p>A média dos números é ${media}</p>`
            
        }
        
    }

