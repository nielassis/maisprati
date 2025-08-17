# 🎬 MovieSearch – Consumo de APIs de Filmes com ReactJS

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-4.4.9-purple?logo=vite.js" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS-blue?logo=css" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Node.js-20.3-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel" alt="Vercel">
</p>

Este projeto é uma aplicação ReactJS para **buscar informações de filmes e séries** utilizando APIs externas.

> ⚠️ Este projeto **não hospeda, distribui ou indexa vídeos**. Ele apenas consome APIs para exibir informações públicas.

> 🚩 A aplicação está disponivél apenas em língua inglêsa.

---

## 🌟 Funcionalidades

- Buscar filmes por nome usando a **OMDb API**
- Consultar disponibilidade de streaming com a **Streaming Availability API**
- Integrar dados adicionais da **Superflix API**
- Exibir título, ano, gênero, nota, descrição e plataformas de streaming
- Interface interativa com ReactJS e hooks

---

## 🌐 Deploy

A aplicação está disponível online em: [moviesearch-mpt.vercel.app](https://moviesearch-mpt.vercel.app)

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_OMDB_API_KEY="SUA_CHAVE_OMDB"
VITE_STREAMING_AVAILABILITY_KEY="SUA_CHAVE_STREAMING"
```

> Essas chaves são obrigatórias para autenticar as requisições.

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/nielassis/maisprati.git
```

2. Navegue até a pasta da atividade:

```bash
cd "Modulo 3 - Desenvolvimento WEB com React/Atividade 5 - Consumo de API com ReactJS"
```

3. Instale as dependências:

```bash
npm install
```

4. Adicione suas variáveis de ambiente e inicie a aplicação:

```bash
npm run dev
```

5. Abra no navegador:

```
http://localhost:5173
```

---

## 📚 APIs Utilizadas

- [OMDb API](http://www.omdbapi.com/) – Informações de filmes e séries
- [Streaming Availability API](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability) – Plataformas de streaming
- [Superflix API](https://www.superflixapi.digital/doc) – Dados adicionais de filmes e séries

---

## 📝 Observações

- Nenhum vídeo é hospedado ou indexado pelo site
- Todos os dados vêm de APIs públicas
- Variáveis de ambiente são obrigatórias

---

## 🔗 Links Úteis

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vercel](https://vercel.com/)
