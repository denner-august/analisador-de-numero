let fnum = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
        if (l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
}

function adicionar(){
    if(isnum(fnum.value) && !inlista(fnum.value, valores)) {
        valores.push(Number(fnum.value))
        let item = document.createElement('option')
        item.text = `valor ${fnum.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('numero invalido ou já possui na lista')
    }
    fnum.value =''
    fnum.focus()
}

function finalizar() {
    let total = valores.length
    let pos = valores

    if(valores.length == 0){
        window.alert('adicione valores primeiro')
    }else if (valores.length == 1){
        res.innerHTML +=`<p>${total} valor cadastrado</P>`
    }
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
        for(let pos in valores){
            soma += valores[pos]
            if(valores [pos] > maior)
            maior  = valores [pos]
        }if (valores [pos] < pos){
            menor = valores [pos]
        }
        res.innerHTML =''
        res.innerHTML +=`<p> ${total} valores cadastrados</p>`
        res.innerHTML +=`<p>${maior} é o maior numero</p>`
        res.innerHTML +=`<p>${menor} é o menor numero</p>`
        res.innerHTML +=`<p>${soma} soma total</p>`
}

