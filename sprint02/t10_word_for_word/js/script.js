function clean(words) {
    let strObj = words.trim().split(' ');
    let y;
    while ((y = strObj.indexOf('')) !== -1)
        strObj.splice(y, 1);
    const uni = new Set(strObj);
    return [...uni];
}

function addWords(obj, wrds) {
    let arr = clean(obj.words);
    let strArr = clean(wrds);

    for (let i in strArr) {
        let y = arr.indexOf(strArr[i]);
        if (y === -1)
            arr.push(strArr[i].trim());
    }
    obj.words = arr.join(' ');
}

function removeWords(obj, wrds) {
    let strObj = String(Object.values(obj))
    strObj = strObj.split(' ')
    let strWrds = String(wrds)
    strWrds = strWrds.replace(/\s+/g,' ').trim()
    strWrds = strWrds.split(' ')

    for (i = 0; i < strWrds.length; i++) {
        let elem = strWrds[i]
        let index = strObj.indexOf(elem)
        if (index > -1) {
            strObj.splice(index, i + 1)
        }
    }
    obj['words'] = strObj.join(' ')
    return strObj
}
