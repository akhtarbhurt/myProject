const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd30b814906msh3af80411a31f55bp1163a1jsn7d5732e6a0b2',
		'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
	}
};
let getWord = ()=>{
    let input = document.getElementById('input').value
    fetch('https://urban-dictionary7.p.rapidapi.com/v0/define?term=' + input, options)
	.then(response => response.json())
	.then(response => {
        console.log(response.list[0].definition)
        document.getElementById('para').innerHTML = response.list[0].definition
    })
	.catch(err => console.error(err));
}

document.getElementById('btn').addEventListener('click', ()=>{
    getWord()
    alert('its working')
})