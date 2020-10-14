let inpt = document.getElementById('filtrar-tabela')
let tdnome = document.querySelectorAll('.info-nome')

inpt.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
        tdnome.forEach(td => {
            let expressao = new RegExp(e.target.value,'i')
            
            if (!expressao.test(td.textContent)) {
                td.parentNode.classList.add('invisivel')
            }
        })
    } else {
        tdnome.forEach(td => {
            td.parentNode.classList.remove('invisivel')
        })
    }

})