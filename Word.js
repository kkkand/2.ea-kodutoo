// Sõna objekt, millele paneme külge ka funktsioonid
var count=30;
var counter=setInterval(timer, 1000);

function Word(word, canvas, ctx){

    this.word = word;
    
    // lisaks mis on sõnast järel, mida alguses hakkame hakkima ja pärast joonistame
    // esialgne sõna säilib, nt saab kasutada pärast skoori arvutamisel 
	this.left = this.word;

    this.canvas = canvas;
    this.ctx = ctx;
	
}


function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
	
	
     return;
	 
	 
	 
	 
  }

	document.getElementById("timer").innerHTML=count + " sekundit on jäänud";
  //Do code for showing the number of seconds here
  
}


Word.prototype = {
	Draw: function(){

		//Tühjendame canvase
		this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height);

		// Canvasele joonistamine
		this.ctx.textAlign = 'center';
		this.ctx.font = '70px Courier';
		
		// 	// Joonistame sõna, mis on järel / tekst, x, y
		this.ctx.fillText(this.left, this.canvas.width/2, this.canvas.height/2);
	},

	// Võtame sõnast esimese tähe maha
	removeFirstLetter: function(){

		// Võtame esimese tähe sõnast maha
		this.left = this.left.slice(1);
		//console.log(this.left);
	}
};