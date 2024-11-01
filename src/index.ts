import CpuB4 from "./cpuGrupoB4";
import { Digito, Operação, Controle, Sinal} from "./calculadora";
import TelaB4 from "./telaGrupoB4";
import TecladoX0 from "./tecladoGrupoB4";

const tela = new TelaB4();
const cpu = new CpuB4(tela);
const teclado = new TecladoX0();
teclado.definaCpu(cpu);

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLElement;

  // Função para atualizar o display
  function atualizarDisplay(valor: string) {
    display.textContent = valor;
  }

  // Adicionar evento aos botões de dígitos
  document.querySelectorAll(".botao.digito").forEach((botao) => {
    botao.addEventListener("click", () => {
      const valor = (botao as HTMLElement).getAttribute("data-digito") as keyof typeof Digito;
      if (valor !== null) {
        teclado.digiteDigito(Digito[valor]);
      }
    });
  });

  // Adicionar evento aos botões de operações
  document.querySelectorAll(".botao.operacao").forEach((botao) => {
    botao.addEventListener("click", () => {
      const operacao = (botao as HTMLElement).getAttribute("data-operacao") as keyof typeof Operação;
      if (operacao !== null) {
        teclado.digiteOperacao(Operação[operacao]);
      }
    });
  });

  // Adicionar evento aos botões de controle
  document.querySelectorAll(".botao.controle").forEach((botao) => {
    botao.addEventListener("click", () => {
      const controle = (botao as HTMLElement).getAttribute("data-controle") as keyof typeof Controle;
      if (controle !== null) {
        teclado.digiteControle(Controle[controle]);
      }
    });
  });

  // Atualizar a tela da calculadora para exibir o valor correto
  tela.mostre = (digito) => atualizarDisplay(digito.toString());
  tela.limpe = () => atualizarDisplay("0");
  tela.mostreErro = () => atualizarDisplay("Erro");
  tela.mostreMemoria = () => atualizarDisplay("M");
  tela.mostreSeparadorDecimal = () => atualizarDisplay(display.textContent + ".");
  tela.mostreSinal = (sinal) => atualizarDisplay(sinal === Sinal.POSITIVO ? "+" : "-");
});
