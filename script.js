class Calc {

    insert(num){
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num; 
    
    }
    
    clean(){
    var k = document.querySelectorAll('resultado').innerHTML;
       k = '';
    }
    
    cleanOne(){
        var resultado = document.getElementById('resultado').innerHTML;
    
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
    
    calcular(){
        var resultado = document.getElementById('resultado').innerHTML;
    
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
        } else {
            document.getElementById('resultado').innerHTML = 'error'
        }
    
    }
    
    imprime(z){
       var w =  document.getElementById('resultado').innerHTML;
       w.addEventListener("keypress", insert(z))
    }

}

