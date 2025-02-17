let botaoCEP = document.getElementById("btnProcurarCep");
botaoCEP.addEventListener("click", function() {
    let cep = document.getElementById("cep").value;
    CarregarDadosCEP(cep);
});

function CarregarDadosCEP(cep) {
    const url = `https://cep.awesomeapi.com.br/json/${cep}`;
    fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then(dados => {
            MostrarDadosCEP(dados.city, dados.state);
            let cidade = dados.city;
            CarregarDados(cidade);
        })
}

function MostrarDadosCEP(cidade, estado) {
    document.getElementById("nomeCidade").innerText = `${cidade} - ${estado}`;
}

function CarregarDados(cidade) {
    const url = "https://goweather.herokuapp.com/weather/" + cidade;
    fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then(dados => {
            MostrarDadosClima(dados.temperature, dados.description);
        })
}

function MostrarDadosClima(temperatura, descricao) {
    document.getElementById("temperatura").innerText = temperatura;
    document.getElementById("descricao").innerText = descricao;
    
    const clima = document.getElementById("imgClima");
    if (descricao == "Partly cloudy") {
        clima.src = "img/parcialmente nublado.svg";
    } else if (descricao == "Sunny") {
        clima.src = "img/sol.svg";
    } else if (descricao == "Light rain") {
        clima.src = "img/garoa.svg";
    } else {
        clima.src = "img/error.svg";
    }

    document.getElementById("trocarCidade").classList.remove("d-none");
    document.getElementById("label").classList.add("d-none");
    document.getElementById("input").classList.add("d-none");
}

const trocarCidade = document.getElementById("trocarCidade");
trocarCidade.addEventListener('click', function() {
    document.getElementById("trocarCidade").classList.add("d-none");
    document.getElementById("label").classList.remove("d-none");
    document.getElementById("input").classList.remove("d-none");
});


function MostrarHora() {
    document.getElementById("hora").innerHTML = new Date().toLocaleTimeString();
}
setInterval(MostrarHora, 1000);

function MostrarData() {
    const hoje = new Date();
    document.getElementById("data").innerHTML = hoje.getDate() + '/' + (hoje.getMonth() + 1) + '/' + hoje.getFullYear();
}
setInterval(MostrarData, 1000);
