let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
let pacientes = document.querySelectorAll('.paciente')
let tabBody = document.getElementById('tabela-pacientes')

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    let tdAltura = paciente.querySelector('.info-altura')
    let tdPeso = paciente.querySelector('.info-peso')
    let tdImc = paciente.querySelector('.info-imc')

    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent

  
    if (validaPeso(peso,tdPeso) && validaAltura(altura,tdAltura)) {
        tdImc.textContent = calculaImc(peso, altura)
    } else {
        paciente.classList.add('paciente-invalido')
        tdImc.textContent = 'Peso/Altura inválida'
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso,tdPeso) {
    if (peso <= 0 || peso > 1000) {
        return false;
    }
    else{
        return true
    }
}
function validaAltura(alt,tdAltura) {
    
    if (alt <= 0 || alt > 1000) {
        return false
    }
    return true
}