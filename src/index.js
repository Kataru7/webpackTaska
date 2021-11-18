import {requestData, requestNumber, requestYear} from "./reqestAPI"
import './styles/style.css'
const root = document.querySelector('#root');

switch (window.location.pathname) {
    case "/data":
        root.innerHTML = `
        <div>
            <h1>Data</h1>
            <p class = "outData"></p>
            <input class = "inpData-m" type="number" value = "1">
            <input class = "inpData-y" tupe="number" value = "1">
            <button class = "btnData">OK</button>
        </div>`;        
        document.querySelector(".btnData").addEventListener('click', requestData);      
        break;
    case "/number":
        root.innerHTML = `
        <div>
            <h1>Number</h1>
            <p class = "outNumber"> Input number</p>
            <input class = "inpNumber" tupe="number" value = "1">
            <button class = "btnNumber">OK</button>
        </div>`;
        document.querySelector(".btnNumber").addEventListener('click', requestNumber);
        break;
    case "/year":
        root.innerHTML = `
        <div>
            <h1>Year</h1>
            <p class = "outYear"> Input year</p>
            <input class = "inpYear" tupe="number" value = "1">
            <button class = "btnYear">OK</button>
        </div>`;
        document.querySelector(".btnYear").addEventListener('click', requestYear);        
        break;        
    default:
        root.innerHTML = `
        <div>
            <a href="/data" class="start-choise">Data</a>
            <a href="/number" class="start-choise">Number</a>
            <a href="/year" class="start-choise">Year</a>
        </div>`;
        break;
};