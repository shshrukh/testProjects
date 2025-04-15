const key = 'ef41ac18854098dafca1779643e33622';
const city = 'Gilgit';


const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;


const input = document.querySelector('.search-box');
const cityName = document.querySelector('.location');
const degree = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
// console.log(humidity); 

// console.log(degree.innerText);

// console.log(cityName.innerText);

// console.dir(input);




 getApi =async ()=>{
   const req=  await fetch(url);
   const res= await req.json()
   return res
}
console.log(getApi());

input[1].addEventListener('click', async (e)=>{
    e.preventDefault();
    const data= await getApi()
   console.log(data);
   
})
