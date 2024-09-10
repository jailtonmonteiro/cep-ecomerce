// Passo 2
var XMLHttpRequest = require('xhr2');

var xmlhttpreq = new XMLHttpRequest();
// Passo 3
xmlhttpreq.open('GET', 'https://brasilapi.com.br/api/cep/v1/{29102-920}', true);

// Passo 4
xmlhttpreq.onload = function() {
    if (xmlhttpreq.status === 200) {
        console.log(xmlhttpreq.responseText);
    } else {
        console.error('Erro na requisição:', xmlhttpreq.statusText);
    }
};

xmlhttpreq.onerror = function() {
    console.error('Erro na requisição:', xmlhttpreq.statusText);
};

// Passo 5
xmlhttpreq.send();