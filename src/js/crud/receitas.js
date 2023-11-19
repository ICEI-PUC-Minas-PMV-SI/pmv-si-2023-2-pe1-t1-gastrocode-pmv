const cadastroReceitasForm = document.getElementById('cadastroReceitasForm');
cadastroReceitasForm.addEventListener('submit', cadastrarReceita);

function cadastrarReceita(e) {
    e.preventDefault();

    const novaReceita = JSON.stringify({
        idReceita: document.getElementById('idReceita').value,
        nomeReceita: document.getElementById('nomeReceita').value,
        imagemReceita: document.getElementById('imagemReceita').value,
        ingredientesReceita: document.getElementById('ingredientesReceita').value,
        modoPreparoReceita: document.getElementById('modoPreparoReceita').value,
        custoReceit: document.getElementById('custoReceit').value
    })

        fetch('http://localhost:3000/receitas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaReceita)
        })
        .then(response => {
            if (response.ok) {
                alert('Receita cadastrada com sucesso!');
       
            } else {
                alert('Ocorreu um erro ao cadastrar a receita.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao cadastrar a receita.');
        });
    }