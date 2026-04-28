import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss']
})
export class UseCasesComponent {
  cases = [
    { icon: '🛒', sector: 'Ecommerce', desc: 'Confirmación de pedidos, campañas promocionales, seguimiento de compras y recuperación de clientes.', tags: ['AG Sender', 'Automatización'] },
    { icon: '🚛', sector: 'Logística y distribución', desc: 'Notificaciones de estados, entregas, demoras y confirmaciones en tiempo real.', tags: ['Automatización', 'Bot WA'] },
    { icon: '🏪', sector: 'Comercios', desc: 'Promociones, novedades, recordatorios y comunicación directa con clientes.', tags: ['AG Sender'] },
    { icon: '🩺', sector: 'Servicios profesionales', desc: 'Recordatorios de turnos, confirmaciones y automatización de atención inicial.', tags: ['Automatización', 'Sistema web'] },
    { icon: '🏭', sector: 'Industria y producción', desc: 'Alertas internas, estados de línea, reportes automáticos y notificaciones operativas.', tags: ['Sistemas a medida', 'Bot WA'] },
    { icon: '📋', sector: 'Administración interna', desc: 'Dashboards, reportes, alertas y procesos conectados para equipos internos.', tags: ['Sistema web', 'Automatización'] },
  ];
}
