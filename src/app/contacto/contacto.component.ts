import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  enviarForm(): boolean {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById("message") as HTMLTextAreaElement;
    const notificacion = document.querySelector(".notificacion") as HTMLDivElement;

    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
      notificacion.innerText = "Completa el formulario antes de enviar."; //Si el form no esta completo, devuelve una notificacion avisando
      notificacion.classList.add("mostrarError");

      setTimeout(function () {
        notificacion.classList.remove("mostrarError");
      }, 3000);

      return false;
    }

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    notificacion.innerText = "Formulario Enviado!";//Si el form esta completo, se "envia", da la notifiacion y borra el contenido del form
    notificacion.classList.add("mostrar");
    setTimeout(function () {
      notificacion.classList.remove("mostrar");
    }, 3000);

    return false;
  }

}
