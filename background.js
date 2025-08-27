// Background script para a extensão de preenchimento de formulários

// Listener para quando a extensão é instalada
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Preenchedor de Formulários instalado com sucesso!');
        
        // Abre uma página de boas-vindas
        chrome.tabs.create({
            url: 'welcome.html'
        });
    }
});

// Listener para mensagens do content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fillForm') {
        // Executa o preenchimento na aba ativa
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: () => {
                        if (window.formFiller) {
                            window.formFiller.fillForm();
                        }
                    }
                });
            }
        });
        sendResponse({ success: true });
    }
    
    return true; // Mantém a conexão aberta para resposta assíncrona
});

// Listener para atalhos de teclado
chrome.commands.onCommand.addListener((command) => {
    if (command === 'fill-form') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: () => {
                        if (window.formFiller) {
                            window.formFiller.fillForm();
                        }
                    }
                });
            }
        });
    }
});

// Listener para mudanças de aba
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        // Injeta o content script quando uma nova página carrega
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['data-generator.js', 'content.js']
        }).catch((error) => {
            // Ignora erros para páginas que não permitem injeção de scripts
            console.log('Não foi possível injetar scripts nesta página:', error);
        });
    }
});

// Função para verificar se a extensão está funcionando
function checkExtensionStatus() {
    console.log('Preenchedor de Formulários está ativo e funcionando!');
}

// Executa verificação de status periodicamente
setInterval(checkExtensionStatus, 300000); // A cada 5 minutos

// Listener para quando a extensão é ativada
chrome.runtime.onStartup.addListener(() => {
    console.log('Preenchedor de Formulários iniciado!');
});

// Listener para quando a extensão é desativada
chrome.runtime.onSuspend.addListener(() => {
    console.log('Preenchedor de Formulários pausado!');
});
