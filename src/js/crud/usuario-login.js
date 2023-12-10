const loginUsuarioForm = document.getElementById('loginUsuarioForm');
loginUsuarioForm.addEventListener('submit', loginUsuario);


function loginUsuario(e) {
    e.preventDefault();

    const usuarioLogin = JSON.stringify({
        emailUsuario: document.getElementById('emailUsuario').value,
        senhaUsuario: document.getElementById('senhaUsuario').value
    })


    fetch('https://gastrocode-jsonserver.vercel.app/usuarios')
        .then((response) => response.json())
        .then((usuarios) => {
            const usuarioAutenticado = usuarios.find(
                (usuarioDb) =>
                    usuarioDb.emailUsuario === document.getElementById('emailUsuario').value &&
                    usuarioDb.senhaUsuario === document.getElementById('senhaUsuario').value
            )
            if (usuarioAutenticado) {
                document.cookie = `userId=${usuarioAutenticado.id}; path=/`;
                window.location.href = 'src/pages/principal.html';
            } else {
                alert('Usuário ou senha inválidos!');
            }
        })
}
