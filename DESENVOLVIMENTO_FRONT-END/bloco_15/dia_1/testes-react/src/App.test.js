import { render, screen } from '@testing-library/react';
import App from './App';

describe('Verifica se os elementos se encontram em tela', () => {
  it('Verifica se há o texto "learn react" no App', () => {
    // Para usar o RTL sempre tenha em mente as 3 etapas da testagem:
    // 1 - Acessar os elementos da sua tela
    const { getByText } = render(<App />);
    // 2 - Interagir com eles (Se houver necessidade)
  
    // 3 - Fazer seu teste
    const linkElement = getByText(/learn react/i);  // O seletor getByText pega pelo texto    //Essa Sintaxe "/learn react/i" ajuda pra nao precisar ser exatamente igual, ou seja, ignora os maiusculos ou menusculos.
    expect(linkElement).toBeInTheDocument();
  });
  
  it('Verifica se há um input de texto', () => {
    // 1 - Acessar os elementos da sua tela
    const { getByTestId } = render(<App />);   // O seletor getByTestId pega pelo ID do elemento
    // 2 - Interagir com eles (Se houver necessidade)
  
    // 3 - Fazer seu teste
    const input = getByTestId('id-input');
    expect(input).toBeInTheDocument();
  });
  
  it('Verifica se existem dois botões no App', () => {
    // 1 - Acessar os elementos da sua tela
    const { getAllByRole } = render(<App />);   // O seletor getByRole pega pelo tipo do elemento
    // 2 - Interagir com eles (Se houver necessidade)
  
    // 3 - Fazer seu teste
    const button = getAllByRole('button');
    expect(button.length).toBe(2);  // sintaze para dois elementos
  });
});
