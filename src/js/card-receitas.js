import receitas from './receitas-data.js';

const body = document.querySelector('body');
const receitaContainer = document.getElementById('receitaContainer');

function openReceitaCard(receita) {

    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal">
                
                <div class="modal-header-container">

                    <h1 class="modal-title">${receita.nome}</h1>
                    <svg
                        class="modal-close-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                    </svg>

                </div>

                <div class="modal-receita-container">
                    <img class="modal-receita-img" src=${receita.imagem}>
                    <div class="modal-receita-info">
                        <span class="modal-receita-text"><strong>Ingredientes: </strong> ${receita.ingredientes.join(", ")}</span>
                        <span class="modal-receita-text"><strong>Modo de Preparo: </strong> ${receita.modoPreparo}</span>
                        <span class="modal-receita-text"><strong>Custo: </strong> ${getReceitaCusto(receita.custo)}</span>
                    </div>
                </div>

                <div class="button-add-container">
                    <svg 
                        class="modal-add-svg"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 576 512"
                    >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    <span class="button-add-text">Add. Lista de Compras</span>
                </div>
                
            </div>
        </div>   
    `;

    const closeButtons = modal.querySelectorAll('.modal-close-svg');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.remove();
        })
    })

    body.appendChild(modal);

}

function getReceitaCusto(custo) {
    switch (custo) {
        case 1:
            return '$ (Baixo)';
        case 2:
            return '$$ (Médio)';
        case 3:
            return '$$$ (Alto)';
        default:
            return 'Não informado';
    }
}

receitas.forEach(receita => {

    const div = document.createElement('div');
    div.classList.add('receita-item-container');

    div.innerHTML = `
        <img class="receita-item-imagem" src=${receita.imagem}>

        <div class="receita-nome-container">
            <p class="receita-item-nome">${receita.nome}</p>
            <button class="receita-item-button" type="button"}>
                +
            </button>
        </div>    
    `;

    const button = div.querySelector('.receita-item-button');
    button.addEventListener('click', () => openReceitaCard(receita));

    receitaContainer.appendChild(div);
});