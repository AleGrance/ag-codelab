import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  nombre: string;
  empresa: string;
  email: string;
  whatsapp: string;
  solucion: string;
  mensaje: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  whatsappNumber = '595986153301';
  submitted = false;
  loading = false;

  form: ContactForm = {
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: '',
    solucion: '',
    mensaje: ''
  };

  soluciones = [
    { value: 'ag-sender', label: 'AG Sender — Campañas de WhatsApp' },
    { value: 'automatizacion', label: 'Automatización con WhatsApp API' },
    { value: 'sistema-web', label: 'Sistema web a medida' },
    { value: 'no-seguro', label: 'No estoy seguro / necesito asesoría' },
  ];

  onSubmit() {
    this.loading = true;
    // Aquí conectar con una API real
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
    }, 1200);
  }

  openWhatsApp() {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre las soluciones de AG Codelab.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${msg}`, '_blank');
  }

  resetForm() {
    this.submitted = false;
    this.form = { nombre: '', empresa: '', email: '', whatsapp: '', solucion: '', mensaje: '' };
  }
}
