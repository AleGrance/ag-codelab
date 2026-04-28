import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-dev',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-dev.component.html',
  styleUrls: ['./custom-dev.component.scss']
})
export class CustomDevComponent {
  systems = [
    { icon: '🏢', name: 'Sistemas administrativos', desc: 'Gestión interna de tu empresa' },
    { icon: '📋', name: 'Portales para clientes', desc: 'Acceso personalizado por usuario' },
    { icon: '📊', name: 'Dashboards gerenciales', desc: 'Indicadores clave en tiempo real' },
    { icon: '📦', name: 'Gestión de pedidos', desc: 'Seguimiento completo del ciclo' },
    { icon: '📁', name: 'Gestión documental', desc: 'Documentos organizados y accesibles' },
    { icon: '🔌', name: 'Integraciones API', desc: 'Conectamos tus sistemas existentes' },
    { icon: '👤', name: 'Usuarios y roles', desc: 'Control de accesos y permisos' },
    { icon: '📈', name: 'Reportes personalizados', desc: 'Exportaciones y análisis a medida' },
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
