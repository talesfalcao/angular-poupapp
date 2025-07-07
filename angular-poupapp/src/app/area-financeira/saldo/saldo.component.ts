import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { DestaqueValorNumericoDirective } from '../../compartilhados/destaque-valor-numerico.directive';
import { CardComponent } from '../compartilhados/card/card.component';

@Component({
  selector: 'app-saldo',
  imports: [CurrencyPipe, DestaqueValorNumericoDirective, CardComponent],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent {
  saldo = input.required<number>();
}
