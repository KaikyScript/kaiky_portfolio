// Mudar a Descrição

const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' Html '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' Css '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' JavaScript '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git '
        } 
        if(nameCard === '.php') {
            cardName.innerHTML = ' PHP '
        } 
        if(nameCard === '.mysql') {
            cardName.innerHTML = ' MySQL '
        }
        if(nameCard === '.bootstrap') {
            cardName.innerHTML = ' BootsTrap '
        }
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* passe o cursor sobre os ícones para saber mais *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Estrutura de layouts, principais tags, HTML Semântico, criação de tabelas e formulários.'
)

changeDescription(
    '.css',
    'Estilização de layouts, reutilização de classes, box model, CSS Grid, FlexBox e pseudo-classes.'
)

changeDescription(
    '.js',
    'Manipulação de DOM, consumo de API, tipos de dados, métodos, funções e eventos.'
)

changeDescription(
    '.git',
    'Versionamento de código e principais comandos.'
)

changeDescription(
    '.php',
    'Sites dinâmicos utilizando banco de dados relacionais e PDO'   
)

changeDescription(
    '.mysql',
    'Boas práticas, como: código identado, relacionamento de tabelas e inserção de dados'   
)

changeDescription(
    '.bootstrap',
    'Responsividade em sites dinâmicos, boas práticas de estilização'   
)

