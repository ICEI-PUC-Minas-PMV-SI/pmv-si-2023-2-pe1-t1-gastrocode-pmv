import getUser from "./getUser.js";

const body = document.querySelector('body');
const pesquisaInput = document.getElementById('pesquisaInput');
const pesquisaButton = document.getElementById('pesquisaButton');

pesquisaButton.addEventListener('click', loadReceitas)


function loadReceitas() {
    const nomePesquisado = pesquisaInput.value.toLowerCase().trim();

    fetch('http://localhost:3000/receitas')
        .then(response => response.json())
        .then(receitas => {
            const receitasFiltradas = receitas.filter(receita =>
                receita.nomeReceita.toLowerCase().includes(nomePesquisado)
            );

            const receitasHTML = receitasFiltradas.map(receita => {
                return `
                    <div class="receita-item-container">
                        <img class="receita-item-imagem" src="${receita.imagemReceita}">
                        <div class="receita-nome-container">
                            <p class="receita-item-nome">${receita.nomeReceita}</p>
                            <button class="receita-item-button" type="button">
                                +
                            </button>
                        </div>
                    </div>
                `;
            });

            const receitasContainer = document.getElementById('receitaContainer');
            receitasContainer.innerHTML = receitasHTML.join('');

            const buttons = document.querySelectorAll('.receita-item-button');
            buttons.forEach((button, index) => {
                button.addEventListener('click', () => openReceitaCard(receitasFiltradas[index]));
            });
        });
}

function openReceitaCard(receita) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal">
                
                <div class="modal-header-container">

                    <h1 class="modal-title">${receita.nomeReceita}</h1>
                    <svg
                        class="modal-close-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                    </svg>

                </div>

                <div class="modal-receita-container">
                    <img class="modal-receita-img" src=${receita.imagemReceita}>
                    <div class="modal-receita-info">
                        <span class="modal-receita-text"><strong>Ingredientes: </strong> ${receita.ingredientesReceita.join(", ")}</span>
                        <span class="modal-receita-text"><strong>Modo de Preparo: </strong> ${receita.modoPreparoReceita}</span>
                        <span class="modal-receita-text"><strong>Tempo de Preparo: </strong> ${receita.tempoDePreparo}</span>
                        <span class="modal-receita-text"><strong>Custo: </strong> ${getReceitaCusto(receita.custoReceita)}</span>
                    </div>
                </div>

                <div class="button-add-container">
                    <div class="add-item">
                        <svg
                            class="modal-add-svg heart-svg" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                        </svg>
                        <span id="receitasFavoritasButton" class="button-add-text">Add. Receitas Favoritas</span>
                    </div>

                    <div class="add-item">
                        <svg 
                            class="modal-add-svg"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 576 512"
                        >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                        </svg>
                        <span id="listaComprasButton" class="button-add-text">Add. Lista de Compras</span>
                    </div>
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

    const receitasFavoritasButton = modal.querySelector('#receitasFavoritasButton');
    receitasFavoritasButton.addEventListener('click', () => {
        adicionarReceitaFavorita(receita.id);
    })

    const listaComprasButton = modal.querySelector('#listaComprasButton');
    listaComprasButton.addEventListener('click', () => {
        adicionarListaCompras(receita.id);
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

async function adicionarReceitaFavorita(id) {
    const usuario = await getUser();

    if (usuario) {
        if (!usuario.receitasFavoritas.includes(id)) {
            usuario.receitasFavoritas.push(id);
            await atualizarReceitasFavoritas(usuario, usuario.id);
            alert('Receita adicionada aos favoritos!');
        } else {
            alert('A receita já está nos favoritos do usuário.');
        }
    } else {
        alert('Sessão expirada! Faça login novamente.');
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

loadReceitas();