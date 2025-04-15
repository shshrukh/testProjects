const key = 'ef41ac18854098dafca1779643e33622';
const city = 'Gilgit';


const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;


const input = document.querySelector('.search-box');
const cityName = document.querySelector('.location');
const degree = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
console.log(humidity); 

console.log(degree.innerText);

console.log(cityName.innerText);

// console.dir(input);




const getApi = ()=>{
   return fetch(url);
}
console.log(getApi());

input[1].addEventListener('click', (e)=>{
    e.preventDefault();
    getApi().then((data)=>{
        return data.json()
        
    }).then((data)=>{
        cityName.innerText = data.name;
        degree.innerText = `${Math.floor(300 - Number(data.main.temp))} °C`;
        humidity.innerText = `${data.main.humidity}%`;
        console.log(data);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
    
    
})
