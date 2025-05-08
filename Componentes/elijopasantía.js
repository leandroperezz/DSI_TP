document.addEventListener('DOMContentLoaded', function() {
    const pasantiaSelect = document.getElementById('pasantiaSelect');
    const pasantiaDetallesDiv = document.getElementById('pasantiaDetalles');
    const btnSiguientePasantia = document.getElementById('btnSiguientePasantia');

    // Datos de las pasantías (los que inventamos)
    const pasantias = [
        {
            id: "webjr",
            nombre: "Desarrollador Web Junior en Tech Solutions",
            descripcion: "Unirse a un equipo dinámico para desarrollar y mantener aplicaciones web utilizando tecnologías modernas. Aprender y aplicar las mejores prácticas de la industria en un entorno colaborativo.",
            tareas: "Asistir en la codificación de componentes front-end y back-end, participar en la revisión de código, colaborar con diseñadores UX/UI, realizar pruebas unitarias.",
            responsabilidades: "Completar las tareas asignadas a tiempo, comunicar proactivamente el progreso y los impedimentos, contribuir a la documentación técnica.",
            requisitos: {
                carrera: "Ingeniería en Sistemas, Licenciatura en Informática o afines.",
                ano: "3er año en adelante.",
                disponibilidad: "20 horas semanales (horario flexible).",
                experiencia: "Conocimientos básicos de HTML, CSS, JavaScript. Se valorará experiencia con algún framework (React, Angular, Vue) o lenguaje back-end (Node.js, Python, Java).",
                aptitudes: "Ganas de aprender, proactividad, trabajo en equipo, buenas habilidades de comunicación."
            },
            condiciones: {
                duracion: "6 meses (con posibilidad de extensión).",
                horarios: "A convenir.",
                lugar: "Remoto / Híbrido (Oficinas en centro de la ciudad)."
            }
        },
        {
            id: "mkt",
            nombre: "Analista de Marketing Digital en Creative Minds Agency",
            descripcion: "Oportunidad para desarrollar habilidades en marketing digital, gestionando campañas en redes sociales, SEO/SEM y análisis de métricas para clientes de diversas industrias.",
            tareas: "Creación y optimización de contenido para redes sociales, investigación de palabras clave, monitoreo de campañas de publicidad online, elaboración de informes de rendimiento.",
            responsabilidades: "Cumplir con los objetivos de las campañas, gestionar el presupuesto asignado, mantenerse actualizado con las últimas tendencias en marketing digital.",
            requisitos: {
                carrera: "Marketing, Comunicación Social, Publicidad o afines.",
                ano: "2do año en adelante.",
                disponibilidad: "15-20 horas semanales.",
                experiencia: "Manejo de redes sociales (Instagram, Facebook, LinkedIn). Conocimientos básicos de Google Analytics y Google Ads (deseable).",
                aptitudes: "Creatividad, capacidad analítica, buenas habilidades de redacción, interés por el mundo digital."
            },
            condiciones: {
                duracion: "4 meses.",
                horarios: "Flexibles, a coordinar.",
                lugar: "Principalmente remoto, con reuniones presenciales ocasionales."
            }
        },
        {
            id: "rrhh",
            nombre: "Asistente de Recursos Humanos en People First Consulting",
            descripcion: "Colaborar en diversos procesos del área de Recursos Humanos, incluyendo reclutamiento, selección, capacitación y desarrollo organizacional.",
            tareas: "Publicación de ofertas de empleo, filtro de CVs, coordinación de entrevistas, apoyo en la organización de eventos de capacitación, mantenimiento de bases de datos de candidatos.",
            responsabilidades: "Asegurar la correcta ejecución de las tareas administrativas del área, mantener la confidencialidad de la información, brindar soporte a los consultores senior.",
            requisitos: {
                carrera: "Recursos Humanos, Psicología, Relaciones Laborales o afines.",
                ano: "Últimos años de la carrera.",
                disponibilidad: "20 horas semanales (preferentemente por la mañana).",
                experiencia: "No indispensable, pero se valorará experiencia previa en tareas administrativas o atención al cliente.",
                aptitudes: "Organización, atención al detalle, buenas habilidades interpersonales, vocación de servicio."
            },
            condiciones: {
                duracion: "6 meses.",
                horarios: "Lunes a Viernes, 4 horas diarias.",
                lugar: "Oficinas céntricas."
            }
        }
    ];

    // Poblar el select con las pasantías
    pasantias.forEach(pasantia => {
        const option = document.createElement('option');
        option.value = pasantia.id;
        option.textContent = pasantia.nombre;
        pasantiaSelect.appendChild(option);
    });

    // Evento cuando se selecciona una pasantía
    pasantiaSelect.addEventListener('change', function() {
        const selectedId = this.value;
        if (selectedId) {
            const pasantiaSeleccionada = pasantias.find(p => p.id === selectedId);
            mostrarDetalles(pasantiaSeleccionada);
            pasantiaDetallesDiv.style.display = 'block';
            btnSiguientePasantia.style.display = 'block'; // Mostrar el botón "Siguiente"
        } else {
            pasantiaDetallesDiv.style.display = 'none';
            btnSiguientePasantia.style.display = 'none'; // Ocultar el botón "Siguiente"
        }
    });

    function mostrarDetalles(pasantia) {
        document.getElementById('descDescripcion').textContent = pasantia.descripcion;
        document.getElementById('descTareas').textContent = pasantia.tareas;
        document.getElementById('descResponsabilidades').textContent = pasantia.responsabilidades;

        document.getElementById('reqCarrera').textContent = pasantia.requisitos.carrera;
        document.getElementById('reqAno').textContent = pasantia.requisitos.ano;
        document.getElementById('reqDisponibilidad').textContent = pasantia.requisitos.disponibilidad;
        document.getElementById('reqExperiencia').textContent = pasantia.requisitos.experiencia;
        document.getElementById('reqAptitudes').textContent = pasantia.requisitos.aptitudes;

        document.getElementById('condDuracion').textContent = pasantia.condiciones.duracion;
        document.getElementById('condHorarios').textContent = pasantia.condiciones.horarios;
        document.getElementById('condLugar').textContent = pasantia.condiciones.lugar;
    }

    // Acción del botón Siguiente (por ahora solo un log, luego redirigirá)
    btnSiguientePasantia.addEventListener('click', function() {
        const pasantiaSeleccionadaId = pasantiaSelect.value;
        if (pasantiaSeleccionadaId) {
            // Guardar la selección para la siguiente página (usando localStorage o pasando por URL)
            localStorage.setItem('pasantiaSeleccionadaId', pasantiaSeleccionadaId);
            // Redirigir a la siguiente página del formulario de pasantía
            window.location.href = 'formulario_pasantia.html'; // Esta será la Página 4
        } else {
            alert('Por favor, seleccione una pasantía.');
        }
    });
});