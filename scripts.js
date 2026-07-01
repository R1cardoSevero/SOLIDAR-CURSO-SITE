function moverImagem(){
    let imagem = Array(document.getElementsByClassName('imagem-carrosel'));
    imagem.forEach(element => {
        console.log(element)
    });
}

moverImagem()