import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  techs = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'NestJS', icon: '🔴' },
    { name: 'Angular', icon: '🔺' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Oracle DB', icon: '🔶' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'WhatsApp API', icon: '💬' },
    { name: 'Meta API', icon: '🔵' },
    { name: 'Nginx', icon: '🌐' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Cloudflare', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
  ];

  trust = [
    { icon: '🔒', title: 'APIs oficiales', desc: 'Usamos solo integraciones oficiales y documentadas.' },
    { icon: '📐', title: 'Buenas prácticas', desc: 'Código limpio, escalable y mantenible desde el inicio.' },
    { icon: '🚀', title: 'Escalabilidad', desc: 'Soluciones preparadas para crecer con tu empresa.' },
    { icon: '🛡️', title: 'Seguridad', desc: 'Implementamos estándares de seguridad en cada proyecto.' },
    { icon: '🤝', title: 'Acompañamiento', desc: 'Soporte técnico real, no solo un sistema entregado.' },
    { icon: '🏭', title: 'Entornos reales', desc: 'Experiencia en producción con empresas y cargas reales.' },
  ];
}
