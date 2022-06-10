import * as inteface from "../interfaces"

export const setRegex = (open: string = '{', close: string = '}', replace: any[] = [], string: string = '') => {
    const rgx = new RegExp(`${open}([0-9A-Za-z]+)${close}`, 'gi')

    const matches = string.match(rgx)

    matches?.length && matches.map(e => {
        console.log(e);
        string = string.replace(e, 'XXXX')

    })

    console.log(string)

}

const string = "Merhaba ben {1} mail adresim {posta}";
const replace = [
    { eposta: 'erseversahin@gmail.com' },
    { isim: 'Şahin Ersever' }
]

setRegex('{', '}', replace, string);