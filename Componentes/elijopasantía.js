document.addEventListener('DOMContentLoaded', function() {
    const pasantiasData = {
        frontend: {
            nombre: 'Pasantía en Desarrollo Web Frontend',
            descripcion: {
                tareas: 'Colaborar en el diseño y maquetación de interfaces web interactivas y responsivas. Implementar componentes visuales utilizando HTML, CSS y JavaScript. Participar en pruebas de usabilidad y optimización del rendimiento frontend.',
                responsabilidades: 'Asegurar la correcta visualización y funcionalidad de las interfaces en diversos dispositivos y navegadores. Mantener y optimizar el código existente. Colaborar activamente con el equipo de desarrollo (backend y UX/UI) y participar en metodologías ágiles.'
            },
            requisitos: {
                carrera: 'Ingeniería en Sistemas, Lic. en Ciencias de la Computación, Tecnicatura Superior en Programación, Diseño y Desarrollo Web o carreras afines.',
                anoQueCursa: 'Estudiantes a partir del 3er año o con conocimientos equivalentes demostrables.',
                disponibilidadHoraria: '20 horas semanales, con flexibilidad para coordinar horarios (preferentemente turno mañana o tarde).',
                experiencia: 'Conocimientos sólidos de HTML5 semántico y CSS3 (Flexbox, Grid, selectores avanzados). Comprensión de JavaScript moderno (ES6+), manipulación del DOM y manejo de eventos. Se valorará positivamente conocimiento de algún framework/librería como React, Vue.js o Angular, y herramientas de control de versiones (Git).',
                aptitudes: 'Proactividad, gran atención al detalle, capacidad de aprendizaje autónomo, buenas habilidades de comunicación para el trabajo en equipo y resolución de problemas.'
            },
            condiciones: {
                duracion: '6 meses, con posibilidad de renovación y crecimiento dentro de la empresa según desempeño.',
                horarios: 'A convenir para cubrir las 20hs semanales, buscando compatibilidad con los estudios.',
                lugarDeTrabajo: 'Modalidad híbrida (3 días remoto y 2 días presencial en nuestras oficinas de San Francisco, Córdoba).'
            }
        },
        marketing: {
            nombre: 'Pasantía en Marketing Digital',
            descripcion: {
                tareas: 'Asistir en la creación de contenido para redes sociales. Apoyar en la gestión de campañas publicitarias.',
                responsabilidades: 'Monitoreo de métricas básicas. Investigación de tendencias de mercado.'
            },
            requisitos: {
                carrera: 'Marketing, Comunicación Social, Publicidad o afines.',
                anoQueCursa: 'A partir de 2do año.',
                disponibilidadHoraria: '15-20 hs semanales.',
                experiencia: 'Manejo básico de redes sociales. No excluyente.',
                aptitudes: 'Creatividad, buena redacción, organización.'
            },
            condiciones: {
                duracion: '4 meses.',
                horarios: 'Principalmente por la mañana.',
                lugarDeTrabajo: 'Oficinas centrales.'
            }
        },
        datos: {
            nombre: 'Pasantía en Análisis de Datos Jr.',
            descripcion: {
                tareas: 'Colaborar en la recolección y limpieza de datos. Asistir en la generación de reportes básicos.',
                responsabilidades: 'Mantener la confidencialidad de la información. Documentar procesos.'
            },
            requisitos: {
                carrera: 'Lic. en Estadística, Actuaría, Economía, Ing. Industrial o afines con orientación a datos.',
                anoQueCursa: 'A partir de 3er año o finalizando.',
                disponibilidadHoraria: '20 hs semanales.',
                experiencia: 'Conocimientos de Excel avanzado. Deseable Python o R básico.',
                aptitudes: 'Capacidad analítica, atención al detalle, metódico.'
            },
            condiciones: {
                duracion: '6-9 meses.',
                horarios: 'Flexibles.',
                lugarDeTrabajo: 'Remoto.'
            }
        }
    };

    const selectPasantias = document.getElementById('listaPasantias');
    const infoContainer = document.getElementById('infoPasantiaSeleccionada');
    const placeholderText = '<p class="placeholder-info">Seleccione una pasantía para ver sus detalles.</p>';

    infoContainer.innerHTML = placeholderText; // Mostrar placeholder al inicio

    selectPasantias.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue && pasantiasData[selectedValue]) {
            const pasantia = pasantiasData[selectedValue];
            let htmlContent = `<h3>${pasantia.nombre}</h3>`;

            htmlContent += `<p><strong>Descripción de pasantía:</strong></p>
                            <ul>
                                <li>Tareas: ${pasantia.descripcion.tareas}</li>
                                <li>Responsabilidades: ${pasantia.descripcion.responsabilidades}</li>
                            </ul>`;
            
            htmlContent += `<p><strong>Requisitos:</strong></p><ul>`;
            htmlContent += `<li>Carrera: ${pasantia.requisitos.carrera}</li>`;
            htmlContent += `<li>Año que cursa: ${pasantia.requisitos.anoQueCursa}</li>`;
            htmlContent += `<li>Disponibilidad Horaria: ${pasantia.requisitos.disponibilidadHoraria}</li>`;
            htmlContent += `<li>Experiencia: ${pasantia.requisitos.experiencia}</li>`;
            htmlContent += `<li>Aptitudes: ${pasantia.requisitos.aptitudes}</li>`;
            htmlContent += `</ul>`;

            htmlContent += `<p><strong>Condiciones:</strong></p><ul>`;
            htmlContent += `<li>Duración: ${pasantia.condiciones.duracion}</li>`;
            htmlContent += `<li>Horarios: ${pasantia.condiciones.horarios}</li>`;
            htmlContent += `<li>Lugar de trabajo: ${pasantia.condiciones.lugarDeTrabajo}</li>`;
            htmlContent += `</ul>`;
            
            infoContainer.innerHTML = htmlContent;
        } else {
            infoContainer.innerHTML = placeholderText;
        }
    });
});