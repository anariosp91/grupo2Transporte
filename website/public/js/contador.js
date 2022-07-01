// textarea 1 de views/create.ejs y views/edit.ejs
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

// textarea 2 de views/create.ejs y views/edit.ejs

const mensaje1 = document.getElementById('mensaje1');
const contador1 = document.getElementById('contador1');

mensaje1.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador1.innerHTML = `${longitudAct}/${longitudMax}`;
});