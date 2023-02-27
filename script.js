const pepsiBlue = document.querySelector("#pepsi-blue")

document.getElementById("btn-body").addEventListener("click", function(){
    pepsiBlue.src = "./imagens/pepsi-blue.png"
    document.querySelector("body").setAttribute("class", "body")
})

document.getElementById("btn-red").addEventListener("click", function(){
    pepsiBlue.src = "./imagens/pepsi-white.png"
    document.querySelector("body").setAttribute("class", "red")
})

document.getElementById("btn-black").addEventListener("click", function(){
    pepsiBlue.src = "./imagens/pepsi-black.png"
    document.querySelector("body").setAttribute("class", "black")
})