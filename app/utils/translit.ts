export function translit(value : string) : string {
    const convertTable : {[key : string]: string} = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya', ' ': '-'
    }

    let convertedValue = '';

    if (value) {

        for (let symbolIdx = 0; symbolIdx < value.length; symbolIdx++) {
                    
            let symbol = value[symbolIdx];

            if (symbol) {
                if (convertTable[symbol] === '') {
                    continue;
                }

                if (convertTable[symbol]) {
                    convertedValue += convertTable[symbol];
                } else {
                    convertedValue += symbol;
                }
            }
        }

    }

    return convertedValue;
}