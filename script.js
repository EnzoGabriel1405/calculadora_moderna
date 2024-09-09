function calc(){
    let n1 = parseFloat(document.getElementById('num').value);
    let n2 = parseFloat(document.getElementById('ndois').value);
    let res = 0;
    let op = document.querySelector('input[name = "opera"]:checked').value;

    if (isNaN(n1) || isNaN(n2)){
        alert('Algo está errao. Conserte.');

    }else{
        if (op == '+'){
            res = n1 + n2;
        }else if (op == '-'){
            res = n1 - n2;            
        }else if (op == '*'){
            res = n1 * n2;            
        }else if (op == '/'){
            if (n2 == 0){
                alert('Não da para dividir por 0. Corrija.');
            }else{
                res = n1 / n2;
            }
        }else if (op == '%'){
            res = n1 / 100 * n2;
        }else if (op == '^'){
            res = n1 ** n2;  
        }else{
            alert('Escolha uma operação.');
        }
        
        document.getElementById('result').innerText = res;

    }

}