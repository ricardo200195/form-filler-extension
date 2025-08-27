document.addEventListener('DOMContentLoaded', function() {
    const fillFormBtn = document.getElementById('fillFormBtn');
    const loading = document.getElementById('loading');

    // Função para mostrar loading
    function showLoading() {
        fillFormBtn.style.display = 'none';
        loading.style.display = 'block';
    }

    // Função para esconder loading
    function hideLoading() {
        fillFormBtn.style.display = 'block';
        loading.style.display = 'none';
    }

    // Função para preencher o formulário
    async function fillForm() {
        try {
            showLoading();

            // Obtém a aba ativa
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            if (!tab) {
                throw new Error('Nenhuma aba ativa encontrada');
            }

            // Executa o script na aba ativa
            const results = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: () => {
                    // Verifica se o formFiller está disponível
                    if (window.formFiller && window.formFiller.fillForm) {
                        try {
                            window.formFiller.fillForm();
                            return { success: true, message: 'Formulário preenchido com sucesso!' };
                        } catch (error) {
                            return { success: false, message: 'Erro ao preencher: ' + error.message };
                        }
                    } else {
                        return { success: false, message: 'Preenchedor não está disponível nesta página' };
                    }
                }
            });

            // Verifica o resultado
            if (results && results[0] && results[0].result) {
                const result = results[0].result;
                if (!result.success) {
                    throw new Error(result.message);
                }
            }

            // Aguarda um pouco para mostrar o feedback
            setTimeout(() => {
                hideLoading();
            }, 1000);

        } catch (error) {
            console.error('Erro ao preencher formulário:', error);
            hideLoading();
            
            // Mostra mensagem de erro
            showNotification('Erro ao preencher formulário. Verifique se há campos de formulário na página.', 'error');
        }
    }

    // Função para mostrar notificações
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'error' ? '#f44336' : '#4CAF50'};
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 10000;
            font-family: Arial, sans-serif;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            animation: slideDown 0.3s ease-out;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Remove após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Adiciona estilos para animações
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Event listener para o botão
    fillFormBtn.addEventListener('click', fillForm);

    // Verifica se a extensão está funcionando
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs[0]) {
            // Verifica se o content script está carregado
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: () => {
                    return window.formFiller ? 'loaded' : 'not-loaded';
                }
            }, (results) => {
                if (chrome.runtime.lastError) {
                    console.log('Erro ao verificar status:', chrome.runtime.lastError);
                } else if (results && results[0] && results[0].result === 'loaded') {
                    console.log('Preenchedor carregado e pronto!');
                } else {
                    console.log('Preenchedor não está carregado nesta página');
                }
            });
        }
    });

    // Adiciona feedback visual ao botão
    fillFormBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    fillFormBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // Adiciona atalho de teclado para o popup
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fillForm();
        }
    });
});
