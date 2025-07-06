import { Component, input } from '@angular/core';
import { Conta } from '../../compartilhados/conta.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-conta',
  imports: [CurrencyPipe],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent {
  conta = input.required<Conta>();
}
