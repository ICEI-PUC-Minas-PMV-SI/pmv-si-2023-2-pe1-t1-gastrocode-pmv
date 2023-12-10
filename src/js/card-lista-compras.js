import getUser from "./crud/getUser.js";

const receitaContainer = document.getElementById('receitaContainer');

async function loadListaCompras() {

    const usuario = await getUser();

    if (usuario) {
        fetch('http://localhost:3000/receitas')
            .then(response => response.json())
            .then(receitas => {
                receitas.map((receita) => {
                    if (usuario.listaCompras.includes(receita.id)) {

                        const div = document.createElement('div');
                        div.classList.add('lista-compras-container');

                        div.innerHTML = `
                                 <img class="receita-item-imagem" src=${receita.imagemReceita}>
                        
                                 <div class="lista-info-container">
                                     <div class="lista-info">
                                         <p class="favorita-info-item favorita-receita-title"> <strong>Nome da Receita: </strong>${receita.nomeReceita}</p>
                                         ${getIngredientes(receita.ingredientesReceita)}
                                      </div>          
                        
                                     <div class="favorita-button-container">

                                         <span id="comprasRemoveButton" class="favorita-span">
                                             REMOVER
                                            <svg
                                                class="favorita-button"
                                                xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 448 512">
                                                <path 
                                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/
                                                > 
                                            </svg>
                                        </span>
                        
                                     </div> 
                                 </div>    
                             `;

                        const comprasRemoveButton = div.querySelector('#comprasRemoveButton');
                        comprasRemoveButton.addEventListener('click', () => {
                            removerReceitaListaCompras(receita.id);
                        })

                        receitaContainer.appendChild(div);
                    }

                });
            })
    }
}

function getIngredientes(ingredientes) {
    return ingredientes.map(ingrediente => `
        <div class="ingrediente-checkbox">
            <input class="favorita-info-item" type="checkbox" id="${ingrediente}">
            <label class="compra-checkbox-label" for="${ingrediente}">
                ${ingrediente}
            </label>
        </div>
    `).join('');
}

async function removerReceitaListaCompras(id) {
    const usuario = await getUser();

    if (usuario) {
        const index = usuario.listaCompras.indexOf(id);
        if (index !== -1) {
            usuario.listaCompras.splice(index, 1);
            await atualizarListaCompras(usuario, usuario.id);
            alert('Receita removida da lista de compras!');
        } else {
            alert('A receita não está na lista de compras do usuário.');
        }
    } else {
        alert('Sessão expirada! Faça login novamente.');
    }
}

async function atualizarListaCompras(usuario, userId) {
    await fetch(`http://localhost:3000/usuarios/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...usuario,
            listaCompras: usuario.listaCompras
        })
    });

}

loadListaCompras();