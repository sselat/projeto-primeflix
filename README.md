# Projeto Primeflix

Esse é um projeto pessoal/acadêmico de um site de streaming de vídeo construído com React. Ele utiliza a API https://api.themoviedb.org para verificar quais são os filmes em cartaz no momento.

## Funcionalidades
### Página principal

A página principal traz 12 dos filmes em cartaz, e ao passar o mouse em cada um dos filmes, você pode visualizar e clicar em um botão de Detalhes.

### Detalhes do filme

Ao clicar no botão de Detalhes, você é levado para uma página que mostra a nota do filme, bem como a sua sinopse e seu gênero. Nessa tela, você pode salvar o filme aos seus favoritos, ou visualizar o trailer, com um botão que faz a busca diretamente no Youtube.

### Favoritos

Os filmes salvos como favoritos são armazenados utilizando o LocalStorage e podem ser visualizados na aba "Favoritos", onde podem ser excluídos ou visualizados novamente.

### Notificações
Para notificações, essa aplicação utiliza o react-toastify.

## Tecnologias utilizadas
- React
- API: https://api.themoviedb.org
- LocalStorage
- react-toastify

## Como executar o projeto
1. Clone o repositório
2. Abra o terminal na pasta do projeto
3. Execute o comando npm install para instalar as dependências
4. Execute o comando npm start para iniciar a aplicação
5. Abra o navegador no endereço http://localhost:3000