/* Função apagar as luzes */

let temaSwitch = () => {
    let temaAtual = document.getElementById("body").className

    if (temaAtual == "dark") {
        document.getElementById('body').className = document.getElementById('body').className.replace("dark", "light")
        }

    else if (temaAtual == "light") {
        document.getElementById('body').className = document.getElementById('body').className.replace("light", "dark")
    }
}


/* Função para mudar o foco da seção de projetos */

changeFocus = () => {
    let focus = document.getElementById("project-focus").children
    let newFocus = event.currentTarget.childNodes
    console.log(newFocus)
    focus[0].src = newFocus[1].src
    focus[1].textContent = newFocus[3].textContent
    focus[2].textContent = newFocus[5].data
}





/* 
============================================================================
Soluções substituídas mas que podem parecer interessantes futuramente
============================================================================


obter um array de elementos de uma determinada classe e repetir uma determinada ação para cada elemento (não chegou a funcionar direito tho. rever se for usar)

    let x = document.getElementsByClassName('cornao-light')
    let i

    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("light", "dark")
    } 
 */
