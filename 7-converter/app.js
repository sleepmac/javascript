function converter(amount, currentСurrency, targetСurrency){
    courseUsd = 95.85
    courseEuro = 101.35

    if(currentСurrency === "USD" && targetСurrency === "RUB"){
        return amount * courseUsd
    } else if (currentСurrency === "EURO" && targetСurrency === "RUB"){
        return amount * courseEuro
    } else if (currentСurrency === "RUB" && targetСurrency === "USD"){
        return amount / courseUsd
    } else if (currentСurrency === "RUB" && targetСurrency === "EUR"){
        return amount / courseEuro
    } else {
        return null
    }
}