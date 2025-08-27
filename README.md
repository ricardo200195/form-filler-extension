# 🚀 Preenchedor de Formulários - Extensão Chrome

Uma extensão para Chrome que preenche automaticamente formulários com dados fictícios realistas brasileiros.

## ✨ Características

- **Dados Realistas**: Nomes, CPFs, endereços e telefones brasileiros válidos
- **Detecção Inteligente**: Reconhece automaticamente tipos de campos
- **Preenchimento Rápido**: Um clique ou atalho de teclado
- **Seguro**: Dados gerados localmente, sem envio para servidores
- **Interface Amigável**: Popup intuitivo e notificações visuais

## 📦 Instalação

### Método 1: Instalação Manual (Recomendado)

1. **Baixe os arquivos**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd form-filler-extension
   ```

2. **Abra o Chrome** e vá para `chrome://extensions/`

3. **Ative o "Modo desenvolvedor"** (canto superior direito)

4. **Clique em "Carregar sem compactação"**

5. **Selecione a pasta** `form-filler-extension`

6. **A extensão será instalada** e aparecerá na barra de ferramentas

### Método 2: Instalação via Chrome Web Store (Futuro)

*Em breve disponível na Chrome Web Store*

## 🎯 Como Usar

### Uso Básico

1. **Navegue** até qualquer página com formulários
2. **Clique** no ícone da extensão na barra de ferramentas
3. **Clique** em "Preencher Formulário"
4. **Pronto!** Todos os campos serão preenchidos automaticamente

### Atalho de Teclado

- **Windows/Linux**: `Ctrl + Shift + F`
- **Mac**: `Cmd + Shift + F`

### Uso via Console

Abra o console do navegador (F12) e digite:
```javascript
formFiller.fillForm()
```

## 🔧 Tipos de Campos Suportados

A extensão detecta automaticamente e preenche:

### Informações Pessoais
- **Nome**: `name`, `nome`, `fullname`, `firstname`, `lastname`
- **Email**: `email`, `e-mail`, `mail`
- **Telefone**: `phone`, `telefone`, `tel`
- **Celular**: `mobile`, `celular`, `cell`
- **CPF**: `cpf`, `document`, `documento`, `rg`

### Endereço
- **Endereço Completo**: `address`, `endereco`
- **Rua**: `street`, `rua`
- **Bairro**: `bairro`, `neighborhood`
- **Cidade**: `city`, `cidade`
- **Estado**: `state`, `estado`
- **CEP**: `zip`, `cep`, `postal`

### Outros
- **Data de Nascimento**: `birth`, `nascimento`, `birthdate`
- **Empresa**: `company`, `empresa`
- **Cargo**: `job`, `cargo`, `position`, `occupation`

## 📊 Dados Gerados

### Exemplo de Perfil Completo

```javascript
{
  nome: "João Silva Santos",
  email: "joao.silva@email.com",
  telefone: "(11) 3456-7890",
  celular: "(11) 98765-4321",
  cpf: "123.456.789-00",
  dataNascimento: "1985-03-15",
  endereco: {
    rua: "Rua das Flores, 123",
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567"
  },
  profissional: {
    empresa: "Tech Solutions Ltda",
    cargo: "Desenvolvedor Full Stack",
    salario: "R$ 8.500,00",
    tempoEmpresa: "3 anos"
  }
}
```

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
form-filler-extension/
├── manifest.json          # Configuração da extensão
├── data-generator.js      # Gerador de dados fictícios
├── content.js            # Script principal (injetado nas páginas)
├── popup.html            # Interface do popup
├── popup.js              # Lógica do popup
├── background.js         # Script de background
├── welcome.html          # Página de boas-vindas
└── README.md             # Este arquivo
```

### Personalização

Para adicionar novos tipos de dados:

1. **Edite** `data-generator.js` para adicionar novos arrays de dados
2. **Atualize** `content.js` para mapear novos campos
3. **Recarregue** a extensão em `chrome://extensions/`

### Exemplo: Adicionar Novos Nomes

```javascript
// Em data-generator.js
this.nomes.masculinos.push('Novo Nome');
this.nomes.femininos.push('Nova Nome');
```

## 🔒 Segurança e Privacidade

- ✅ **Dados Locais**: Tudo é gerado no seu navegador
- ✅ **Sem Servidores**: Nenhum dado é enviado para servidores externos
- ✅ **CPFs Válidos**: Algoritmo correto de validação de CPF
- ✅ **Dados Fictícios**: Todos os dados são claramente fictícios

## 🐛 Solução de Problemas

### A extensão não funciona em algumas páginas

Algumas páginas (como `chrome://`, `chrome-extension://`) não permitem injeção de scripts por segurança.

### Campos não são detectados

Verifique se os campos têm:
- `name` ou `id` com palavras-chave reconhecidas
- `type` correto (`text`, `email`, `tel`, etc.)
- Não estão `disabled` ou `readonly`

### Atalho de teclado não funciona

1. Vá para `chrome://extensions/shortcuts`
2. Configure o atalho para a extensão
3. Ou use o popup clicando no ícone

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Suporte

Se encontrar problemas ou tiver sugestões:

1. Abra uma issue no GitHub
2. Descreva o problema detalhadamente
3. Inclua informações do navegador e sistema operacional

---

**Desenvolvido com ❤️ para facilitar seus testes de formulários!**
