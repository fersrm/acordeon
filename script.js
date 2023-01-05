const flecha = document.getElementsByClassName('flechajs');

for (let i = 0; i< flecha.length; i++){
    flecha[i].addEventListener('click',function(){
        this.classList.toggle('activo')
    })
}