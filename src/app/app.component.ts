import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { AgSenderComponent } from './components/ag-sender/ag-sender.component';
import { AutomationComponent } from './components/automation/automation.component';
import { CustomDevComponent } from './components/custom-dev/custom-dev.component';
import { UseCasesComponent } from './components/use-cases/use-cases.component';
import { ProcessComponent } from './components/process/process.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProblemsComponent,
    SolutionsComponent,
    AgSenderComponent,
    AutomationComponent,
    CustomDevComponent,
    UseCasesComponent,
    ProcessComponent,
    TechnologiesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AG Codelab — Software y automatización para empresas';
  whatsappNumber = '595986153301';

  openWhatsApp() {
    const msg = encodeURIComponent('Hola, me interesa conocer más sobre los productos de AG Codelab.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${msg}`, '_blank');
  }
}
