// Defina as taxas de câmbio
const taxasCambio = {
    dolar: 5.48, // 1 dólar = 5,48 reais
    euro: 6.00,  // 1 euro = 6,00 reais
    yuan: 0.78   // 1 yuan = 0,78 reais
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém o valor em reais do input
    const quantiaEmReais = parseFloat(document.querySelector('.quantia').value);
    
    // Obtém a moeda selecionada
    const moedaSelecionada = document.querySelector('.moeda').value;

    // Verifica se o valor é um número válido
    if (isNaN(quantiaEmReais)) {
        alert('Por favor, insira um valor válido.');
    } else if (quantiaEmReais < 0) {
        alert('Por favor, insira um valor maior ou igual a zero.');
    } else {
        // Verifica a taxa de câmbio para a moeda selecionada
        const taxaCambio = taxasCambio[moedaSelecionada];
        
        // Converte para a moeda selecionada
        const quantiaConvertida = (quantiaEmReais / taxaCambio).toFixed(2);

        // Exibe o resultado
        document.querySelector('.resultado').textContent = `${quantiaConvertida} ${moedaSelecionada.charAt(0).toUpperCase() + moedaSelecionada.slice(1)}`;
    }
});
