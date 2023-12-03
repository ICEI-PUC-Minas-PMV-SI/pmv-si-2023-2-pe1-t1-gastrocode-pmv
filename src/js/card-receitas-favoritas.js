import getUser from "./crud/getUser.js";

const receitaContainer = document.getElementById('receitaContainer');

async function loadReceitasFavoritas() {

    const usuario = await getUser();

    if (usuario) {
        fetch('http://localhost:3000/receitas')
            .then(response => response.json())
            .then(receitas => {
                receitas.map((receita) => {
                    if (usuario.receitasFavoritas.includes(receita.id)) {

                        const div = document.createElement('div');
                        div.classList.add('receita-favorita-container');

                        div.innerHTML = `
                        <img class="receita-item-imagem" src=${receita.imagemReceita}>
                
                        <div class="receita-info-container">
                            <p class="favorita-info-item favorita-receita-title"> <strong>Nome da Receita: </strong>${receita.nomeReceita}</p>
                            <p class="favorita-info-item"> <strong>Ingredientes: </strong>${receita.ingredientesReceita}</p>
                            <p class="favorita-info-item"> <strong>Modo de Preparo: </strong>${receita.modoPreparoReceita}</p>
                            <p class="favorita-info-item"> <strong>Custo: </strong>${getReceitaCusto(receita.custoReceita)}</p>
                            
                            <div class="favorita-button-container">

                                <span id="favoritaListaComprasButton" class="favorita-span">
                                    Add. Lista de Compras
                                    <svg 
                                        class="modal-add-svg"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 576 512"
                                    >
                                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                    </svg>
                                </span>

                                <span id="favoritaRemoveButton" class="favorita-span">
                                    Remover
                                    <svg
                                        class="favorita-remove-button"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/> 
                                    </svg>
                                </span>
                            </div> 
                        </div>    
                    `;

                        const favoritaListaComprasButton = div.querySelector('#favoritaListaComprasButton');
                        favoritaListaComprasButton.addEventListener('click', () => {
                            adicionarListaCompras(receita.id);
                        })

                        const favoritaRemoveButton = div.querySelector('#favoritaRemoveButton');
                        favoritaRemoveButton.addEventListener('click', () => {
                            removerReceitaFavorita(receita.id);
                        })

                        receitaContainer.appendChild(div);
                    }

                });
            })
    }
}

async function adicionarListaCompras(id) {
    const usuario = await getUser();

    if (usuario) {
        if (!usuario.listaCompras.includes(id)) {
            usuario.listaCompras.push(id);
            await atualizarListaCompras(usuario, usuario.id);
            alert('Receita adicionada à lista de compras!');
        } else {
            alert('A receita já está na lista de compras do usuário.');
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

async function removerReceitaFavorita(id) {
    const usuario = await getUser();

    if (usuario) {
        const index = usuario.receitasFavoritas.indexOf(id);
        if (index !== -1) {
            usuario.receitasFavoritas.splice(index, 1);
            await atualizarReceitasFavoritas(usuario, usuario.id);
            alert('Receita removida dos favoritos!');
        } else {
            alert('A receita não está na lista de favoritos do usuário.');
        }
    } else {
        alert('Sessão expirada! Faça login novamente.');
    }
}

async function atualizarReceitasFavoritas(usuario, userId) {
    await fetch(`http://localhost:3000/usuarios/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...usuario,
            receitasFavoritas: usuario.receitasFavoritas
        })
    });

    loadReceitasFavoritas();
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

loadReceitasFavoritas();