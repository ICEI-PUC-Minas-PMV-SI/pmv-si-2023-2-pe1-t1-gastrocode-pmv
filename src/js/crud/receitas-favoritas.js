

// const db = require('./db.json');

// function adicionarReceitaFavorita(usuarioID, receitaID) {
//     fetch('http://localhost:3000/favoritas')
//         .then(response => response.json())
//         .then(receitas => {
//   const usuario = db.usuarios.find(user => user.id === usuarioID);
//   if (usuarioid) {
//     if (!usuario.receitasFavoritas.includes(receitaID)) {
//       usuario.receitasFavoritas.push(receitaID);console.log('Receita adicionada aos favoritos!');
//     } else {
//       console.log('A receita já está nos favoritos do usuário.');
//     }
//   } else {
//     console.log('Usuário não encontrado.');
//   }
// })
// .catch(error => {
//   console.error('Erro:', error);
// });
// }

// adicionarReceitaFavorita(1, 2);