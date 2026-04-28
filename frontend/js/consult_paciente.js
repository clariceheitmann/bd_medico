let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click',(e)=>{
    e.preventDefault()
    const id = document.getElementById('id').value

    fetch(`http://localhost:3000/paciente/${id}`)
        .then(res => res.json())
        .then(dados =>{
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Nome: ${dados.nome} </p>`
        resposta.innerHTML += `<p>Peso: ${dados.peso} </p>`
        resposta.innerHTML += `<p>Altura: ${dados.altura} </p>`
        document.querySelector('form').reset()
    })
    
    .catch((err)=>{
        console.error('Erro ao consultar o paciente!',err)
    })
})
