let butao = document.querySelector('#buscar-pacientes')
let tab = document.getElementById('tabela-pacientes')

butao.addEventListener('click', function (params) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    xhr.addEventListener('load', (ev) => {
        if (xhr.status == 200) {
            let pacientes = JSON.parse(xhr.response)
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            })
        }
    })
    xhr.send()
})

function montaTd(dado, classe) {
    let td = document.createElement('td')
    td.classList.add(classe)
    td.textContent = dado
    return td
}
