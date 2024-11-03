// Seleciona o elemento de áudio e a caixa de presente
const audioElement = document.getElementById('audio');
const giftBox = document.querySelector('.gift-box');

// Função para reproduzir o áudio ao clicar na caixa de presente
function playAudio() {
    audioElement.currentTime = 0; // Reinicia o áudio no começo
    audioElement.play().catch(error => {
        console.error("Erro ao tentar reproduzir o áudio:", error);
    });
}

// Adiciona o evento de clique na caixa de presente
giftBox.addEventListener('click', playAudio);
