import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  steps = [
    { num: '01', title: 'Relevamiento', desc: 'Analizamos tu necesidad, proceso o problema actual para entender qué solución tiene más sentido.' },
    { num: '02', title: 'Propuesta', desc: 'Definimos alcance, tiempos, costos y la solución tecnológica recomendada para tu caso.' },
    { num: '03', title: 'Desarrollo', desc: 'Construimos la solución con tecnología moderna, escalable y buenas prácticas de ingeniería.' },
    { num: '04', title: 'Pruebas', desc: 'Validamos el funcionamiento completo antes de la puesta en producción.' },
    { num: '05', title: 'Implementación', desc: 'Configuramos, desplegamos y acompañamos la salida en vivo de la solución.' },
    { num: '06', title: 'Soporte continuo', desc: 'Brindamos mantenimiento, ajustes y evolución de la solución a lo largo del tiempo.' },
  ];
}
