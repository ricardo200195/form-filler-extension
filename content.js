// Importa o gerador de dados
let dataGenerator;

// Inicializa o gerador quando o script carrega
function initializeDataGenerator() {
  if (typeof DataGenerator !== 'undefined') {
    dataGenerator = new DataGenerator();
    return true;
  } else {
    // Se não estiver disponível, carrega dinamicamente
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('data-generator.js');
    script.onload = () => {
      dataGenerator = new DataGenerator();
    };
    document.head.appendChild(script);
    return false;
  }
}

// Tenta inicializar imediatamente
initializeDataGenerator();

class FormFiller {
  constructor() {
    this.dataGenerator = dataGenerator;
    this.mappings = this.createFieldMappings();
    this.isActive = false;
  }

  // Mapeia tipos de campos para dados específicos
  createFieldMappings() {
    return {
      // Campos de nome
      'name': 'nome',
      'nome': 'nome',
      'fullname': 'nome',
      'full_name': 'nome',
      'firstname': 'nome',
      'first_name': 'nome',
      'lastname': 'nome',
      'last_name': 'nome',
      'sobrenome': 'nome',

      // Campos de email
      'email': 'email',
      'e-mail': 'email',
      'mail': 'email',
      'correio': 'email',

      // Campos de telefone
      'phone': 'telefone',
      'telefone': 'telefone',
      'tel': 'telefone',
      'mobile': 'celular',
      'celular': 'celular',
      'cell': 'celular',

      // Campos de CPF
      'cpf': 'cpf',
      'document': 'cpf',
      'documento': 'cpf',
      'rg': 'cpf',

      // Campos de endereço
      'address': 'enderecoCompleto',
      'endereco': 'enderecoCompleto',
      'street': 'rua',
      'rua': 'rua',
      'bairro': 'bairro',
      'neighborhood': 'bairro',
      'city': 'cidade',
      'cidade': 'cidade',
      'state': 'estado',
      'estado': 'estado',
      'zip': 'cep',
      'cep': 'cep',
      'postal': 'cep',

      // Campos de data
      'birth': 'dataNascimento',
      'nascimento': 'dataNascimento',
      'birthdate': 'dataNascimento',
      'data_nascimento': 'dataNascimento',

      // Campos profissionais
      'company': 'empresa',
      'empresa': 'empresa',
      'job': 'cargo',
      'cargo': 'cargo',
      'position': 'cargo',
      'occupation': 'cargo'
    };
  }

  // Detecta o tipo de campo baseado no nome, id, placeholder, etc.
  detectFieldType(field) {
    const attributes = [
      field.name,
      field.id,
      field.placeholder,
      field.getAttribute('data-field'),
      field.getAttribute('aria-label'),
      field.title,
      field.getAttribute('data-name'),
      field.getAttribute('data-type')
    ].filter(Boolean);

    console.log('Analisando campo:', {
      name: field.name,
      id: field.id,
      placeholder: field.placeholder,
      type: field.type,
      attributes: attributes
    });

    for (const attr of attributes) {
      const lowerAttr = attr.toLowerCase();
      for (const [pattern, fieldType] of Object.entries(this.mappings)) {
        if (lowerAttr.includes(pattern)) {
          console.log(`Campo detectado como ${fieldType} por padrão: ${pattern}`);
          return fieldType;
        }
      }
    }

    // Detecção por tipo de input
    const inputType = field.type.toLowerCase();
    if (inputType === 'email') {
      console.log('Campo detectado como email por tipo');
      return 'email';
    }
    if (inputType === 'tel') {
      console.log('Campo detectado como telefone por tipo');
      return 'telefone';
    }
    if (inputType === 'date') {
      console.log('Campo detectado como data por tipo');
      return 'dataNascimento';
    }
    if (inputType === 'number' && field.name?.toLowerCase().includes('cpf')) {
      console.log('Campo detectado como CPF por tipo e nome');
      return 'cpf';
    }

    console.log('Tipo de campo não detectado');
    return null;
  }

  // Preenche um campo específico
  fillField(field, data) {
    const fieldType = this.detectFieldType(field);
    
    if (!fieldType || !data[fieldType]) return false;

    const value = data[fieldType];
    
    // Simula digitação humana
    this.simulateTyping(field, value);
    
    // Dispara eventos para ativar validações
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
    field.dispatchEvent(new Event('blur', { bubbles: true }));
    
    return true;
  }

  // Simula digitação humana
  simulateTyping(field, value) {
    field.focus();
    field.value = '';
    
    // Limpa o campo primeiro
    field.dispatchEvent(new Event('input', { bubbles: true }));
    
    // Simula digitação caractere por caractere
    let currentValue = '';
    const chars = value.split('');
    
    chars.forEach((char, index) => {
      setTimeout(() => {
        currentValue += char;
        field.value = currentValue;
        field.dispatchEvent(new Event('input', { bubbles: true }));
        
        // Se for o último caractere, dispara o evento change
        if (index === chars.length - 1) {
          field.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, index * 50); // 50ms entre cada caractere
    });
  }

  // Encontra todos os campos de formulário na página
  findFormFields() {
    const selectors = [
      'input[type="text"]',
      'input[type="email"]',
      'input[type="tel"]',
      'input[type="date"]',
      'input[type="number"]',
      'input:not([type])',
      'textarea',
      'select'
    ];

    const fields = [];
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Verifica se o elemento está visível e interativo
        if (element.offsetParent !== null && // Elemento visível
            !element.disabled && // Não está desabilitado
            !element.readOnly && // Não é somente leitura
            element.style.display !== 'none' && // Não está oculto
            element.style.visibility !== 'hidden' && // Não está invisível
            element.offsetWidth > 0 && // Tem largura
            element.offsetHeight > 0) { // Tem altura
          fields.push(element);
        }
      });
    });

    // Log detalhado para debug
    console.log('Seletores testados:', selectors);
    console.log('Total de campos encontrados:', fields.length);
    fields.forEach((field, index) => {
      console.log(`Campo ${index + 1}:`, {
        tag: field.tagName,
        type: field.type,
        name: field.name,
        id: field.id,
        placeholder: field.placeholder,
        visible: field.offsetParent !== null,
        disabled: field.disabled,
        readonly: field.readOnly
      });
    });

    return fields;
  }

  // Preenche todos os campos do formulário
  fillForm() {
    // Tenta inicializar o gerador se não estiver disponível
    if (!this.dataGenerator) {
      if (!initializeDataGenerator()) {
        console.error('Gerador de dados não está disponível');
        this.showNotification('Erro: Gerador de dados não disponível', 'error');
        return;
      }
      // Aguarda um pouco para o carregamento
      setTimeout(() => this.fillForm(), 100);
      return;
    }

    const fields = this.findFormFields();
    console.log('Campos encontrados:', fields.length, fields);
    
    if (fields.length === 0) {
      console.log('Nenhum campo de formulário encontrado');
      this.showNotification('Nenhum campo de formulário encontrado nesta página', 'error');
      return;
    }

    // Gera dados fictícios
    const data = this.dataGenerator.gerarPerfilCompleto();
    console.log('Dados gerados:', data);
    
    let filledCount = 0;
    
    fields.forEach(field => {
      if (this.fillField(field, data)) {
        filledCount++;
      }
    });

    console.log(`Preenchidos ${filledCount} campos com dados fictícios`);
    
    // Mostra notificação
    if (filledCount > 0) {
      this.showNotification(`Formulário preenchido com ${filledCount} campos!`);
    } else {
      this.showNotification('Nenhum campo foi preenchido. Verifique os nomes dos campos.', 'error');
    }
  }

  // Mostra notificação visual
  showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 10000;
      font-family: Arial, sans-serif;
      font-size: 14px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      animation: slideIn 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove após 3 segundos
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Adiciona estilos CSS para animações
  addStyles() {
    if (!document.getElementById('form-filler-styles')) {
      const style = document.createElement('style');
      style.id = 'form-filler-styles';
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Inicializa o preenchedor
  init() {
    this.addStyles();
    
    // Aguarda o carregamento do gerador de dados
    const checkGenerator = () => {
      if (this.dataGenerator) {
        this.isActive = true;
        console.log('Preenchedor de formulários ativado!');
      } else {
        setTimeout(checkGenerator, 100);
      }
    };
    
    checkGenerator();
  }
}

// Cria instância global
const formFiller = new FormFiller();

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => formFiller.init());
} else {
  formFiller.init();
}

// Listener para mensagens do popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fillForm') {
    formFiller.fillForm();
    sendResponse({ success: true });
  }
});

// Adiciona atalho de teclado (Ctrl+Shift+F)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'F') {
    e.preventDefault();
    formFiller.fillForm();
  }
});

// Expõe para uso via console
window.formFiller = formFiller;
