const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = (peso / (altura * altura)).toFixed(2);

    const dad = document.querySelector('#infos');
    
    if(imc < 18.5){
        dad.textContent = 'Seu IMC é '+imc+', Você está abaixo do peso!';
    } else if(imc >= 18.5 && imc <= 25){
        dad.textContent = 'Seu IMC é '+imc+', Você está no peso ideal!';
    }else if(imc >= 25 && imc <= 30){
        dad.textContent = 'Seu IMC é '+imc+', Você está com sobrepeso!';
    }else if(imc >= 30 && imc <= 35){
        dad.textContent = 'Seu IMC é '+imc+', Você está com obesidade moderada!';
    }else if(imc >= 35 && imc <= 40){
        dad.textContent = 'Seu IMC é '+imc+', Você está com obesidade severa!';
    } else{
        dad.textContent = 'Seu IMC é '+imc+', Você está com obesidade mórbida!';
    }
});