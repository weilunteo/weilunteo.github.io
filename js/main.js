(function($) {
    "use strict"

    // Navbar on scrolling

    $(window).scroll(function (){
        if($(this).scrollTop()>200){
            $('.navbar').fadeIn('slow').css('display', 'flex');
        }else{
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    })


})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})





