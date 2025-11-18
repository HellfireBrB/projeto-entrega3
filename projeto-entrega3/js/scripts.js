
// Função para inicializar máscaras e validação (usada no SPA)
window.initCadastroForm = function() {
  // Máscara CPF
  const cpf = document.getElementById("cpf");
  if (cpf) {
    cpf.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      this.value = value;
    });
  }

  // Máscara Telefone
  const telefone = document.getElementById("telefone");
  if (telefone) {
    telefone.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
      this.value = value;
    });
  }

  // Máscara CEP
  const cep = document.getElementById("cep");
  if (cep) {
    cep.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
      this.value = value;
    });
  }

  // Validação de Formulários
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required]');
      inputs.forEach((input) => {
        const error = input.nextElementSibling;
        if (!input.checkValidity()) {
          isValid = false;
          input.classList.add('invalid');
          if (error && error.classList.contains('field-help')) error.textContent = input.validationMessage;
        } else {
          input.classList.remove('invalid');
          if (error && error.classList.contains('field-help')) error.textContent = '';
        }
      });
      if (isValid) {
        alert('Formulário enviado com sucesso!');
        form.reset();
      }
    });
  }
};

// Inicialização automática para caso não seja SPA
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('cpf') && window.initCadastroForm) {
    window.initCadastroForm();
  }
});
