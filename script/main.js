

document.querySelector('p').onclick = function() {
	alert('hare Krishna');
}


let data = document.querySelector('h1');
let count = 0;
data.onhover = function(){
	if(count % 2 == 0 ){
		data.textContent = 'this is even number';

	}
	else{
		data.textContent = 'This is odd number';
	}
	count++;
	
}
