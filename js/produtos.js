function imagem(elemento) {
    if (document.querySelector('#geral').src !== elemento.src) {
        document.querySelector('#geral').style.opacity = '0';

        const timer = setInterval(() => {
            document.querySelector('#geral').style.opacity = '1';
            document.querySelector('#geral').src = elemento.getAttribute('src');
            clearInterval(timer);
        }, 100);

        const imgs = document.querySelectorAll('.img');

        for(var i = 0; i < document.querySelectorAll('.img').length; i++) {
            const imgs = document.querySelectorAll('.img')[i];
            imgs.style.borderColor = '#f5f5f5';
        }
        elemento.style.borderColor = '#393C41';
    }
    
}

function moeda(moeda) {
    
    if(moeda == "usd") {
        document.querySelector('#valor').innerHTML = '53.900'
        document.querySelector('#moeda').innerHTML = ' USD'
    }

    if(moeda == "eur") {
        document.querySelector('#valor').innerHTML = '47.700'
        document.querySelector('#moeda').innerHTML = ' EUR'
    }

    if(moeda == "brl") {
        document.querySelector('#valor').innerHTML = '302.500'
        document.querySelector('#moeda').innerHTML = ' BRL'
    }

}