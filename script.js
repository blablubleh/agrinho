// Função para rolagem suave ao clicar no botão
function scrollParaImpacto() {
    document.getElementById('impacto').scrollIntoView({ behavior: 'smooth' });
}

// Simulador de contador de agrotóxicos (fictício para efeito visual)
let quilos = 0;
const elementoContador = document.getElementById('contador');

function atualizarContador() {
    // Incrementa um valor aleatório para simular o uso contínuo
    quilos += Math.floor(Math.random() * 50) + 10;
    elementoContador.innerText = quilos.toLocaleString('pt-BR');
}

// Atualiza a cada 1.5 segundos
setInterval(atualizarContador, 1500);

// Efeito de revelação ao scroll (opcional)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? '#081c15' : '#1b4332';
});