/* const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry =>{
            entry.target.classList.toggle("show",entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {thereshold:1
    }
)

h1.forEach(h1 => {
    observer.observe(h1)
}) */

/* const $titulo = document.querySelector('#nombre')

$titulo.addEventListener('show', ()=>{
    console.log('se anima el titulo')
  })

const options ={
    root,
    rootMargin:
    thereshold:0
}
function callback (entries,observer) {
    console.log ('se llamó al callback')
    if (entries [0].isIntersecting){
        $titulo.show()
    

}

const observer = new IntersectionObserver(callback,options)
observer.observe ($titulo) */

 /*  if ("loading" in HTMLImageElement.prototype) {
    console.log("El navegador soporta `lazy-loading`...");
  } else {
    console.log("`lazy-loading` no soportado...");
  } */
  window.addEventListener('scroll', function(){
    let animacion=document.getElementById('titulo');
    let posicionTitulo = animacion.getBoundingClientRect().top;
    console.log(posicionTitulo);
    let tamanioPantalla = window.innerHeight/2;

    if(posicionTitulo < tamanioPantalla){
        animacion.style.animation = 'mover 2s linear alternate'
    }
  })

  window.addEventListener('scroll', function(){
    let animacion=document.getElementById('titulo1');
    let posicionTitulo = animacion.getBoundingClientRect().top;
    console.log(posicionTitulo);
    let tamanioPantalla = window.innerHeight/2;

    if(posicionTitulo < tamanioPantalla){
        animacion.style.animation = 'mover 2s linear'
    }
  })

  window.addEventListener('scroll', function(){
    let animacion=document.getElementById('titulo2');
    let posicionTitulo = animacion.getBoundingClientRect().top;
    console.log(posicionTitulo);
    let tamanioPantalla = window.innerHeight/2;

    if(posicionTitulo < tamanioPantalla){
        animacion.style.animation = 'mover 2s linear'
    }
  })

  window.addEventListener('scroll', function(){
    let animacion=document.getElementById('titulo3');
    let posicionTitulo = animacion.getBoundingClientRect().top;
    console.log(posicionTitulo);
    let tamanioPantalla = window.innerHeight/2;

    if(posicionTitulo < tamanioPantalla){
        animacion.style.animation = 'mover 2s linear'
    }
  })

  window.addEventListener('scroll', function(){
    let animacion=document.getElementById('titulo4');
    let posicionTitulo = animacion.getBoundingClientRect().top;
    console.log(posicionTitulo);
    let tamanioPantalla = window.innerHeight/2;

    if(posicionTitulo < tamanioPantalla){
        animacion.style.animation = 'mover 2s linear'
    }
  })

  window.addEventListener('scroll', function(){
    let animacion=document.getElementById('titulo5');
    let posicionTitulo = animacion.getBoundingClientRect().top;
    console.log(posicionTitulo);
    let tamanioPantalla = window.innerHeight/2;

    if(posicionTitulo < tamanioPantalla){
        animacion.style.animation = 'mover 2s linear'
    }
  })

  window.addEventListener('scroll', function(){
    let animacion=document.getElementById('sobre-mi');
    let posicionTitulo = animacion.getBoundingClientRect().top;
    console.log(posicionTitulo);
    let tamanioPantalla = window.innerHeight/2;

    if(posicionTitulo < tamanioPantalla){
        animacion.style.animation = 'colorear 35s linear'
    }
  })

