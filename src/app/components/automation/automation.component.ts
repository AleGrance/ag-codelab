import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-automation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.scss']
})
export class AutomationComponent {
  flows = [
    { trigger: 'Cambia el estado de un pedido', action: 'El cliente recibe una notificación automática por WhatsApp', icon: '📦' },
    { trigger: 'Se confirma una entrega', action: 'Se envía un aviso automático al destinatario', icon: '🚚' },
    { trigger: 'Vence un pago o factura', action: 'Se envía un recordatorio al cliente o proveedor', icon: '💳' },
    { trigger: 'El sistema detecta una alerta interna', action: 'Se notifica al responsable en tiempo real', icon: '🔔' },
    { trigger: 'Un cliente confirma un turno', action: 'Recibe una confirmación y recordatorio automático', icon: '📅' },
    { trigger: 'Se genera un reporte programado', action: 'Se envía automáticamente a los destinatarios', icon: '📊' },
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
