window.addEventListener('load', () => {

    let input = document.querySelector('input')
    let title = document.getElementById('title')
    let short_description = document.getElementById('mensaje')
    let long_description = document.getElementById('mensaje1')
    let image1 = document.getElementById('image1')
    let image2 = document.getElementById('image2')
    let image3 = document.getElementById('image3')
    let duration = document.getElementById('duration')
    let total = document.getElementById('total')
    let button = document.getElementById('guardar')

    let errTitle = document.getElementById('errTitle')
    let errShort = document.getElementById('errShort')
    let errLong = document.getElementById('errLong')
    let errDuration = document.getElementById('errDuration')
    let errTotal = document.getElementById('errTotal')

    button.addEventListener('click', (e) => {
        e.preventDefault();  
    })

    title.addEventListener('blur', () => {
        if(title.value == ''){
            errTitle.innerText = 'Debes Completar este campo'
            errTitle.style.color = 'red'
        }else if(title.value.length < 5){
            errTitle.innerText = 'El nombre del tour debe contener mas de 5 caracteres'
            errTitle.style.color = 'red'
        }else{
            errTitle.innerText = ''
        }
    })

    short_description.addEventListener('blur', () => {
        if(short_description.value == ''){
            errShort.innerText = 'Debes Completar este campo'
            errShort.style.color = 'red'
        }else if((short_description.value.length < 80) || (short_description.value.length > 100)){
            errShort.innerText = 'La descripcion debe tener entre 80 y 100 caracteres'
            errShort.style.color = 'red'
        }else{
            errShort.innerText = ''
        }
    })

    long_description.addEventListener('blur', () => {
        if(long_description.value == ''){
            errLong.innerText = 'Debes Completar este campo'
            errLong.style.color = 'red'
        }else if((long_description.value.length < 150) || (short_description.value.length > 200)){
            errLong.innerText = 'La descripcion debe tener entre 150 y 200 caracteres'
            errLong.style.color = 'red'
        }else{
            errLong.innerText = ''
        }
    })

    total.addEventListener('blur', () => {
        if(total.value == ''){
            errTotal.innerText = 'Debes Completar este campo'
            errTotal.style.color = 'red'
        }else if(isNaN(total.value)){
            errTotal.innerText = 'Este campo solo puede contener numeros'
            errTotal.style.color = 'red'
        }else{
            errTotal.innerText = ''
        }
    })

    duration.addEventListener('blur', () => {
        if(duration.value == ''){
            errDuration.innerText = 'Debes Completar este campo'
            errDuration.style.color = 'red'
        }else if(isNaN(duration.value)){
            errDuration.innerText = 'Este campo solo puede contener numeros'
            errDuration.style.color = 'red'
        }else{
            errDuration.innerText = ''
        }
    })


})

     
        