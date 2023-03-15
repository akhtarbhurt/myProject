const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd30b814906msh3af80411a31f55bp1163a1jsn7d5732e6a0b2',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

let getRecipe = ()=>{
    let input = document.getElementById('input').value
    fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q='+ input, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        let ol = document.createElement('ol')
        for(let key in response){
            for(let i=1; i<response[key].length; i++){
                ol.innerHTML += `<li>${response[key][i]}</li>`
            }
        }
        document.querySelector('.para').appendChild(ol)
    })
	.catch(err => console.error(err));
}
let toggling = ()=>{
    let span = document.querySelector('.select')
    setInterval(() => {
        span.classList.toggle("span")
    },500);
}
toggling();
let btn = document.getElementById('btn')    
btn.addEventListener('click', ()=>{
    getRecipe()
})