const loginUsuarioForm = document.getElementById('loginUsuarioForm');
loginUsuarioForm.addEventListener('submit', loginUsuario);


function loginUsuario(e) {
    e.preventDefault();

    const usuarioLogin = JSON.stringify({
        emailUsuario: document.getElementById('emailUsuario').value,
        senhaUsuario: document.getElementById('senhaUsuario').value
    })


    fetch('http://localhost:3000/usuarios')
        .then((response) => response.json())
        .then((usuarios) => {
            const usuarioAutenticado = usuarios.find(
                (usuarioDb) =>
                    usuarioDb.emailUsuario === document.getElementById('emailUsuario').value &&
                    usuarioDb.senhaUsuario === document.getElementById('senhaUsuario').value
            )
            if (usuarioAutenticado) {
                window.location.href = 'src/pages/principal.html';
            } else {
                alert('Usuário ou senha inválidos!');
            }
        })
}
