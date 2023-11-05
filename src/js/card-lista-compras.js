import listaCompras from './lista-compras-data.js';

const body = document.querySelector('body');
const receitaContainer = document.getElementById('receitaContainer');

function getIngredientes(ingredientes) {
    return ingredientes.split(',').map(ingrediente => `
        <div class="ingrediente-checkbox">
            <label class="compra-checkbox-label">${ingrediente}
                <input class="favorita-info-item" type="checkbox">
            </label>
        </div>
    `).join('');
}

listaCompras.forEach(receita => {

    const div = document.createElement('div');
    div.classList.add('lista-compras-container');

    div.innerHTML = `
        <img class="receita-item-imagem" src=${receita.imagem}>

        <div class="lista-info-container">
            <div class="lista-info">
                <p class="favorita-info-item favorita-receita-title"> <strong>Nome da Receita: </strong>${receita.nome}</p>
                ${getIngredientes(receita.ingredientes)}
             </div>          
            
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