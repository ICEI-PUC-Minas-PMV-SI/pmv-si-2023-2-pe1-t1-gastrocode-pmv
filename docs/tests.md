# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, email, senha, confirmação de senha, clica no botão "Continuar".<br> 2) A aplicação verifica se os dados dos campos de senha coincidem e informa ao usuário.
**Requisitos associados** | RF-001
**Resultado esperado** | Cadastro efetuado com sucesso ou mensagem de erro para campos inválidos.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Consultar receitas cadastradas**
 :--------------: | ------------
**Procedimento**  | Na aba "Menu de Receitas", o usuário informa no campo de pesquisa o nome de uma receita que está buscando.
**Requisitos associados** | RF-002
**Resultado esperado** | Retorno filtrado das receitas que possuem um nome que coincida com o texto informado pelo usuário no campo de pesquisa.
**Dados de entrada** | Inserção de um nome de uma recita cadastrada no site.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Adicionar receitas favoritas**
 :--------------: | ------------
**Procedimento**  | Na aba "Menu de Receitas", o usuário, ao clicar no botão '+' de um card de receita e acessar a visualização expandida da receita, clica no botão 'Adicionar às Receitas Favoritas'.
**Requisitos associados** | RF-003
**Resultado esperado** | Mensagem de sucesso acerca da correta adição da receita ao menu de receitas favoritas.
**Dados de entrada** | Correta realização do procedimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Consultar receitas favoritas**
 :--------------: | ------------
**Procedimento**  | "Na aba "Meu Livro de Receitas", o usuário verifica se as receitas previamente adicionadas como favoritas estão corretamente listadas.
**Requisitos associados** | RF-003
**Resultado esperado** | Listagem correta de todas as receitas adicionadas como favoritas.
**Dados de entrada** | Correta realização do procedimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Consultar informações de preparo da receita**
 :--------------: | ------------
**Procedimento**  | Na aba "Meu Livro de Receitas", o usuário, ao clicar no botão '+' de um card de receita e acessar a visualização expandida da receita, verifica as informações de preparo da receita
**Requisitos associados** | RF-004
**Resultado esperado** | Listagem correta de ingredientes e forma de preparo da receita
**Dados de entrada** | Correta realização do procedimento
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Consultar informações de custo**
 :--------------: | ------------
**Procedimento**  | Na aba "Meu Livro de Receitas", o usuário, ao clicar no botão '+' de um card de receita e acessar a visualização expandida da receita, verifica as informações de custo da receita.
**Requisitos associados** | RF-005
**Resultado esperado** | Apresentação de um indicativo de custo da receita, podendo ser "$ - Baixo", "$$ - Médio", "$$$ - Alto".
**Dados de entrada** | Correta realização do procedimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Adicionar receita a lista de compra**
 :--------------: | ------------
**Procedimento**  | Na aba "Meu Livro de Receitas", o usuário, ao clicar no botão '+' de um card de receita e acessar a visualização expandida da receita, clica no botão 'Add. Lista de Compras'.
**Requisitos associados** | RF-006
**Resultado esperado** | Mensagem de sucesso acerca da correta adição da receita ao menu de lista de compras.
**Dados de entrada** | Correta realização do procedimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Consultar Lista de Compras**
 :--------------: | ------------
**Procedimento**  | Na aba "Meu Livro de Receitas", o usuário, ao clicar no botão '+' de um card de receita e acessar a visualização expandida da receita, clica no botão 'Add. Lista de Compras'.
**Requisitos associados** | RF-006
**Resultado esperado** | Listagem correta de todas as receitas adicionadas na lista de compras.
**Dados de entrada** | Correta realização do procedimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Responsividade para mobile**
 :--------------: | ------------
**Procedimento**  | Ao diminuir o tamanho da tela, os elementos da aplicação devem ser redimensionados, adaptando-se às novas dimensões.
**Requisitos associados** | RNF-001
**Resultado esperado** | Correta adaptação dos elementos.
**Dados de entrada** | Diminuição das dimensões da tela.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Suporte a dúvidas**
 :--------------: | ------------
**Procedimento**  | O usuário deve acessar a aba "Ajuda" para sanar as dúvidas relacionadas a utilização da aplicação.
**Requisitos associados** | RNF-003
**Resultado esperado** | Correta listagem de dúvidas comuns sobre a aplicação.
**Dados de entrada** | Correta realização do procedimento.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=6Ls1Lt8k10Y 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login*                                         |
|---|---|
|Requisito Associado | RF-001|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=3shN87vBg1Q

|*Caso de Teste*                                 |*TC-03 - Consultar receitas cadastradas*                                         |
|---|---|
|Requisito Associado | RF-002|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=Jinx6tVFLTQ

|*Caso de Teste*                                 |*TC-04 - Adicionar e Consultar receitas favoritas*                                         |
|---|---|
|Requisito Associado | RF-003|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=2GR_GaSN510

|*Caso de Teste*                                 |*TC-05 - Consultar Informações de preparo e custo da receita*                                         |
|---|---|
|Requisito Associado | RF-004 e RF-005|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=glRS1xKGa4Q

|*Caso de Teste*                                 |*TC-06 - Adicionar e Consultar lista de compras*                                         |
|---|---|
|Requisito Associado | RF-006|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=NTlcys3Ka0c

|*Caso de Teste*                                 |*TC-07 - Responsividade para mobile*                                         |
|---|---|
|Requisito Associado | RNF-001|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=bKsRKFAfuyo

|*Caso de Teste*                                 |*TC-08 - Suporte para esclarecimento de dúvidas*                                         |
|---|---|
|Requisito Associado | RNF-003|
|Link do vídeo do teste realizado: | https://www.youtube.com/watch?v=84LpIzk5jx8


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas três pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, com exceção do nome após prévia aprovação, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja encontrar uma receita que utilize um ingrediente específico, por exemplo: "frango". Encontre essa receita na aplicação . |
| 2             | Você é uma pessoa que deseja adicionar uma receita que gostou da lista de favoritas. Vá até a receita desejada e adicione a mesma para o seu livro de receitas.   |
| 3             | Você é uma pessoa que deseja encontrar a lista dos itens necessários para o preparo das receitas. Verifique as informações da receita para encontrar os ingredientes necessários.   |
| 4             | Você é uma pessoa que deseja encontrar receitas de baixo custo. Vá até uma receita que agrade e verifique a informação de custo.   |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja encontrar uma receita que utilize um ingrediente específico, por exemplo: "frango". Encontre essa receita na aplicação.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Luis       | SIM             | 5                    | 17.34 segundos                  |
| Nycolle       | SIM             | 5                    |19.43 segundos                  |
| Samuel       | SIM             | 5                    | 18.26 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 18.34 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 12.42 segundos |


    Comentários dos usuários: 
    
    - "A busca foi fácil de fazer já que o campo de pesquisa fica no meio da tela."
    - "Por causa do campo de pesquisa fica fácil encontrar a receita"
    - "O campo de pesquisa centralizado na tela ajudou muito na hora de procurar pelo nome."

Cenário 2:  Você é uma pessoa que deseja adicionar uma receita que gostou da lista de favoritas. Vá até a receita desejada e adicione a mesma para o seu livro de receitas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Luis       | SIM             | 5                    | 9.19 segundos                          |
| Nycolle       | SIM             | 5                    | 9.41  segundos                          |
| Samuel       | SIM             | 5                    | 8.51 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 9.03 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 5.35 segundos |


    Comentários dos usuários:
    
    - "Foi fácil favoritar a receita, o botão com coração vermelho fica bem destacado."
    - "É bem simples adicionar a receita as favoritas já que o botão fica bem destacado."
    - "Achei tranquilo adicionar como favorito, todo o caminho foi bem intuitivo."

Cenário 3:  Você é uma pessoa que deseja encontrar a lista dos itens necessários para o preparo das receitas. Verifique as informações da receita para encontrar os ingredientes necessários.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Luis       | SIM             | 5                    | 3.81 segundos                          |
| Nycolle       | SIM             | 5                    | 3.18 9segundos                          |
| Samuel       | SIM             | 5                    | 3.55 8segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 3.51 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 2.71 segundos |


    Comentários dos usuários:
    
    - "Muito fácil encontrar os ingredientes, é a primeira coisa que aparece na tela da receita."
    - "Foi fácil achar a lista dos ingredientes, quando expande a receita eles já aparecem de primeira"
    - "Muito tranquilo achar os ingredientes da receita."

Cenário 4: Você é uma pessoa que deseja encontrar receitas de baixo custo. Vá até uma receita que agrade e verifique a informação de custo.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| Luis       | SIM             | 5                    | 4.57 segundos                          |
| Nycolle       | SIM             | 5                    | 4.93 9segundos                          |
| Samuel       | SIM             | 5                    | 4.49 8segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 4.66 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 3.16 segundos |


    Comentários dos usuários:
    
    - "O custo também foi fácil de achar, o ícone do dinheiro deixa fácil de identificar."
    - "O símbolo do dolár deixou mais fácil achar o custo da receita."
    - "Foi fácil encontrar o custo, fica bem separado lá em baixo e o cifrão chama mais fácil a atenção."




## Avaliação dos Testes de Usabilidade

Pelos comentários dos usuários que testaram e dos registros de tempo avaliamos um resultado bem positivo da usabilidade da aplicação. 

Ao serem destacados pontos referentes as escolhas de design, gera uma segurança de que a aplicação é intuitiva até mesmo para usuários iniciantes.

A pequena diferença de tempo entre o usuário especialista e os usuários do teste trazem segurança sobre a facilidade de aprendizagem de uso da aplicação.

Para finalizar, a aplicação conseguiu nota máxima na avaliação de satisfação e na taxa de sucesso, demonstrando ser divertida de usar e acima de tudo bem prática.



