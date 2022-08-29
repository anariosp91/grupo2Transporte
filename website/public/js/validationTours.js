window.addEventListener('load', () => {
    
    let inputs = document.querySelectorAll('input')[0].value
    let title = document.getElementById('title')
    let short_description = document.getElementById('mensaje')
    let long_description = document.getElementById('mensaje1')
    let image1 = document.getElementById('image1')
    let image2 = document.getElementById('image2')
    let image3 = document.getElementById('image3')
    let duration = document.getElementById('duration')
    let total = document.getElementById('total')
    let button = document.getElementById('guardar')
    let form_create = document.getElementById('form_create')

    let errTitle = document.getElementById('errTitle')
    let errShort = document.getElementById('errShort')
    let errLong = document.getElementById('errLong')
    let errDuration = document.getElementById('errDuration')
    let errTotal = document.getElementById('errTotal')
    let errImage1 = document.getElementById('errImage1')
    let errImage2 = document.getElementById('errImage2')
    let errImage3 = document.getElementById('errImage3')

    title.focus()
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
        }else if((long_description.value.length < 150) || (short_description.value.length > 500)){
            errLong.innerText = 'La descripcion debe tener entre 150 y 500 caracteres'
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

    image1.addEventListener('blur', () => {
        if(image1.value == ''){
            errImage1.innerText = 'Debes cargar una imagen'
            errImage1.style.color = 'red'
        }else{
            let filePath = image1.value
            let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
            if (!allowedExtensions.exec(filePath)) {
                errImage1.innerText = 'Las extensiones validas son .jpeg/.jpg/.png/.gif/.webp';
                errImage1.style.color = 'red'
            }else{
                errImage1.innerText = ''
                
            }
        }
    })  
    
    image2.addEventListener('blur', () => {
        if(image2.value == ''){
            errImage2.innerText = 'Debes cargar una imagen'
            errImage2.style.color = 'red'
        }else{
            let filePath = image2.value
            let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
            if (!allowedExtensions.exec(filePath)) {
                errImage2.innerText = 'Las extensiones validas son .jpeg/.jpg/.png/.gif/.webp';
                errImage2.style.color = 'red'
            }else{
                errImage2.innerText = ''
                
            }
        }
    })  

    image3.addEventListener('blur', () => {
        if(image3.value == ''){
            errImage3.innerText = 'Debes cargar una imagen'
            errImage3.style.color = 'red'
        }else{
            let filePath = image3.value
            let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
            if (!allowedExtensions.exec(filePath)) {
                errImage3.innerText = 'Las extensiones validas son .jpeg/.jpg/.png/.gif/.webp';
                errImage3.style.color = 'red'
            }else{
                errImage3.innerText = ''
                
            }
        }
    }) 
   
    
    button.addEventListener('click', (e) => {

        e.preventDefault();

        if((errTitle.innerText == '') && (errShort.innerText == '') && (errLong.innerText == '') && (errTotal.innerText == '') && (errDuration.innerText == '') && (errImage1.innerText == '') && (errImage2.innerText == '') && (errImage3.innerText == '')){
            
            form_create.submit()
        }
        else{
            errTitle.innerText = 'Debes Completar los campos del formulario' 
            errTitle.style.color = 'red' 
        }
        
    })
         
        
})

     
        