// basis fetch request using axois

// const fetchBitcoinPrice = async() =>{
// 	try{
// 		const res = await axois.get('api link')
// 		console.log(res.data.. ...)
// 	}
// 	catch(e) {
// 		console.log("ERROR!!!!",e)
// 	}
// }

const btn = document.querySelector('button');
const jokes = document.querySelector('.card-text');

// this will add the new joke in the div container
const addNewJoke = async () => {
    const jokeText = await getDadJoke()
	const newDiv = document.createElement('p');
	jokes.innerHTML = '';
	newDiv.innerHTML = jokeText;
	jokes.append(newDiv);
}


// yeh function mujhe random joke return karega in case koi dikkat nahi aati hai api me to 
// async await use kiya hai taki smooothly kaam ho sake
const getDadJoke = async () => {
    try{
		const config = {headers : {Accept: 'application/json'}};
	    const res = await axios.get('https://icanhazdadjoke.com/',config);
	    return res.data.joke;
	}
	catch (e) {
		return "NO JOKES AVAILABLE !";
	}
}


// adding the eventlistner to the button 
btn.addEventListener('click',addNewJoke);