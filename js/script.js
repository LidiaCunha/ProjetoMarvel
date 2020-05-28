//Função que insere card no html 
"use strict"
const criarCard = (objetoArray) => {
   const card = `<div class="card">
        <input type="checkbox">
        <div class="toggle">+</div>
        <figure class="cardImagem">
            <img src="${objetoArray.thumbnail.path}/standard_fantastic.${objetoArray.thumbnail.extension}" alt=${objetoArray.title} title=${objetoArray.title}>
        </figure>
        <div class="details">
            <h2>DESCRIÇÃO</h2><br>
            ${objetoArray.description}
        </div>
    </div>`;

    return card;
}

//Função que recebe array como parametro
const inserirHTML = (dadosApi) => {
    const listaCard = document.getElementById('listaCard');
    listaCard.innerHTML = " ";
    //Verificando se objeto do array existe
    if (dadosApi.length == 0){
        alert("Erro de busca: A pesquisa não está correta ou o quadrinho não existe.")
    } else{
        //Se elemento existir passe o objeto para função CriarCard
        dadosApi.forEach(elemento => {
            listaCard.innerHTML += criarCard(elemento);
        });
    }
}  

//Função para requisitar a url 
const getMarvel = async () => {
    const pesquisa = document.getElementById('pesquisa').value;
    //Regras de utilização da API Marvel: chave pública, chave privada e timestamp
    const timestamp = "1589910124";
    const apikey = "55107d58b8f180551b90d6a24b3b608d";
    const md5 = "a95e0c0753d49c665be4ae74d74bfb92";
    const url = `https://gateway.marvel.com/v1/public/events?nameStartsWith=${pesquisa}&ts=${timestamp}&apikey=${apikey}&hash=${md5}&limit=100`;

    //Utilizando fetch para url e guardando em uma variavel
    const getApi = await fetch(url);
    //Transformando "getApi" em json e guardando em uma variavel
    const json = await getApi.json();

    //Passando array como argumento para função
    inserirHTML(json.data.results);
}

document.getElementById('botao').addEventListener("click", getMarvel);


