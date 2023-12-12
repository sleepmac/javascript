function crypto(pass){
    const arrPass = pass.split("")
    const reversePass = arrPass.reverse()

    const firstElement = reversePass[0];
    reversePass[0] = reversePass[1];
    reversePass[1] = firstElement;

    const password = reversePass.join("")
    return password
}

function check( cryptoPass, pass){
    const arrCryptoPass = cryptoPass.split("")
    const reverseCryptoPass = arrCryptoPass.reverse()

    const firstElement = reverseCryptoPass[0]
    reverseCryptoPass[0] = reverseCryptoPass[1]
    reverseCryptoPass[1] = firstElement

    const password = reverseCryptoPass.join("")    
    return password === pass ? true : false;
}