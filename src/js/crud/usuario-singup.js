const cadastroUsuarioForm = document.getElementById('cadastroUsuarioForm');
cadastroUsuarioForm.addEventListener('submit', cadastrarUsuario);

function cadastrarUsuario(e) {
    e.preventDefault();
    const usuario = JSON.stringify({
        nomeUsuario: document.getElementById('nomeUsuario').value,
        emailUsuario: document.getElementById('emailUsuario').value,
        senhaUsuario: document.getElementById('senhaUsuario').value,
    })

    console.log(usuario);
    if (document.getElementById('senhaUsuario').value === document.getElementById('senhaUsuarioConfirmed').value) {
        ''
        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: usuario
        })
            .then(res => res.json())
            .then(() => alert('Usuário cadastrado com sucesso!'))
    }
    else {
        alert('As senhas devem ser iguais');
        return;
    }
}
