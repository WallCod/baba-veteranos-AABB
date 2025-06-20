document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todas as imagens com a classe clickable-image
    const images = document.querySelectorAll('.clickable-image');
    // Seleciona o modal, a imagem dentro do modal e o botão de fechar
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    // Verifica se os elementos existem para evitar erros
    if (!modal || !modalImage || !closeModal) {
        console.error('Elementos do modal não encontrados. Verifique os IDs: image-modal, modal-image, close-modal.');
        return;
    }

    // Adiciona evento de clique a cada imagem
    images.forEach(image => {
        image.addEventListener('click', function () {
            modalImage.src = this.src; // Define a imagem do modal como a imagem clicada
            modalImage.alt = this.alt; // Define o texto alternativo
            modal.classList.remove('hidden'); // Exibe o modal
        });
    });

    // Adiciona evento de clique ao botão de fechar
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden'); // Esconde o modal
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden'); // Esconde o modal
        }
    });
});