const display = document.querySelector("#display")
const botoes = document.querySelectorAll("button")

botoes.forEach(function(botao){
    botao.addEventListener("click", function(event){
        const valor = event.target.value
        if (valor === "C"){
            display.value = ""
        }
        else if (valor === "="){
            display.value = eval(display.value)
        }
        else{
            display.value += valor 
        }
})})