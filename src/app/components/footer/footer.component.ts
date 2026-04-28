import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  whatsappNumber = '595981234567';

  links = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Soluciones', id: 'soluciones' },
    { label: 'AG Sender', id: 'ag-sender' },
    { label: 'Automatizaciones', id: 'automatizaciones' },
    { label: 'Desarrollo a medida', id: 'desarrollo' },
    { label: 'Proceso', id: 'proceso' },
    { label: 'Contacto', id: 'contacto' },
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  openWhatsApp() {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre las soluciones de AG Codelab.');
    window.open('https://wa.me/' + this.whatsappNumber + '?text=' + msg, '_blank');
  }
}
