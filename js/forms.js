let botao = document.getElementById('adicionar-paciente')

botao.onclick = function (params) {
    params.preventDefault();

    let form = document.querySelector('#form-adiciona')

    pacienteCriado = obtemPacienteDoFormulario(form)

    let erros = validaPaciente(pacienteCriado)

    if (erros.length > 0) {
        let listaErro = document.getElementById('mensagens-erro')
        erros.forEach(err => {
            construir(listaErro)
        })
        return
    } else {
        adicionaPacienteNaTabela(pacienteCriado)
    }
    form.reset()
    let listaErro = document.getElementById('mensagens-erro')
    listaErro.innerHTML = ''
}

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    paciente.imc = calculaImc(paciente.peso, paciente.altura)
    return paciente
}

function montaTd(dado, classe) {
    let td = document.createElement('td')
    td.classList.add(classe)
    td.textContent = dado
    return td
}

function montaTr(pacienteCriado) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(pacienteCriado.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(pacienteCriado.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(pacienteCriado.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(pacienteCriado.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(pacienteCriado.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function construir(listaErro) {
    let li = document.createElement('li')
    li.textContent = err
    listaErro.appendChild(li)
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}