// ============================
// Scroll suave del menú
// ============================

const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// ============================
// Animación al aparecer
// ============================

const secciones = document.querySelectorAll("section");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }

    });

}, {
    threshold: 0.2
});

secciones.forEach(sec => {
    sec.classList.add("oculto");
    observador.observe(sec);
});


// ============================
// Validación de formularios
// ============================

const formularios = document.querySelectorAll("form");

formularios.forEach(form => {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let valido = true;

        const inputs = this.querySelectorAll("input, textarea");

        inputs.forEach(input => {

            if(input.value.trim() === ""){
                input.style.border = "2px solid red";
                valido = false;
            }else{
                input.style.border = "1px solid #ccc";
            }

        });

        if(valido){
            alert("Formulario enviado correctamente.");
            this.reset();
        }else{
            alert("Complete todos los campos.");
        }

    });

});


// ============================
// Menú activo
// ============================

window.addEventListener("scroll", () => {

    let actual = "";

    secciones.forEach(sec => {

        const top = sec.offsetTop - 120;
        const alto = sec.clientHeight;

        if(pageYOffset >= top){
            actual = sec.getAttribute("id");
        }

    });

    enlaces.forEach(link => {

        link.classList.remove("activo");

        if(link.getAttribute("href") === "#" + actual){
            link.classList.add("activo");
        }

    });

});