const query = {
    search:'вася',
    take: 10
}


function createQuery(query){
    return Object.keys(query).map(key => `${key}=${query[key]}`).join("&")
}
