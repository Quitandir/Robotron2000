
const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const botaoCor = document.querySelectorAll("[data-cor]")
const pic = document.getElementById('pic')

controle.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode)
        atualizaEstatisticas(event.target.dataset.peca)
    })
})

botaoCor.forEach( (element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        mudaCor(event.target.dataset.cor);
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao == '-') {
        peca.value = parseInt(peca.value) -1;
    } else {
        peca.value = parseInt(peca.value) +1;   
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function mudaCor (cor) {
    pic.src = `img/${cor}.png`
}


/* 
Usar data attributes para capturar elementos do DOM e manipulá-los do JS sem que mudanças em tags, ids, ou classes quebrem os códigos no JS.
*/

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const srcCores = [
    "img/black.png",
    "img/blue.png",
    "img/pink.png",
    "img/red.png",
    "img/white.png",
    "img/yellow.png"
]