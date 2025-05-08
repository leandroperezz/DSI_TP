document.addEventListener('DOMContentLoaded', function() {
    const becasData = {
        impulso: {
            nombre: 'Beca "Impulso Académico"',
            descripcion: 'Apoyo para estudiantes con excelente desempeño académico.',
            requisitos: {
                carrera: 'Todas las carreras elegibles.',
                ano: 'A partir de 2º año.',
                promedio: 'Mínimo 8.0.'
            },
            beneficios: {
                monto: '$25.000 mensuales.',
                duracion: '10 meses.'
            }
        },
        progresar: {
            nombre: 'Beca "Progresar Estudiantil"',
            descripcion: 'Ayuda económica para facilitar la continuidad de los estudios.',
            requisitos: {
                carrera: 'Todas las carreras elegibles.',
                ano: '1º a 5º año.',
                ingresos: 'Acreditar necesidad.'
            },
            beneficios: {
                monto: '$35.000 mensuales.',
                duracion: '12 meses, renovable.'
            }
        },
        innovacion: {
            nombre: 'Beca "Talento en Innovación"',
            descripcion: 'Fomento a proyectos estudiantiles con potencial innovador.',
            requisitos: {
                carrera: 'Carreras de Ciencia, Tecnología, Ingeniería y Diseño.',
                ano: 'A partir de 3er año.',
                proyecto: 'Presentar idea de proyecto.'
            },
            beneficios: {
                monto: '$40.000 mensuales + mentoría.',
                duracion: 'Según proyecto (máx. 12 meses).'
            }
        }
    };

    const selectBecas = document.getElementById('listaBecas');
    const infoContainer = document.getElementById('infoBecaSeleccionada');
    const placeholderText = '<p class="placeholder-info">Seleccione una beca para ver sus detalles.</p>';

    // Inicializar con el placeholder
    infoContainer.innerHTML = placeholderText;

    selectBecas.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue && becasData[selectedValue]) {
            const beca = becasData[selectedValue];
            let htmlContent = `<h3>${beca.nombre}</h3>`; // Mostrar el nombre de la beca como título
            htmlContent += `<p><strong>Descripción:</strong> ${beca.descripcion}</p>`; // Cambié "Descripción de pasantía" por "Descripción"
            
            htmlContent += `<p><strong>Requisitos:</strong></p><ul>`; // Agregué <ul> para listar requisitos
            for (const key in beca.requisitos) {
                // Capitalizar la primera letra de la clave del requisito
                const requisitoKeyCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
                htmlContent += `<li>${requisitoKeyCapitalized}: ${beca.requisitos[key]}</li>`;
            }
            htmlContent += `</ul>`;

            htmlContent += `<p><strong>Beneficios:</strong></p><ul>`; // Agregué <ul> para listar beneficios
            for (const key in beca.beneficios) {
                 // Capitalizar la primera letra de la clave del beneficio
                const beneficioKeyCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
                htmlContent += `<li>${beneficioKeyCapitalized}: ${beca.beneficios[key]}</li>`;
            }
            htmlContent += `</ul>`;
            
            infoContainer.innerHTML = htmlContent;
        } else {
            // Si se selecciona la opción por defecto "Lista de becas", mostrar el placeholder
            infoContainer.innerHTML = placeholderText;
        }
    });
});