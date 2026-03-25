// ===== DADOS DA LOJA =====
const storeData = {
    // Tabela de preços
    precos: [
        { tamanho: 'PP', preco: 22, descricao: 'Para cães e gatos de porte muito pequeno' },
        { tamanho: 'P', preco: 25, descricao: 'Para cães e gatos de porte pequeno' },
        { tamanho: 'M', preco: 27, descricao: 'Para cães e gatos de porte médio' },
        { tamanho: 'G', preco: 32, descricao: 'Para cães e gatos de porte grande' },
        { tamanho: 'GG', preco: 38, descricao: 'Para cães e gatos de porte muito grande' }
    ],
    
    // Contatos
    contatos: [
        { 
            tipo: 'whatsapp',
            icone: '📱',
            titulo: 'WhatsApp',
            valor: '(85) 99299-5569',
            link: 'https://wa.me/5585992995569',
            nota: 'Clique para conversar'
        },
        { 
            tipo: 'instagram',
            icone: '📸',
            titulo: 'Instagram',
            valor: '@lv.amarcadosanimais',
            link: 'https://instagram.com/lv.amarcadosanimais',
            nota: 'Acompanhe nossas novidades'
        },
        { 
            tipo: 'email',
            icone: '✉️',
            titulo: 'E-mail',
            valor: 'lu.santos.mlss@gmail.com',
            link: 'mailto:lu.santos.mlss@gmail.com',
            nota: 'Envie sua mensagem'
        }
    ],
    
    // Informações PIX
    pix: {
        chave: '(85) 992995569',
        titular: 'Maria de Lourdes dos Santos Silva',
        banco: 'Banco do Nordeste'
    },
    
    // Endereço
    endereco: {
        rua: 'Rua 16c, casa 49a',
        bairro: 'Conjunto Industrial',
        cidade: 'Maracanaú',
        estado: 'Ceará',
        completo: 'Rua 16c, casa 49a, Bairro Conjunto Industrial, Maracanaú - CE'
    }
};

// ===== RESPOSTAS DA LU (ATENDENTE VIRTUAL) =====
const luRespostas = {
    saudacoes: [
        'Olá! 🐾 Sou a Lu, prazer em te conhecer!',
        'Oi! Como posso ajudar você hoje?',
        'Olá, tudo bem? Estou aqui para ajudar!',
        'Oi! Em que posso ser útil?'
    ],
    
    produtos: `Temos colares de uso veterinário nos tamanhos:\n\n• PP: R$22 (porte muito pequeno)\n• P: R$25 (porte pequeno)\n• M: R$27 (porte médio)\n• G: R$32 (porte grande)\n• GG: R$38 (porte muito grande)\n\nTodos disponíveis para cães e gatos! 🐕🐈`,
    
    tamanhos: `Os tamanhos são:\n\n🐕 PP: para pets muito pequenos (filhotes, gatos pequenos)\n🐕 P: para pets pequenos (Spitz, Pinscher)\n🐕 M: para pets médios (Beagle, Shih-tzu)\n🐕 G: para pets grandes (Golden, Labrador)\n🐕 GG: para pets muito grandes (Pastor Alemão, Rottweiler)\n\nPrecisamos das medidas do seu pet para garantir o conforto!`,
    
    precos: `Tabela de preços atualizada:\n\n✨ PP: R$22,00\n✨ P: R$25,00\n✨ M: R$27,00\n✨ G: R$32,00\n✨ GG: R$38,00\n\nTodos os modelos são feitos sob medida! 💝`,
    
    contato: `Nossos contatos:\n\n📱 WhatsApp: (85) 99299-5569\n📸 Instagram: @lv.amarcadosanimais\n✉️ E-mail: lu.santos.mlss@gmail.com\n\nFique à vontade para nos chamar! 🌟`,
    
    endereco: `Nosso endereço:\n\n📍 Rua 16c, casa 49a\n🏘️ Bairro Conjunto Industrial\n🌆 Maracanaú - Ceará\n\n⚠️ Importante: Não realizamos entregas, apenas retirada no local!`,
    
    pix: `Informações PIX:\n\n💰 Chave: (85) 992995569\n👤 Titular: Maria de Lourdes dos Santos Silva\n🏦 Banco: Banco do Nordeste\n\nApós o pagamento, envie o comprovante via WhatsApp ou Instagram! ✅`,
    
    ajuda: `Posso ajudar com:\n\n• Preços e tamanhos 💰\n• Informações sobre os produtos 🐾\n• Contatos 📱\n• Endereço e retirada 📍\n• Pagamento via PIX 💳\n\nÉ só me perguntar! 🌟`,
    
    fallback: `Desculpe, não entendi. 😕\n\nVocê pode perguntar sobre:\n• "Preços"\n• "Tamanhos"\n• "Contato"\n• "Endereço"\n• "PIX"\n\nOu digite "ajuda" para ver todas as opções! 🌟`
};

// ===== ESTADO DA APLICAÇÃO =====
let chatAberto = false;
let mensagemNaoLida = true;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🐾 L&V - A Marca dos Animais carregado com sucesso!');
    
    // Carregar dados dinâmicos
    carregarTabelaPrecos();
    carregarCardsContato();
    
    // Configurar event listeners
    configurarEventListeners();
    
    // Mostrar notificação de mensagem não lida após 10 segundos
    setTimeout(() => {
        if (!chatAberto) {
            mostrarNotificacaoNaoLida();
        }
    }, 10000);
});

// ===== CARREGAR TABELA DE PREÇOS =====
function carregarTabelaPrecos() {
    const container = document.getElementById('pricing-container');
    if (!container) return;
    
    container.innerHTML = storeData.precos.map(prod => `
        <div class="pricing-card">
            <div class="pricing-size">${prod.tamanho}</div>
            <div class="pricing-price">${prod.preco},00</div>
            <div class="pricing-description">${prod.descricao}</div>
        </div>
    `).join('');
}

// ===== CARREGAR CARDS DE CONTATO =====
function carregarCardsContato() {
    const container = document.getElementById('contact-container');
    if (!container) return;
    
    container.innerHTML = storeData.contatos.map(contato => `
        <a href="${contato.link}" target="_blank" rel="noopener noreferrer" class="contact-card">
            <span class="contact-icon">${contato.icone}</span>
            <h3>${contato.titulo}</h3>
            <p>${contato.valor}</p>
            <div class="contact-note">${contato.nota}</div>
        </a>
    `).join('');
}

// ===== CONFIGURAR EVENT LISTENERS =====
function configurarEventListeners() {
    // Botão de copiar PIX
    const copyButton = document.getElementById('copyPixButton');
    if (copyButton) {
        copyButton.addEventListener('click', copiarPix);
    }
    
    // Chat toggle
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const chatSend = document.getElementById('chatSend');
    const chatInput = document.getElementById('chatInput');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    
    if (chatToggle) {
        chatToggle.addEventListener('click', toggleChat);
    }
    
    if (chatClose) {
        chatClose.addEventListener('click', toggleChat);
    }
    
    if (chatSend) {
        chatSend.addEventListener('click', enviarMensagem);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                enviarMensagem();
            }
        });
    }
    
    // Sugestões de perguntas
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const pergunta = chip.dataset.question;
            processarPerguntaSugerida(pergunta);
        });
    });
    
    // Fechar chat ao clicar fora (opcional)
    document.addEventListener('click', (e) => {
        if (chatAberto && !e.target.closest('.chat-container')) {
            toggleChat();
        }
    });
}

// ===== FUNÇÕES DO CHAT =====
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const notificationDot = document.getElementById('notificationDot');
    
    chatAberto = !chatAberto;
    
    if (chatAberto) {
        chatBox.classList.add('open');
        notificationDot.classList.remove('show');
        mensagemNaoLida = false;
        
        // Focar no input
        setTimeout(() => {
            document.getElementById('chatInput').focus();
        }, 300);
    } else {
        chatBox.classList.remove('open');
    }
}

function mostrarNotificacaoNaoLida() {
    const notificationDot = document.getElementById('notificationDot');
    if (!chatAberto) {
        notificationDot.classList.add('show');
    }
}

function enviarMensagem() {
    const input = document.getElementById('chatInput');
    const mensagem = input.value.trim();
    
    if (!mensagem) return;
    
    // Adicionar mensagem do usuário
    adicionarMensagem('user', mensagem);
    
    // Limpar input
    input.value = '';
    
    // Desabilitar botão de enviar temporariamente
    const sendButton = document.getElementById('chatSend');
    sendButton.disabled = true;
    
    // Mostrar indicador de digitação
    mostrarDigitacao();
    
    // Simular tempo de resposta
    setTimeout(() => {
        // Remover indicador de digitação
        removerDigitacao();
        
        // Obter resposta da Lu
        const resposta = obterRespostaLu(mensagem);
        
        // Adicionar resposta
        adicionarMensagem('lu', resposta);
        
        // Reabilitar botão
        sendButton.disabled = false;
    }, 1500);
}

function adicionarMensagem(remetente, texto) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${remetente === 'lu' ? 'lu-message' : 'user-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Processar texto com quebras de linha
    const linhas = texto.split('\n');
    linhas.forEach((linha, index) => {
        if (linha.trim()) {
            const p = document.createElement('p');
            p.textContent = linha;
            contentDiv.appendChild(p);
        }
    });
    
    messageDiv.appendChild(contentDiv);
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = obterHoraAtual();
    messageDiv.appendChild(timeSpan);
    
    messagesContainer.appendChild(messageDiv);
    
    // Scroll para a última mensagem
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function mostrarDigitacao() {
    const messagesContainer = document.getElementById('chatMessages');
    
    // Remover qualquer indicador existente
    removerDigitacao();
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message lu-message';
    typingDiv.id = 'typing-indicator';
    
    const indicatorDiv = document.createElement('div');
    indicatorDiv.className = 'typing-indicator';
    indicatorDiv.innerHTML = '<span></span><span></span><span></span>';
    
    typingDiv.appendChild(indicatorDiv);
    messagesContainer.appendChild(typingDiv);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removerDigitacao() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function obterHoraAtual() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
}

function obterRespostaLu(mensagem) {
    const msg = mensagem.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
    
    // Saudação
    if (msg.match(/^(oi|ola|olá|hello|hi|bom dia|boa tarde|boa noite|e aí|e ai|fala|opa)/)) {
        const saudacao = luRespostas.saudacoes[Math.floor(Math.random() * luRespostas.saudacoes.length)];
        return saudacao + ' ' + luRespostas.ajuda.split('\n')[0];
    }
    
    // Ajuda
    if (msg.includes('ajuda') || msg.includes('opcoes') || msg.includes('opções') || msg.includes('pode fazer') || msg.includes('o que você')) {
        return luRespostas.ajuda;
    }
    
    // Preços
    if (msg.includes('preco') || msg.includes('preço') || msg.includes('valor') || msg.includes('custa') || msg.includes('quanto')) {
        return luRespostas.precos;
    }
    
    // Produtos / Colares
    if (msg.includes('produto') || msg.includes('colar') || msg.includes('cone') || msg.includes('veterinario') || msg.includes('cirurgia')) {
        return luRespostas.produtos;
    }
    
    // Tamanhos
    if (msg.includes('tamanho') || msg.includes('medida') || msg.includes('porte') || msg.includes('grande') || msg.includes('pequeno')) {
        return luRespostas.tamanhos;
    }
    
    // Contato
    if (msg.includes('contato') || msg.includes('telefone') || msg.includes('whatsapp') || msg.includes('zap') || msg.includes('email') || msg.includes('instagram') || msg.includes('rede social')) {
        return luRespostas.contato;
    }
    
    // Endereço
    if (msg.includes('endereco') || msg.includes('endereço') || msg.includes('local') || msg.includes('onde fica') || msg.includes('retirada') || msg.includes('buscar')) {
        return luRespostas.endereco;
    }
    
    // PIX
    if (msg.includes('pix') || msg.includes('pagamento') || msg.includes('pagar') || msg.includes('transferencia') || msg.includes('transferência') || msg.includes('dinheiro')) {
        return luRespostas.pix;
    }
    
    // Agradecimento
    if (msg.includes('obrigado') || msg.includes('obrigada') || msg.includes('valeu') || msg.includes('thanks') || msg.includes('thank')) {
        return 'Por nada! 🥰 Estou aqui para ajudar sempre que precisar. Conte comigo! 🌟';
    }
    
    // Despedida
    if (msg.includes('tchau') || msg.includes('ate mais') || msg.includes('até mais') || msg.includes('bye') || msg.includes('até logo')) {
        return 'Até mais! Foi um prazer ajudar. Volte sempre que precisar! 🐾💕';
    }
    
    // Fallback
    return luRespostas.fallback;
}

function processarPerguntaSugerida(pergunta) {
    if (!chatAberto) {
        toggleChat();
    }
    
    setTimeout(() => {
        adicionarMensagem('user', pergunta);
        
        mostrarDigitacao();
        
        setTimeout(() => {
            removerDigitacao();
            
            let resposta = '';
            switch(pergunta) {
                case 'preços':
                    resposta = luRespostas.precos;
                    break;
                case 'tamanhos':
                    resposta = luRespostas.tamanhos;
                    break;
                case 'contato':
                    resposta = luRespostas.contato;
                    break;
                case 'endereço':
                    resposta = luRespostas.endereco;
                    break;
                case 'pix':
                    resposta = luRespostas.pix;
                    break;
                default:
                    resposta = luRespostas.ajuda;
            }
            
            adicionarMensagem('lu', resposta);
        }, 1200);
    }, 300);
}

// ===== FUNÇÃO COPIAR PIX =====
function copiarPix() {
    const chavePix = storeData.pix.chave;
    
    navigator.clipboard.writeText(chavePix).then(() => {
        mostrarToast('Chave PIX copiada! 📋');
        
        // Feedback visual no botão
        const copyButton = document.getElementById('copyPixButton');
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '✓';
        copyButton.style.background = 'var(--success)';
        
        setTimeout(() => {
            copyButton.innerHTML = originalText;
            copyButton.style.background = '';
        }, 2000);
    }).catch(() => {
        mostrarToast('Clique na chave para copiar manualmente');
    });
}

// ===== FUNÇÃO MOSTRAR TOAST =====
function mostrarToast(mensagem) {
    const toast = document.getElementById('toast');
    toast.textContent = mensagem;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== ANIMAÇÕES E EFEITOS =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ===== PREVENIR COMPORTAMENTO PADRÃO DO FORMULÁRIO =====
document.addEventListener('submit', (e) => {
    e.preventDefault();
});

// ===== REGISTRAR SERVICE WORKER (OPCIONAL) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Não registramos service worker para manter simples,
        // mas poderia ser adicionado para funcionalidades offline
    });
}

// ===== DETECTAR CONEXÃO =====
window.addEventListener('online', () => {
    console.log('Conexão restabelecida');
});

window.addEventListener('offline', () => {
    mostrarToast('Você está offline. Algumas funções podem não estar disponíveis.');
});

// ===== ANALYTICS SIMPLES (OPCIONAL) =====
function trackEvent(categoria, acao, label) {
    console.log(`[Track] ${categoria} - ${acao} - ${label}`);
    // Aqui poderia integrar com Google Analytics ou similar
}

// Track de abertura do site
trackEvent('Engajamento', 'Visualização', 'Home');

// ===== DETECÇÃO DE DISPOSITIVO MÓVEL =====
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ===== MELHORIAS PARA DISPOSITIVOS MÓVEIS =====
if (isMobileDevice()) {
    // Prevenir comportamento padrão de hover em mobile
    document.querySelectorAll('.contact-card, .pricing-card, .suggestion-chip, .chat-toggle').forEach(el => {
        el.addEventListener('touchstart', function() {
            // Pequeno feedback visual
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Ajustar comportamento do chat para mobile
    const chatToggle = document.getElementById('chatToggle');
    const chatBox = document.getElementById('chatBox');
    
    if (chatToggle && chatBox) {
        // Fechar chat ao clicar fora em mobile
        document.addEventListener('touchstart', function(e) {
            if (chatBox.classList.contains('open') && 
                !chatBox.contains(e.target) && 
                !chatToggle.contains(e.target)) {
                chatBox.classList.remove('open');
            }
        });
    }
    
    // Melhorar scroll do chat em mobile
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        chatMessages.addEventListener('touchstart', function() {
            this.style.webkitOverflowScrolling = 'touch';
        });
    }
    
    console.log('📱 Versão mobile ativada - Experiência otimizada!');
}

// ===== VERIFICAR CONEXÃO EM MOBILE =====
window.addEventListener('load', () => {
    if (!navigator.onLine) {
        mostrarToast('Você está offline. Algumas funções podem não funcionar.');
    }
});

// ===== AJUSTAR VIEWPORT PARA ORIENTATION CHANGE =====
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        // Reajustar chat se estiver aberto
        const chatBox = document.getElementById('chatBox');
        if (chatBox && chatBox.classList.contains('open')) {
            chatBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
});