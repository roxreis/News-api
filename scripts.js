let buttonClick = document.getElementById('botaoNoticia');
let board = document.getElementById('board');



buttonClick.addEventListener('click', ()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=88465509a03e4d9a80fc97a06a879cf0")
    .then(response=>response.json())
    .then(json=>{

        console.log(json.articles)
        mostrarNaTela(json.articles);
    })
});


let mostrarNaTela = listaNoticias=>{
    // let mostrarNaTela = listaNoticias=> isso é arrow function, mesma coisa que function (listaNoticias) 

    listaNoticias.forEach(function (noticia, posicao){
    let card =  `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${noticia.urlToImage}"alt="Imagem de capa do card">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.description}</p>
                        <a href="#" class="btn btn-primary">Visitar</a>
                    </div>
                </div>`
                board.innerHTML += card;
            })
   
}

