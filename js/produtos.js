let primeiro = 1;

function imagem(elemento) {
    if(document.querySelector('.primeiro').src == elemento.src) {
        primeiro=1;
    }else {
        primeiro=0;
    }

    if (document.querySelector('#geral').src !== elemento.src) {
        document.querySelector('#geral').style.opacity = '0';

        const timer = setInterval(() => {
            document.querySelector('#geral').style.opacity = '1';
            document.querySelector('#geral').src = elemento.getAttribute('src');
            clearInterval(timer);
        }, 100);

        const imgs = document.querySelectorAll('.img');

        for (var i = 0; i < document.querySelectorAll('.img').length; i++) {
            const imgs = document.querySelectorAll('.img')[i];
            imgs.style.borderColor = '#f5f5f5';
        }
        elemento.style.borderColor = '#393C41';
    }

}

function moeda(moeda, valor) {

    if (moeda == "usd") {
        document.querySelector('#valor').innerHTML = valor
        document.querySelector('#moeda').innerHTML = ' USD'
    }

    if (moeda == "eur") {
        document.querySelector('#valor').innerHTML = valor
        document.querySelector('#moeda').innerHTML = ' EUR'
    }

    if (moeda == "brl") {
        document.querySelector('#valor').innerHTML = valor
        document.querySelector('#moeda').innerHTML = ' BRL'
    }

}

function cor(cor, carro, extensao) {
    document.querySelector('.primeiro').src = 'img/' + carro + '/cores/' + cor + '.' + extensao;
    if (primeiro == 1) {
        document.querySelector('#geral').src = 'img/' + carro + '/cores/' + cor + '.' + extensao;
    }

}