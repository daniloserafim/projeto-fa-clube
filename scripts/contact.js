const descriptions = {
    mob : `<h1 class="title main-description-title">Conheça a A$AP Mob</h1>
    <h2 class="description main-description">A A$AP Mob, é um coletivo com base no Harlem e que é formado por rappers, produtores, diretores de vídeos musicais, designers de moda, e motociclistas que tem interesses parecidos em música, moda, estilo e arte. ASAP é a sigla de Always Strive and Prosper, que traduzindo significa Sempre Lute e Prospere.</h2>`,
    rocky : `<h1 class="title main-description-title">Conheça o A$AP Rocky</h1>
    <h2 class="description main-description">O integrante mais famoso da Mob é A$AP Rocky. Apesar de não ser um dos fundadores do grupo, ele encontrou o maior sucesso comercial desde o lançamento de sua mixtape de estreia Live. Love. ASAP, em 2011 que foi muito bem elogiado por fãs e especialistas.</h2>`,
    ferg : `<h1 class="title main-description-title">Conheça o A$AP Ferg</h1>
    <h2 class="description main-description">Ele é amigo de infância de A$AP Rocky. Muitos dizem que a sua função na Mob é ser um irmão, um inovador e um motivador. Ele ficou famoso pela primeira vez depois de aparecer em "Kissin' Pink", do A$AP Rocky, e, desde então, assinou um contrato de gravação solo com Polo Grounds e RCA, lançando seu álbum de estreia "Trap Lord", em 2013.</h2>`,
    yams : `<h1 class="title main-description-title">Conheça o A$AP Yams</h1>
    <h2 class="description main-description">Ele foi um dos membros fundadores da Mob. Ele empresariou A$AP Rocky e formou o selo A$AP Worldwide ao lado dele. Yams também tem uma influência musical nos rappers do grupo, ajudando a escolher as batidas. Ele morreu em 2015 aos 26 anos.</h2>`,
    tyBeats : `<h1 class="title main-description-title">Conheça o A$AP Ty Beats</h1>
    <h2 class="description main-description">Ele conheceu a Mob depois de entrar em contato com no Facebook. Como o mais jovem, ele sempre fala que se inspira nos outros membros, mas no final das contas ele é o produtor residente do grupo, tendo produzido o single de estreia de A$AP Rocky, "Peso".</h2>`
}

document.addEventListener("click", evt => {
    if (evt.target.classList.contains('menuzada')) {
        showMenuDescription(evt.target.id)
    }
})

function showMenuDescription (menu) {
    document.querySelector('#description')
        .innerHTML = descriptions[menu]
}

document.addEventListener("mouseover", evt => {
    if (evt.target.classList.contains('menuInvisivel')) {
        menuHoverOn()
    } else {
        menuHoverOff()
    }
})

function menuHoverOn () {
    document.querySelector('.home-menu-circle')
        .classList
        .add('hovered')
    Array.from(document.querySelectorAll('.home-title-span'))
        .forEach( element => {
            element
                .classList
                .add('hovered')
        })
}

function menuHoverOff () {
    document.querySelector('.home-menu-circle')
        .classList
        .remove('hovered')
    Array.from(document.querySelectorAll('.home-title-span'))
        .forEach( element => {
            element
                .classList
                .remove('hovered')
        })
}