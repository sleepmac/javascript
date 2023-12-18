const date = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]

function dateArr(arrDate){
        const sss = arrDate.filter(dateSt => {
            return new Date(dateSt).getDate();
        }).map(dateSt =>{
            return dateSt.split("/").join("-")
        })
}