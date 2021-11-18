export function requestData () {
    let valueM = document.querySelector(".inpData-m").value;
    let valueY = document.querySelector(".inpData-y").value;
    let invalidInput = "Не верная дата - введите месяц | год в формате от 1 до 12";
if(valueY == 0 || valueM == 0){
    document.querySelector(".outData").textContent =  invalidInput;
} else {
    if (valueM <= 12 && valueY <= 12){

        fetch(`http://numbersapi.com/${valueM}/${valueY}/date`)
        .then(response => response.text()
        .then(text => document.querySelector(".outData").textContent = text
        ));

    }else{

        document.querySelector(".outData").textContent = invalidInput ;
    }            
}

};
export function requestNumber () {
    let number = document.querySelector(".inpNumber").value;

        fetch(`http://numbersapi.com/${number}/math`)
        .then(response => response.text()
        .then(text => document.querySelector(".outNumber").textContent = text
        ));             
};

export function requestYear () {
    let valueYear = document.querySelector(".inpYear").value;

        fetch(`http://numbersapi.com/${valueYear}/year`)
        .then(response => response.text()
        .then(text => document.querySelector(".outYear").textContent = text
        ));             
};