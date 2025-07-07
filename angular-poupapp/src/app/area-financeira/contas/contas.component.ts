import { Conta } from './../compartilhados/conta.model';
import { Component, input, output } from '@angular/core';
import { ContaComponent } from "./conta/conta.component";
import { CardComponent } from '../compartilhados/card/card.component';
import { BotaoAdicionarContasComponent } from "./botao-adicionar-contas/botao-adicionar-contas.component";

@Component({
  selector: 'app-contas',
  imports: [ContaComponent, CardComponent, BotaoAdicionarContasComponent],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent {
  contas = input.required<Conta[]>();
  contaCriada = output<Conta>();
}
