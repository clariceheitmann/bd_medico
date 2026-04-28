let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()
    const nome = document.getElementById('nome').value 
    const peso = (Number(document.getElementById('peso')).value)
    const altura = (Number(document.getElementById('altura')).value)

    const valores = {
        nome: nome,
        peso: peso,
        altura: altura,
    }
    console.log(valores)

    fetch('http://localhost:3000/paciente',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados =>{
        resposta.innerHTML = ''
        resposta.innerHTML += `<p> ${dados.message}</p>`
        document.querySelector('form').reset()
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o paciente!',err)
    })
})