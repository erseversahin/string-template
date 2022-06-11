const { render } = require('./build/index').default


const string = "Merhaba ben {{isim}} mail adresim {{eposta}}\nbana ulaşmak için {{gsm}} numaramdan ulaşabilirsiniz";

const replace = [
    { isim: 'Şahin Ersever' },
    { eposta: 'erseversahin@gmail.com' },
    { gsm: '555 555 5555' },
]

console.log(render('{{', '}}', replace, string));  