let btn = document.getElementById("Shortner");

btn.addEventListener('click',short);





 async function short(){

	let lurl = document.getElementById("lurl").value;
	let shortURL = document.getElementById("shorturl");

	const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${lurl}`);
	const data = await result.json();

	shortURL.value = data.result.short_link2;
}






