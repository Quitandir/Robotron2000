const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

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
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        const quantidadePeca = evento.target.parentNode.childNodes[3].value;
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle, quantidadePeca);
        
    })
})


function manipulaDados(operacao, controle) {
    let contador = controle.querySelector("[data-contador]")

    if(operacao === "-" && contador.value > 0) {
        contador.value = parseInt(contador.value) - 1
        
        
    } 
    if(operacao === "+") {
        contador.value = parseInt(contador.value) + 1
        
    }
}

function atualizaEstatisticas(peca, operacao, quantidadePeca) {
    
    

    if(operacao === "+") {
        estatistica.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
      }
      
    if (operacao === '-' && quantidadePeca > 0){
        estatistica.forEach( (elemento) => {
          elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        })
      }
}



//Botões das cores

const botaoCor = document.querySelectorAll("[data-cor]")
const pic = document.getElementById('pic')
const srcCores = [
    "img/black.png",
    "img/blue.png",
    "img/pink.png",
    "img/red.png",
    "img/white.png",
    "img/yellow.png"
]

botaoCor.forEach( (element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        mudaCor(event.target.dataset.cor);
    })
})

function mudaCor (cor) {
    pic.src = `img/${cor}.png`
}


/* 
Usar data attributes para capturar elementos do DOM e manipulá-los do JS sem que mudanças em tags, ids, ou classes quebrem os códigos no JS.
*/

