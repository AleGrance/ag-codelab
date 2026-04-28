import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ag-sender',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ag-sender.component.html',
  styleUrls: ['./ag-sender.component.scss']
})
export class AgSenderComponent {
  idealFor = [
    'Promociones', 'Novedades', 'Comunicados comerciales',
    'Recordatorios', 'Lanzamientos de productos', 'Campañas segmentadas',
    'Avisos masivos', 'Recuperación de clientes'
  ];

  features = [
    { icon: '📤', title: 'Gestión de campañas', desc: 'Creá, configurá y enviá campañas en pocos pasos desde un panel centralizado.' },
    { icon: '👥', title: 'Carga de contactos', desc: 'Importá listas de contactos y segmentalos según tus criterios.' },
    { icon: '📋', title: 'Plantillas aprobadas', desc: 'Envío mediante templates verificados y aprobados por Meta.' },
    { icon: '📈', title: 'Historial y estados', desc: 'Seguimiento completo de envíos: entregado, leído, fallido.' },
    { icon: '🔧', title: 'Configuración técnica', desc: 'Acompañamiento en la configuración de la API de Meta desde cero.' },
    { icon: '💬', title: 'Soporte incluido', desc: 'Asistencia técnica y consultoría para optimizar tus campañas.' },
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
