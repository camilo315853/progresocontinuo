addEventListener('DOMContentLoaded', () => {
    const nav_responsive-button = document.querySelector('.nav_responsive-button')
    if (nav_responsive-button) {
        nav_responsive-button.addEventListener('click', () => {
            const nav_item = document.querySelector('.nav_item')
            nav_item.classList.toggle('show')
        })
    } 
})