export const render = (open: string = '{', close: string = '}', replace: any[] = [], string: string = '') => {

    replace.map((k, i) => {
        let rgx = new RegExp(`${open.toString()}${Object.keys(k)[0].toString()}${close.toString()}`, 'gi') //Object.keys(k)[0]
        string = string.replace(rgx, Object.values(k)[0].toString())
        console.log(Object.values(k)[0].toString())
        console.log(Object.keys(k)[0].toString())
    })

    return string;

}

