document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', function() {
        var dropdownBtn = document.querySelector('.dropdown-btn');
        var dropdownContent = document.querySelector('.dropdown-content');

        dropdownBtn.addEventListener('click', function() {
            dropdownContent.classList.toggle('active');
        });
    });

    
    // Funcion desplegar servicios uwu
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    
    // Verificar que todo haya cargado
    if (toggleIcons.length > 0) {
        toggleIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const serviceDescription = this.parentElement.nextElementSibling;
                const isVisible = serviceDescription.style.display === 'block';

                // Ocultar todo el resto y dar vuelta la flechita
                document.querySelectorAll('.service-description').forEach(desc => {
                    desc.style.display = 'none';
                    desc.previousElementSibling.querySelector('.toggle-icon').style.transform = 'rotate(0deg)';
                });

                // Mostrar o no 
                if (isVisible) {
                    serviceDescription.style.display = 'none';
                    this.style.transform = 'rotate(0deg)';
                } else {
                    serviceDescription.style.display = 'block';
                    this.style.transform = 'rotate(180deg)';
                }
            });
        });
    }
});
