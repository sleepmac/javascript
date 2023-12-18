let arr= [3, 5, 6, 10]

function arrayFilter(arr, remove){
    const resultArr = []

    for(let i=0; i< arr.length; i++){
        if (remove(arr[i])){
            resultArr.push(arr[i])
        }
    }

    return resultArr
}

function removeNumber(num){
    return num > 5
}

let arrFilter = arrayFilter(arr, removeNumber)