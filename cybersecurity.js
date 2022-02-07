const canvas = document.getElementById('Matrix');  //grab canvas element "Matrix"
const context = canvas.getContext('2d');  //get access to its rendering context using getContext method

//get size of width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;  //number of columns for the rain

const rainDrops = [];  //an array of drops, one per column

//1 = y-coordinate of the drop
for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

//draw each character
const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';  //black for canvas
	context.fillRect(0, 0, canvas.width, canvas.height);  //translucent to show the trail
	
    //green text and same font size 
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

    //loop over each drops
	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));  //random character to print 
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
        //sending drop back to top randomly after it crossed the screen and make drops scatter on Y axis by adding a randomness to the reset
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 35);