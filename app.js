let btn = document.querySelector('.switch');
let menu = document.querySelector('.menu');
let cross = document.querySelector('.close')

btn.addEventListener('click' , function(){
    menu.classList.add('active');
})
cross.addEventListener('click' , function(){
    menu.classList.remove('active');
})

menu.addEventListener('click' , function(e){
    if (e.target.classList.contains('active')) {
        menu.classList.remove('active');
    }
})

let brows = document.querySelector('.search');
let switch_on = document.querySelector('.search-icon');
let switch_off = document.querySelector('.switch_off')

    switch_on.addEventListener('click', function(){
        brows.classList.add('turnon');
    })
    switch_off.addEventListener('click', function(){
        brows.classList.remove('turnon');
    })

    brows.addEventListener('click' , function(f){
        if (f.target.classList.contains('turnon')) {
            brows.classList.remove('turnon');
        }
    });

let log_in = document.querySelector('.log_in');
let log__close = document.querySelector('.log__close');
let log__open = document.querySelector('.log-icon');

    log__open.addEventListener('click', function(){
        log_in.classList.add('turniton');
    })
    log__close.addEventListener('click', function(){
        log_in.classList.remove('turniton');
    })

    log_in.addEventListener('click' , function(g){
        if (g.target.classList.contains('turniton')) {
            log_in.classList.remove('turniton');
        }
    });

let input = document.querySelector('.pass_form');
let show = document.querySelector('.show_pass');
let hide = document.querySelector('.hide_pass');

    show.addEventListener('click' ,function(){
        show.classList.add('margup');
        input.type = 'text';
        
    })
    hide.addEventListener('click' ,function(){
        show.classList.remove('margup');
        input.type = 'password';
    });

let dark = document.querySelector('.dark_mode');
let light = document.querySelector('.light_mode');
let nav = document.querySelector('#nav-bar');
let body = document.querySelector('body');
let sidebar = document.querySelector('.sidebar');
let a = document.querySelector('a');


    dark.addEventListener('click' , function(){
        dark.classList.add('dark_theme');
        
    })
    light.addEventListener('click' , function(){
        dark.classList.remove('dark_theme');
    })


