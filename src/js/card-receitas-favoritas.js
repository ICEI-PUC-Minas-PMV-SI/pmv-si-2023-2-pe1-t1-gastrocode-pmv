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
            <p class="favorita-info-item"> <strong>Ingredientes: </strong>${receita.ingredientes}</p>
            <p class="favorita-info-item"> <strong>Modo de Preparo: </strong>${receita.modoPreparo}</p>
            <p class="favorita-info-item"> <strong>Custo: </strong>${getReceitaCusto(receita.custo)}</p>
            <div class="favorita-button-container">
                <button class="favorita-button" type="button"}>
                    Remover receita
                </button>
            </div> 
        </div>    
    `;

    receitaContainer.appendChild(div);
});