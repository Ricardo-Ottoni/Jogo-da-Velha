let campos = document.querySelectorAll('td');
let jogada = 1;
let posicao = 0;
let tabuleiro = [0,0,0,
             	 0,0,0,
             	 0,0,0];
let ativo = true;

let texto = document.createElement('h1');
document.body.appendChild(texto);

campos.forEach( casa => {
	casa.setAttribute("posicao", posicao++);
    
	casa.addEventListener("click", event =>{
    	if (ativo){
        	let clicado = event.target;
        	let posicao = clicado.getAttribute('posicao');
        	let atual = 0;
        	if (clicado.innerText == ''){
            	if (jogada % 2 == 1){
                	atual = "O";
            	}else{
                	atual = "X";
            	}
            	clicado.innerText = atual;
            	tabuleiro[posicao] = atual;
            	jogada++;
        	}else{
            	alert("Jogada invalida!");
        	}
    	}   	 

	});
});