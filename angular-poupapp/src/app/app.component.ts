import { Component } from '@angular/core';
import { BarraLateralComponent } from "./barra-lateral/barra-lateral.component";
import { ApresentacaoComponent } from "./apresentacao/apresentacao.component";
import { AreaFinanceiraComponent } from "./area-financeira/area-financeira.component";

@Component({
  selector: 'app-root',
  imports: [BarraLateralComponent, ApresentacaoComponent, AreaFinanceiraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
