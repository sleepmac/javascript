function algLuna(card){
    let checksum = 0;

    const cardNumber = card.split("-").map(Number)
    console.log(cardNumber)

    for(const[index, num] of cardNumber.entries()){
        if (index % 2 === 0){
            let buf = num * 2
            if (buf>9) {
                checksum +=buf - 9
            } else {
                checksum += buf
            }
        } else {
            checksum +=num  
        }
    }
    return checksum % 10 === 0 ? true : false
}
