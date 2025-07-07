import { Component, output, signal } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { Conta } from '../../compartilhados/conta.model';
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-botao-adicionar-contas',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-contas.component.html',
  styleUrl: './botao-adicionar-contas.component.css'
})
export class BotaoAdicionarContasComponent {
  modalAberto = signal(false);
  novaContaForm = {
    nome: '',
    saldo: ''
  };

  contaCriada = output<Conta>();

  abrirModal() {
    this.modalAberto.set(true);
  }


  aoSubmeter() {
    const novaConta = new Conta(
      this.novaContaForm.nome,
      Number(this.novaContaForm.saldo)
    );

    this.contaCriada.emit(novaConta);
    this.modalAberto.set(false);
  }

}
