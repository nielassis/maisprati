# Mini Loja – Estilização em React

**React Vite JavaScript CSS Global / CSS Modules / Tailwind CSS / Styled Components**

Este projeto é uma aplicação React que simula uma **mini loja**, com diferentes abordagens de estilização para os componentes. Cada página/versão utiliza uma técnica específica de CSS conforme solicitado na atividade.

---

## 🌟 Funcionalidades

- **Navbar fixa:** logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.
- **Grid de produtos responsivo:**
  - ≤480px: 1 coluna
  - 481–768px: 2 colunas
  - 769–1024px: 3 colunas
  - ≥1025px: 4 colunas
- **Card de produto:** imagem 1:1 com placeholder, título truncado em 2 linhas, preço, rating (★), tag (“Novo”/“Promo”), botão “Adicionar” com variantes solid/outline/ghost.
- **Interações e estados:** hover, focus visível, disabled, loading com skeleton.
- **Acessibilidade:** navegação por teclado, `aria-*` onde aplicável, contraste ≥4.5:1.
- **Animações suaves:** transições de 150–250ms usando transform e opacity.
- **Exibição de mais de 6 produtos (5 por categoria - 3 categorias)** com lazy loading das imagens.

---

## 🗂️ Estrutura do Projeto

Cada técnica de estilização tem pastas e rotas correspondentes:

- `/` – Página **Home** utilizando **Tailwind CSS**.
- `/product/:id` – Página **Product Details** utilizando **CSS Modules**.
- `/favorites` – Página **Favorites** utilizando **CSS Global**.
- `/checkout` – Página **Checkout** utilizando **Styled Components**.

Cada pasta contém os componentes principais: `Navbar`, `ProductCard`, `Button`, `Skeleton`, etc., e arquivos de estilo correspondentes à técnica escolhida.

---

```bash
git clone https://github.com/nielassis/miniloja-react.git
cd miniloja-react
npm install
npm run dev
```

Abra no navegador:

```
http://localhost:5173
```

---

## ⚙️ Tecnologias Utilizadas

- ReactJS (Vite)
- JavaScript
- CSS Global / CSS Modules / Tailwind CSS / Styled Components
- API DummyJSON
- Skeletons e animações com CSS
- Responsividade com breakpoints específicos

---

## 📝 Observações

- Cada versão respeita apenas a técnica de estilização indicada.
- Todos os componentes foram desenvolvidos com atenção a acessibilidade e UX.
- Skeletons não causam layout shift.
- Variantes do botão consistentes entre light/dark mode.

---
