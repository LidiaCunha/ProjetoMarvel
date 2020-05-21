const criarCard = (arrayInfo) => {
   const card = `<div class="card">
        <figure class="cardImagem">
            <img src="${arrayInfo.thumbnail.path}/standard_large.${arrayInfo.thumbnail.extension}" alt=${arrayInfo.name}>
        </figure>
        <div class="cardTexto">
            <span>${arrayInfo.name}</span>
        </div>
    </div>`;

    return card;
}

const inserirHTML = (dadosApi) => {
    const listaCard = document.getElementById('listaCard');
    listaCard.innerHTML = " ";
    dadosApi.forEach(elemento => {
        listaCard.innerHTML += criarCard(elemento);
    });
}  

const getMarvel = async () => {
    const pesquisa = document.getElementById('pesquisa').value;
    const timestime = "1589910124";
    const apikey = "55107d58b8f180551b90d6a24b3b608d";
    const md5 = "a95e0c0753d49c665be4ae74d74bfb92";
    const url = `http://gateway.marvel.com/v1/public/events?ts=${timestime}&apikey=${apikey}&hash=${md5}&limit=100`;

    const getApi = await fetch(url);
    const json = await getApi.json();

    console.log (json);
    inserirHTML(json.data.results);
}

document.getElementById('botao').addEventListener("click", getMarvel);
