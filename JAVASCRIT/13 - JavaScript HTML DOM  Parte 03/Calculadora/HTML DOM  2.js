//Pegar o Span
let tabuada = document.querySelector('.my-span');
let pegarCaminho = document.querySelector('#numero')

const CalcularTabuada =() => {
    let guardaValor = pegarCaminho.value;

     tabuada.innerHTML=`
     ${guardaValor} x 0 =  ${guardaValor * 0}
     <br>
     ${guardaValor} x 1 =  ${guardaValor * 1}
     <br>
     ${guardaValor} x 2 =  ${guardaValor * 2}
     <br>
     ${guardaValor} x 3 =  ${guardaValor * 3}
     <br>
     ${guardaValor} x 4 =  ${guardaValor * 4}
     <br>
     ${guardaValor} x 5 =  ${guardaValor * 5}
     <br>
     ${guardaValor} x 6 =  ${guardaValor * 6}
     <br>
     ${guardaValor} x 7 =  ${guardaValor * 7}
     <br>
     ${guardaValor} x 8 =  ${guardaValor * 8}
     <br>
     ${guardaValor} x 9 =  ${guardaValor * 9}
     <br>
     ${guardaValor} x 10 =  ${guardaValor * 10}
     <br>
     `
     
      

    

    console.log(guardaValor)
}