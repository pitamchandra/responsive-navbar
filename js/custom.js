document.addEventListener('DOMContentLoaded', function(){
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobile_menu = document.querySelector('.mobile_menu');

    openMenu.addEventListener('click', function(){
        mobile_menu.style.left = '0px';
        mobile_menu.style.opacity = '1';
    })
    closeMenu.addEventListener('click', function(){
        mobile_menu.style.left = '-100%';
        mobile_menu.style.opacity = '0';
    })
});