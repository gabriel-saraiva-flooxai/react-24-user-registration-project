## 📝 Sistema de Cadastro de Usuários com React

<div align="center"> <h3>✨ Telas Principais do Projeto ✨</h3> <div style="display: flex; justify-content: space-between; margin: 20px 0;"> <div style="flex: 1; margin: 0 10px;"> <a href="frontend\src\assets\images\inicio.png" target="_blank"> <img src="frontend\src\assets\images\inicio.png" alt="Tela Inicial" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"> </a> <p align="center"><em>Tela de Boas-Vindas</em></p> </div>
<div style="flex: 1; margin: 0 10px;">
  <a href="frontend\src\assets\images\usuarios.png" target="_blank">
    <img src="frontend\src\assets\images\usuarios.png" alt="Tela de Usuários" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </a>
  <p align="center"><em>CRUD de Usuários (Funcionalidade Principal)</em></p>
</div>
</div> </div>

## 🚀 Funcionalidades

- **Cadastro de usuários** com nome e e-mail
- **Listagem completa** dos usuários cadastrados
- **Edição** de registros existentes
- **Exclusão** de usuários
- **Interface intuitiva** com formulário e tabela
- **Integração com API REST** (JSON Server)

## 🛠️ Tecnologias Utilizadas

| Tecnologias | Descrição |
|------------|-----------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Biblioteca JavaScript para interfaces |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) | Navegação entre telas |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) | Framework de estilização |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge) | Cliente HTTP para APIs |

## 📦 Estrutura do Projeto

```
react-user-crud/
├── public/
├── src/
│   ├── components/
│   │   ├── template/
│   │   │   ├── Footer.jsx
│   │   │   ├── Logo.jsx
│   │   │   └── Nav.jsx
│   │   ├── home/
│   │   │   └── Home.jsx
│   │   └── user/
│   │       └── UserCrud.jsx
│   ├── App.jsx
│   ├── Routes.jsx
│   └── index.js
├── package.json
└── README.md
```

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/gabriel-saraiva-flooxai/react-24-user-registration-project.git
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o JSON Server (backend simulado):
```bash
npm run server
# Executa na porta 3001
```

4. Em outro terminal, inicie o aplicativo React:
```bash
npm start
# Executa na porta 3000
```

## 🎯 Rotas Disponíveis

- `/` - Página inicial
- `/users` - CRUD de usuários

## 💡 Melhorias Futuras

- [ ] Adicionar validação de formulário
- [ ] Implementar paginação na tabela
- [ ] Adicionar busca/filtro de usuários
- [ ] Melhorar tratamento de erros
- [ ] Adicionar testes unitários

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✉️ Contato

Gabriel Saraiva - [gabriel.saraiva.flooxai@gmail.com](mailto:seu-email@exemplo.com)

---

**Dica:** Para visualizar o projeto em funcionamento, acesse [http://localhost:3000](http://localhost:3000) após iniciar os servidores.