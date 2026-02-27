# Parcial1-progra4

# Alumnos
Saul Antonio Amaya Umanzor
Brandom Gamaliel Sánchez Guevara

# Preguntas
1- ¿Qué valor agregado tiene el uso de WebComponents a su proyecto?

El uso de Web Components permitió crear un componente personalizado llamado <appointment-list>, encargado de mostrar la lista de citas de forma independiente al resto de la página, esto hace que el código esté mejor organizado y sea más fácil de mantener, además, al utilizar Shadow DOM, los estilos y la estructura interna del componente quedan aislados, evitando conflictos con el CSS global con esto facilitamos que la aplicación pueda crecer en el futuro sin afectar otras partes del sistema

2- ¿De qué forma manipularon los datos sin recargar la página?

Para evitar que la página se recargara, se capturó el evento submit del formulario y se utilizó event.preventDefault() , de esta manera, los datos ingresados se procesan directamente con JavaScript.Cada cita se guarda en un arreglo en memoria y, posteriormente, se actualiza el componente asignándole los nuevos datos, esto hace que la lista se renderice nuevamente de forma dinámica, mostrando los cambios inmediatamente en pantalla

3- ¿De qué forma validaron las entradas de datos?

La validación se realizó mediante una función que verifica que los campos obligatorios estén correctamente completados. El nombre debe tener al menos tres caracteres, la especialidad no puede quedar vacía y la fecha no puede ser anterior al día actual, si alguno de estos requisitos no se cumple, se muestra un mensaje de error en pantalla y la cita no se registra, esto garantiza que no se ingresen datos incorrectos o incompletos

4- ¿Cómo manejaría la escalabilidad futura en su página?

Pensando en el crecimiento de la aplicación, los datos podrían almacenarse en localStorage o en una base de datos mediante una API, También sería recomendable dividir el proyecto en módulos separados para validaciones, estado y vista, facilitando el mantenimiento, pensando en el futuro se podrían agregar funciones como editar, eliminar, buscar o filtrar citas, además, sería importante implementar validaciones también en el backend y optimizar el rendimiento si la cantidad de registros aumenta considerablemente

# Situación problematica: 
En muchos centros de salud pequenos, las citas se anotan en papel o por mensajes dispersos, lo que genera perdidas de turnos, errores de horario y doble asignacion de medicos. Esta aplicacion web permite registrar citas de forma rapida y ver los resultados en pantalla sin recargar la pagina.

# Sectores enfocados: 
salud (clinicas, consultorios, centros medicos), administracion y atencion al cliente.