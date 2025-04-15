const key = 'ef41ac18854098dafca1779643e33622';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`;
const btn  = document.getElementById('abcdefg')
console.log(btn);


function getAPIs() {
    const fethApis = fetch(url);
    return fethApis
}

btn.addEventListener('click',()=>{
    getAPIs()
    .then((data)=>{
        return data.json()
    })
    .then((data)=>{
        console.log(data)
    })
});
console.dir(window);
