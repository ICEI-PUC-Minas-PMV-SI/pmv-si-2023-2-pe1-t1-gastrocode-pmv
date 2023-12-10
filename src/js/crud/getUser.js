async function getUser() {
    const userId = getCookie('userId');
    const usuariosResponse = await fetch('https://gastrocode-jsonserver.vercel.app/usuarios');
    const usuarios = await usuariosResponse.json();
    const usuario = findUserById(usuarios, userId); // Renomeei a função para evitar conflitos
    return usuario;
}

function findUserById(usuarios, userId) {
    return usuarios.find(usuario => usuario.id === Number(userId));
}

function getCookie(cookieName) {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

export default getUser;