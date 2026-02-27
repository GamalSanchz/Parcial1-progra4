class AppointmentList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.appointments = [];
    this.render();
  }

  set data(value) {
    this.appointments = value;
    this.render();
  }

  render() {
    const items = this.appointments
      .map(
        (appointment, index) => `
          <li>
            <span>${index + 1}. <strong>${appointment.patientName}</strong></span>
            <span>${appointment.doctor}</span>
            <span>${appointment.date}</span>
          </li>
        `
      )
      .join("");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        h2 {
          margin: 0 0 10px;
          font-size: 1.2rem;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 10px;
        }
        li {
          border: 1px solid #d7deea;
          border-radius: 10px;
          padding: 10px;
          background: #fbfdff;
          display: grid;
          gap: 4px;
        }
        .empty {
          color: #5f6b7a;
          margin: 0;
        }
      </style>
      <h2>Citas registradas</h2>
      ${this.appointments.length ? `<ul>${items}</ul>` : '<p class="empty">Aun no hay citas registradas.</p>'}
    `;
  }
}

customElements.define("appointment-list", AppointmentList);

const form = document.getElementById("appointmentForm");
const patientNameInput = document.getElementById("patientName");
const doctorSelect = document.getElementById("doctor");
const dateInput = document.getElementById("date");
const message = document.getElementById("message");
const listComponent = document.querySelector("appointment-list");

const appointments = [];

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

function validateForm(patientName, doctor, date) {
  if (!patientName || patientName.length < 3) {
    return "El nombre es obligatorio y debe tener al menos 3 caracteres.";
  }

  if (!doctor) {
    return "Debe seleccionar una especialidad medica.";
  }

  if (!date) {
    return "Debe seleccionar una fecha.";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(`${date}T00:00:00`);

  if (selectedDate < today) {
    return "La fecha de la cita no puede estar en el pasado.";
  }

  return "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const patientName = patientNameInput.value.trim();
  const doctor = doctorSelect.value;
  const date = dateInput.value;

  const error = validateForm(patientName, doctor, date);

  if (error) {
    showMessage(error, "error");
    return;
  }

  const appointment = { patientName, doctor, date };
  appointments.push(appointment);
  listComponent.data = appointments;

  showMessage("Cita registrada correctamente.", "success");
  form.reset();
  patientNameInput.focus();
});
