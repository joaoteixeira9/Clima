function CarregarDados(){
    const url = "https://goweather.herokuapp.com/weather/americana"
    fetch(url)
    .then(resposta => {
        return resposta.json();
    })
    .then(dados =>{
        return MostrarDados(dados.temperature, dados.description);
    })
}

function MostrarDados(temperatura, descricao){
    document.getElementById("temperatura").innerText = temperatura
    document.getElementById("descricao").innerText = descricao
}

function MostrarHora() {
    document.getElementById("hora").innerHTML = new Date().toLocaleTimeString();
    
}
setInterval(MostrarHora, 1000);

function MostrarData() {
    const hoje = new Date();
    document.getElementById("data").innerHTML = hoje.getDate() + '/' + (hoje.getMonth() + 1) + '/' + hoje.getFullYear();
}
setInterval(MostrarData, 1000);

window.onload = CarregarDados;