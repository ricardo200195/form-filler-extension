# 🔧 Solução de Problemas - Preenchedor de Formulários

## ❌ Erro: "Erro ao preencher formulário. Verifique se há campos de formulário na página."

### 🔍 **Diagnóstico:**

Este erro pode ocorrer por vários motivos. Vamos diagnosticar e resolver:

## 📋 **Passos para Diagnóstico:**

### **1. Verificar se a Extensão está Carregada**

1. **Abra o console do navegador** (F12)
2. **Digite:** `window.formFiller`
3. **Resultado esperado:** Deve retornar um objeto, não `undefined`

### **2. Testar com Página de Debug**

1. **Abra o arquivo:** `debug.html` no navegador
2. **Clique em "Verificar Extensão"**
3. **Clique em "Testar Preenchimento"**
4. **Verifique o console de debug**

### **3. Verificar Campos do Formulário**

A extensão detecta campos com:
- `name` ou `id` que contenham palavras-chave
- `type` específico (email, tel, date, etc.)
- Campos visíveis e interativos

## 🛠️ **Soluções:**

### **Solução 1: Recarregar a Extensão**

1. **Vá para:** `chrome://extensions/`
2. **Clique no botão de recarregar** (🔄) na extensão
3. **Teste novamente**

### **Solução 2: Verificar Permissões**

1. **Vá para:** `chrome://extensions/`
2. **Clique em "Detalhes"** na extensão
3. **Verifique se "Acesso a dados do site"** está ativado
4. **Teste em uma nova aba**

### **Solução 3: Testar em Página Simples**

1. **Abra:** `test-form.html` no navegador
2. **Teste a extensão** nesta página
3. **Se funcionar aqui, o problema é com o site específico**

### **Solução 4: Verificar Console do Navegador**

1. **Abra o console** (F12)
2. **Procure por erros** relacionados à extensão
3. **Verifique se há mensagens de debug**

## 🎯 **Campos Suportados:**

A extensão detecta automaticamente:

### **Informações Pessoais:**
- `name`, `nome`, `fullname`, `firstname`, `lastname`
- `email`, `e-mail`, `mail`
- `phone`, `telefone`, `tel`
- `mobile`, `celular`, `cell`
- `cpf`, `document`, `documento`

### **Endereço:**
- `address`, `endereco`
- `street`, `rua`
- `bairro`, `neighborhood`
- `city`, `cidade`
- `state`, `estado`
- `zip`, `cep`, `postal`

### **Outros:**
- `birth`, `nascimento`, `birthdate`
- `company`, `empresa`
- `job`, `cargo`, `position`

## 🔧 **Debug Manual:**

### **Teste via Console:**

```javascript
// Verificar se a extensão está carregada
console.log('formFiller:', window.formFiller);

// Verificar campos na página
const fields = document.querySelectorAll('input, textarea, select');
console.log('Campos encontrados:', fields.length);

// Testar preenchimento manual
if (window.formFiller) {
    window.formFiller.fillForm();
}
```

### **Verificar Campos Específicos:**

```javascript
// Listar todos os campos com seus atributos
document.querySelectorAll('input, textarea, select').forEach((field, index) => {
    console.log(`Campo ${index + 1}:`, {
        tag: field.tagName,
        type: field.type,
        name: field.name,
        id: field.id,
        placeholder: field.placeholder,
        visible: field.offsetParent !== null
    });
});
```

## 🚫 **Limitações Conhecidas:**

1. **Páginas protegidas:** Alguns sites bloqueiam extensões
2. **Campos dinâmicos:** Campos criados via JavaScript podem não ser detectados
3. **Frames/iframes:** Campos dentro de frames podem não ser acessíveis
4. **Sites com CSP:** Content Security Policy pode bloquear a extensão

## 📞 **Como Reportar Problemas:**

Se o problema persistir:

1. **Abra o console** (F12)
2. **Copie todos os erros** relacionados à extensão
3. **Teste em:** `debug.html`
4. **Anote:** URL da página, tipo de formulário, navegador
5. **Reporte:** Inclua todas as informações acima

## ✅ **Verificação Final:**

Após aplicar as soluções:

1. ✅ Extensão aparece em `chrome://extensions/`
2. ✅ `window.formFiller` retorna objeto no console
3. ✅ `debug.html` mostra "Extensão carregada"
4. ✅ Teste funciona em `test-form.html`
5. ✅ Funciona em sites reais

---

**Se ainda não funcionar, use a página de debug para identificar o problema específico!** 🐛
