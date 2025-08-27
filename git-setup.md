# 🔗 Configuração do Repositório Git

## ✅ **Repositório Local Criado com Sucesso!**

O repositório Git local foi inicializado e o primeiro commit foi feito com sucesso.

## 🚀 **Próximos Passos - Conectar ao Repositório Remoto**

### **1. Criar Repositório no GitHub/GitLab**

1. **Vá para:** https://github.com (ou seu GitLab)
2. **Clique em "New repository"**
3. **Nome sugerido:** `form-filler-extension`
4. **Descrição:** `Extensão Chrome para preenchimento de formulários com dados fictícios brasileiros`
5. **Deixe público ou privado** (sua escolha)
6. **NÃO inicialize com README** (já temos um)
7. **Clique em "Create repository"**

### **2. Conectar ao Repositório Remoto**

Após criar o repositório, execute um destes comandos:

#### **Para GitHub:**
```bash
git remote add origin https://github.com/SEU_USUARIO/form-filler-extension.git
```

#### **Para GitLab:**
```bash
git remote add origin https://gitlab.com/SEU_USUARIO/form-filler-extension.git
```

### **3. Fazer Push para o Repositório**

```bash
git branch -M main
git push -u origin main
```

## 📋 **Comandos Úteis**

### **Verificar Status:**
```bash
git status
```

### **Ver Commits:**
```bash
git log --oneline
```

### **Adicionar Novas Mudanças:**
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

### **Ver Repositórios Remotos:**
```bash
git remote -v
```

## 🎯 **Estrutura do Projeto no Git**

```
form-filler-extension/
├── .gitignore              # Arquivos ignorados
├── README.md               # Documentação principal
├── manifest.json           # Configuração da extensão
├── manifest-simple.json    # Versão sem ícones
├── data-generator.js       # Gerador de dados fictícios
├── content.js             # Script principal
├── popup.html             # Interface do popup
├── popup.js               # Lógica do popup
├── background.js          # Script de background
├── welcome.html           # Página de boas-vindas
├── test-form.html         # Formulário de teste
├── debug.html             # Página de debug
├── create-icons.html      # Gerador de ícones
├── install-guide.md       # Guia de instalação
├── troubleshooting.md     # Solução de problemas
├── commands.json          # Configuração de atalhos
└── icons/
    └── icon.svg           # Ícone da extensão
```

## 🔧 **Configurações Recomendadas**

### **Configurar Usuário Git (se ainda não configurou):**
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### **Configurar Branch Principal:**
```bash
git config --global init.defaultBranch main
```

## 📝 **Próximas Atualizações**

Para futuras atualizações:

1. **Faça as mudanças** no código
2. **Adicione ao Git:** `git add .`
3. **Faça commit:** `git commit -m "Descrição da mudança"`
4. **Envie para o repositório:** `git push`

## 🎉 **Parabéns!**

Seu projeto está pronto para ser compartilhado no GitHub/GitLab!

---

**Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub/GitLab!**

