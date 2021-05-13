const BotaoConclui = ()=>{
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Conclui'

    botaoConclui.addEventListener('click', concluiTarefa)

    return botaoConclui
}

const concluiTarefa = (evento)=> {
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui