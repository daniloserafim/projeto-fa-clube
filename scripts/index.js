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

document.addEventListener("click", evt => {
    if (evt.target.classList.contains('menuInvisivel')) {
        openCloseMenu(evt.target)
    }
})

function openCloseMenu (menu) {
    menu.classList.contains('active') ? hideMenu() : showMenu()
}

function hideMenu () {
    Array.from(document.querySelectorAll('.menu'))
        .forEach( element => {
            element
                .classList
                .remove('active')
        })
}

function showMenu() {
    Array.from(document.querySelectorAll('.menu'))
        .forEach( element => {
            element
                .classList
                .add('active')
        })
}