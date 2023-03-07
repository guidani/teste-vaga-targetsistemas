// Sequencia de fibonacci
function ehQuadradoPerfeito(n)
{
    let ress = parseInt(Math.sqrt(n));
    
    return (res * res == n);
}
 
function fibonacci()
{
 		let n = window.prompt("Numero")
    
    if(isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)){
    	console.log('O numero pertence a sequência de fibonacci');
    } else {
    	console.log('O numero Não pertence a sequência de fibonacci');
    }
    
}

fibonacci()