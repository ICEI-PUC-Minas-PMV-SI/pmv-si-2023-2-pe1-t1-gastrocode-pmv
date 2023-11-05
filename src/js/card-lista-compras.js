import receitasFavoritas from './receitas-favoritas-data.js';

const body = document.querySelector('body');
const receitaContainer = document.getElementById('receitaContainer');

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

receitasFavoritas.forEach(receita => {

    const div = document.createElement('div');
    div.classList.add('receita-favorita-container');

    div.innerHTML = `
        <img class="receita-item-imagem" src=${receita.imagem}>

        <div class="receita-info-container">
            <p class="favorita-info-item favorita-receita-title"> <strong>Nome da Receita: </strong>${receita.nome}</p>
            <p class="favorita-info-item"> <strong>Ingredientes: </strong>${receita.ingredientes.forEach((receita) => `${receita}`)}</p>
            <p class="favorita-info-item"> <strong>Modo de Preparo: </strong>${receita.modoPreparo}</p>
            <p class="favorita-info-item"> <strong>Custo: </strong>${getReceitaCusto(receita.custo)}</p>
            
            <div class="favorita-button-container">
                
                <span class="remove-label">REMOVER</span>
                <svg
                    class="favorita-button"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512">
                    <path 
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/
                    > 
                </svg>

            </div> 
        </div>    
    `;

    receitaContainer.appendChild(div);
});