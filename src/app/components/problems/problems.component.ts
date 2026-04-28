import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Problem {
  icon: string;
  problem: string;
  solution: string;
}

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent {
  problems: Problem[] = [
    { icon: '💬', problem: 'Mensajes enviados a mano', solution: 'Automatizamos el envío masivo y personalizado con WhatsApp API oficial.' },
    { icon: '🔁', problem: 'Procesos repetitivos que consumen tiempo', solution: 'Creamos flujos automáticos que ejecutan tareas sin intervención humana.' },
    { icon: '📋', problem: 'Falta de seguimiento de clientes', solution: 'Sistemas con historial, estados y notificaciones automáticas.' },
    { icon: '📁', problem: 'Información dispersa en planillas', solution: 'Centralizamos datos en sistemas web con reportes en tiempo real.' },
    { icon: '📊', problem: 'Reportes generados a mano', solution: 'Dashboards que consolidan y exportan información automáticamente.' },
    { icon: '🐢', problem: 'Comunicación lenta con clientes', solution: 'Notificaciones automáticas por WhatsApp en el momento exacto.' },
    { icon: '🔗', problem: 'Sistemas que no se conectan entre sí', solution: 'Integramos tus herramientas con APIs y automatizaciones a medida.' },
  ];
}
