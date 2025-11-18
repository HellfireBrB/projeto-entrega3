// SPA.js
// Sistema básico de Single Page Application

// Templates das páginas
const templates = {
  '/': `
    <main>
      <h2>Sobre Nós</h2>
      <p>Somos uma organização focada em ajudar comunidades carentes através de projetos sociais, doações e ações de voluntariado.</p>
      <img src="images/criança.png" alt="criança">
      <h3>Contato</h3>
      <p>Email: contato@organizacao.com</p>
      <p>Telefone: (11) 99999-9999</p>
    </main>
    <footer>
      <p>Organização Solidária © 2025</p>
    </footer>
  `,
  '/projetos': `
    <main>
      <h2>Voluntariado</h2>
      <p>Participar como voluntário é uma forma de transformar vidas. Atuamos em diversas áreas, como educação, saúde e assistência social.</p>
      <img src="images/mao.png" alt="Voluntariado">
      <h2>Como Doar</h2>
      <p>Você pode contribuir com alimentos, roupas, livros ou ajuda financeira.</p>
      <img src="images/doacoes.png" alt="Doações">
    </main>
    <footer>
      <p>Organização Solidária © 2025</p>
    </footer>
  `,
  '/cadastro': `
    <main>
      <h2>Preencha o formulário</h2>
      <form id="cadastroForm">
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label for="nome">Nome Completo</label>
          <input type="text" id="nome" required>
          <span class="field-help"></span>
          <label for="email">E-mail</label>
          <input type="email" id="email" required>
          <span class="field-help"></span>
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" maxlength="14" required>
          <span class="field-help"></span>
          <label for="telefone">Telefone</label>
          <input type="text" id="telefone" maxlength="15" required>
          <span class="field-help"></span>
          <label for="nascimento">Data de Nascimento</label>
          <input type="date" id="nascimento" required>
          <span class="field-help"></span>
        </fieldset>
        <fieldset>
          <legend>Endereço</legend>
          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" required>
          <span class="field-help"></span>
          <label for="cep">CEP</label>
          <input type="text" id="cep" maxlength="9" required>
          <span class="field-help"></span>
          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" required>
          <span class="field-help"></span>
          <label for="estado">Estado</label>
          <select id="estado" required>
            <option value="">Selecione</option>
            <option>SP</option>
            <option>RJ</option>
            <option>MG</option>
            <option>RS</option>
            <option>PR</option>
            <option>SC</option>
            <option>BA</option>
          </select>
          <span class="field-help"></span>
        </fieldset>
        <button type="submit">Enviar Cadastro</button>
      </form>
    </main>
    <footer>
      <p>Organização Solidária © 2025</p>
    </footer>
  `
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const path = window.location.pathname;
  const template = templates[path] || templates['/'];
  document.querySelector('#app').innerHTML = template;
  // Reexecuta scripts de máscara e validação se for cadastro
  if (path === '/cadastro') {
    if (window.initCadastroForm) window.initCadastroForm();
  }
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.getAttribute('href'));
    }
  });
  router();
});