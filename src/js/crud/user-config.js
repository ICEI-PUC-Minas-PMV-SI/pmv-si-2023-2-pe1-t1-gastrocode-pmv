import getUser from "./getUser.js";

const nomeAtual = document.getElementsByName('nomeAtual')[0];
const novoNome = document.getElementsByName('novoNome')[0];
const confirmarNovoNome = document.getElementsByName('confirmarNovoNome')[0];
const submitNovoNome = document.getElementById('submitNovoNome');

const emailAtual = document.getElementsByName('emailAtual')[0];
const novoEmail = document.getElementsByName('novoEmail')[0];
const confirmarNovoEmail = document.getElementsByName('confirmarNovoEmail')[0];
const submitNovoEmail = document.getElementById('submitNovoEmail');

const senhaAtual = document.getElementsByName('senhaAtual')[0];
const novaSenha = document.getElementsByName('novaSenha')[0];
const confirmarNovaSenha = document.getElementsByName('confirmarNovaSenha')[0];
const submitNovaSenha = document.getElementById('submitNovaSenha');

submitNovoNome.addEventListener('click', alterarNome);
submitNovoEmail.addEventListener('click', alterarEmail);
submitNovaSenha.addEventListener('click', alterarSenha);

async function alterarNome() {
    const usuario = await getUser();

    if(usuario && usuario.nomeUsuario === nomeAtual.value && novoNome.value === confirmarNovoNome.value) {
        fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...usuario,
                nomeUsuario: novoNome.value
            })
        })
            .then(res => res.json())
            .then(() => alert('Nome alterado com sucesso!'))
    }
    else {
        alert('Nome inválido');
    }
}

async function alterarEmail() {
    const usuario = await getUser();


    if(usuario && usuario.emailUsuario === emailAtual.value && novoEmail.value === confirmarNovoEmail.value) {
        fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...usuario,
                emailUsuario: novoEmail.value
            })
        })
            .then(res => res.json())
            .then(() => alert('Email alterado com sucesso!'))
    }
    else {
        alert('Email inválido');
    }
}

async function alterarSenha() {
    const usuario = await getUser();

    if(usuario && usuario.senhaUsuario === senhaAtual.value && novaSenha.value === confirmarNovaSenha.value) {
        fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...usuario,
                senhaUsuario: novaSenha.value
            })
        })
            .then(res => res.json())
            .then(() => alert('Senha alterada com sucesso!'))
    }
    else {
        alert('Senha inválida');
    }
}

async function alterarImagemPerfil() {
    const usuario = await getUser();

    if (usuario) {
        const formData = new FormData();
        formData.append('imagemPerfil', imagemPerfil.files[0]);

        fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
            method: 'PATCH',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // Atualize a propriedade imagemPerfil do usuário com a resposta do servidor
                usuario.imagemPerfil = data.imagemPerfil;

                alert('Imagem de perfil alterada com sucesso!');
            })
            .catch(error => console.error('Erro ao alterar imagem de perfil:', error));
    } else {
        alert('Erro ao alterar imagem de perfil');
    }
}
