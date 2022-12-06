const bottone = document.getElementById('bottone-play');


function creaQuadrato(numero){

    const quadrato = document.createElement('div');

    quadrato.classList.add('quadrato');

    quadrato.innerText = ++numero;

    return quadrato; 
}

bottone.addEventListener('click', function(){

    let grid = document.getElementById('grid');
    
    grid.innerHTML = "";

    for (let i = 0; i < 100; i++){
           
        const quadratoDinamico = creaQuadrato(i);
        
        grid.appendChild(quadratoDinamico);

        quadratoDinamico.addEventListener('click', function(){
            this.classList.add('clicked');
            console.log(this.textContent);
        })
                


    
    }

      

    



    
    
})
