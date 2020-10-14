let tbody = document.querySelector('#tabela-pacientes')
tbody.addEventListener('dblclick', function (params) {
    params.target.parentNode.classList.add('fadeOut')
    setTimeout(function () {
        params.target.parentNode.remove()
    }, 500)
})