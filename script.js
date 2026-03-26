// ===== DADOS DA LOJA =====
const storeData = {
    // Preços para GATOS - Março 2026
    precosGatos: [
        { tamanho: 'PP', preco: 25, descricao: 'Para gatos filhotes e porte muito pequeno' },
        { tamanho: 'P', preco: 30, descricao: 'Para gatos de porte pequeno' },
        { tamanho: 'M', preco: 35, descricao: 'Para gatos de porte médio' },
        { tamanho: 'G', preco: 37, descricao: 'Para gatos de porte grande' },
        { tamanho: 'GG', preco: 40, descricao: 'Para gatos de porte muito grande' }
    ],
    
    // Preços para CÃES - Março 2026
    precosCaes: [
        { tamanho: 'PP', preco: 30, descricao: 'Para cães de porte muito pequeno (até 3kg)' },
        { tamanho: 'P', preco: 35, descricao: 'Para cães de porte pequeno (3-7kg)' },
        { tamanho: 'M', preco: 37, descricao: 'Para cães de porte médio (7-15kg)' },
        { tamanho: 'G', preco: 40, descricao: 'Para cães de porte grande (15-25kg)' },
        { tamanho: 'GG', preco: 45, descricao: 'Para cães de porte muito grande (25-35kg)' },
        { tamanho: 'XG', preco: 47, descricao: 'Para cães de porte extra grande (35kg+)' }
    ],
    
    // Contatos
    contatos: [
        { 
            tipo: 'whatsapp',
            icone: '📱',
            titulo: 'WhatsApp',
            valor: '(85) 992995569',
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
    },
    
    // Número do WhatsApp
    whatsappNumero: '5585992995569'
};

// ===== FUNÇÃO PARA GERAR MENSAGEM DO WHATSAPP =====
function gerarMensagemWhatsapp(tipo, tamanho, preco) {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    
    let mensagem = '';
    
    if (tipo === 'gato') {
        mensagem = `Olá! 👋 Gostaria de adquirir um COLAR PARA GATO tamanho ${tamanho} no valor de R$ ${preco},00.\n\n` +
                   `🐱 Detalhes do pedido:\n` +
                   `• Produto: Colar de uso veterinário para GATO\n` +
                   `• Tamanho: ${tamanho}\n` +
                   `• Valor: R$ ${preco},00\n` +
                   `• Data: ${dataFormatada}\n\n` +
                   `Poderia me ajudar com as opções de cores/estampas disponíveis e informações sobre retirada? 🐾`;
    } else if (tipo === 'cao') {
        mensagem = `Olá! 👋 Gostaria de adquirir um COLAR PARA CÃO tamanho ${tamanho} no valor de R$ ${preco},00.\n\n` +
                   `🐕 Detalhes do pedido:\n` +
                   `• Produto: Colar de uso veterinário para CÃO\n` +
                   `• Tamanho: ${tamanho}\n` +
                   `• Valor: R$ ${preco},00\n` +
                   `• Data: ${dataFormatada}\n\n` +
                   `Poderia me ajudar com as opções de cores/estampas disponíveis e informações sobre retirada? 🐾`;
    }
    
    return encodeURIComponent(mensagem);
}

// ===== FUNÇÃO PARA ABRIR WHATSAPP =====
function abrirWhatsapp(tipo, tamanho, preco) {
    const mensagem = gerarMensagemWhatsapp(tipo, tamanho, preco);
    const url = `https://wa.me/${storeData.whatsappNumero}?text=${mensagem}`;
    window.open(url, '_blank');
    
    // Mostrar notificação
    mostrarToast(`Redirecionando para WhatsApp - ${tipo === 'gato' ? '🐱 Gato' : '🐕 Cão'} tamanho ${tamanho}`);
}

// ===== CARREGAR TABELA DE PREÇOS =====
function carregarTabelaPrecos() {
    // Carregar preços para GATOS
    const containerGatos = document.getElementById('pricing-gatos-container');
    if (containerGatos) {
        containerGatos.innerHTML = storeData.precosGatos.map(prod => `
            <div class="pricing-card">
                <div class="pricing-size">${prod.tamanho}</div>
                <div class="pricing-price">R$ ${prod.preco},00</div>
                <div class="pricing-description">${prod.descricao}</div>
                <button class="btn-comprar" onclick="abrirWhatsapp('gato', '${prod.tamanho}', ${prod.preco})">
                    🐱 Comprar
                </button>
            </div>
        `).join('');
    }
    
    // Carregar preços para CÃES
    const containerCaes = document.getElementById('pricing-caes-container');
    if (containerCaes) {
        containerCaes.innerHTML = storeData.precosCaes.map(prod => `
            <div class="pricing-card">
                <div class="pricing-size">${prod.tamanho}</div>
                <div class="pricing-price">R$ ${prod.preco},00</div>
                <div class="pricing-description">${prod.descricao}</div>
                <button class="btn-comprar" onclick="abrirWhatsapp('cao', '${prod.tamanho}', ${prod.preco})">
                    🐕 Comprar
                </button>
            </div>
        `).join('');
    }
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

// ===== RESPOSTAS DA LU (ATENDENTE VIRTUAL) =====
const luRespostas = {
    saudacoes: [
        'Olá! 🐾 Sou a Lu, prazer em te conhecer!',
        'Oi! Como posso ajudar você hoje?',
        'Olá, tudo bem? Estou aqui para ajudar!',
        'Oi! Em que posso ser útil?'
    ],
    
    produtosGatos: `🐱 Preços para GATOS (Março 2026):\n\n• PP: R$25 (gatos filhotes e porte muito pequeno)\n• P: R$30 (gatos de porte pequeno)\n• M: R$35 (gatos de porte médio)\n• G: R$37 (gatos de porte grande)\n• GG: R$40 (gatos de porte muito grande)\n\nClique no botão "Comprar" ao lado do tamanho desejado para falar conosco! 💝`,
    
    produtosCaes: `🐕 Preços para CÃES (Março 2026):\n\n• PP: R$30 (cães até 3kg)\n• P: R$35 (cães 3-7kg)\n• M: R$37 (cães 7-15kg)\n• G: R$40 (cães 15-25kg)\n• GG: R$45 (cães 25-35kg)\n• XG: R$47 (cães 35kg+)\n\nClique no botão "Comprar" ao lado do tamanho desejado para falar conosco! 🐾`,
    
    tamanhos: `📏 Guia de Tamanhos:\n\n🐱 GATOS:\n• PP: Filhotes e gatos pequenos\n• P: Gatos de porte pequeno\n• M: Gatos de porte médio\n• G: Gatos de porte grande\n• GG: Gatos de porte muito grande\n\n🐕 CÃES:\n• PP: Até 3kg (Spitz, filhotes)\n• P: 3-7kg (Pinscher, Shih-tzu)\n• M: 7-15kg (Beagle, Pug)\n• G: 15-25kg (Golden, Labrador)\n• GG: 25-35kg (Pastor Alemão)\n• XG: 35kg+ (Rottweiler, São Bernardo)\n\nPrecisamos das medidas do seu pet para garantir o conforto!`,
    
    precos: `💰 Tabela de preços atualizada - Março 2026:\n\n🐱 GATOS:\nPP R$25 | P R$30 | M R$35 | G R$37 | GG R$40\n\n🐕 CÃES:\nPP R$30 | P R$35 | M R$37 | G R$40 | GG R$45 | XG R$47\n\nTambém temos preços especiais para REVENDA! Consulte-nos.`,
    
    contato: `Nossos contatos:\n\n📱 WhatsApp: (85) 99230-1480\n📸 Instagram: @lv.amarcadosanimais\n✉️ E-mail: lu.santos.mlss@gmail.com\n\nFique à vontade para nos chamar! 🌟`,
    
    endereco: `Nosso endereço:\n\n📍 Rua 16c, casa 49a\n🏘️ Bairro Conjunto Industrial\n🌆 Maracanaú - Ceará\n\n⚠️ Importante: Não realizamos entregas, apenas retirada no local!`,
    
    pix: `Informações PIX:\n\n💰 Chave: (85) 99230-1480\n👤 Titular: Maria de Lourdes dos Santos Silva\n🏦 Banco: Banco do Nordeste\n\nApós o pagamento, envie o comprovante via WhatsApp ou Instagram! ✅`,
    
    revenda: `🏪 PREÇOS PARA REVENDA:\n\nTrabalhamos com condições especiais para petshops, clínicas veterinárias e revendedores!\n\n📞 Entre em contato pelo WhatsApp (85) 99230-1480 para saber mais sobre:\n• Descontos progressivos\n• Condições de pagamento\n• Quantidade mínima\n• Prazos de entrega\n\nFale conosco e comece a revender! 🚀`,
    
    ajuda: `Posso ajudar com:\n\n• Preços e tamanhos 💰\n• Produtos para Gatos 🐱\n• Produtos para Cães 🐕\n• Preços para Revenda 🏪\n• Contatos 📱\n• Endereço e retirada 📍\n• Pagamento via PIX 💳\n\nÉ só me perguntar! 🌟`,
    
    fallback: `Desculpe, não entendi. 😕\n\nVocê pode perguntar sobre:\n• "Preços gatos"\n• "Preços cães"\n• "Tamanhos"\n• "Revenda"\n• "Contato"\n• "Endereço"\n• "PIX"\n\nOu digite "ajuda" para ver todas as opções! 🌟`
};

// ===== FUNÇÕES DO CHAT ATUALIZADAS =====
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
    if (msg.includes('ajuda') || msg.includes('opcoes') || msg.includes('opções')) {
        return luRespostas.ajuda;
    }
    
    // Preços Gatos
    if ((msg.includes('preco') || msg.includes('preço') || msg.includes('valor')) && msg.includes('gato')) {
        return luRespostas.produtosGatos;
    }
    
    // Preços Cães
    if ((msg.includes('preco') || msg.includes('preço') || msg.includes('valor')) && (msg.includes('cao') || msg.includes('cão') || msg.includes('cachorro'))) {
        return luRespostas.produtosCaes;
    }
    
    // Preços Gerais
    if (msg.includes('preco') || msg.includes('preço') || msg.includes('valor') || msg.includes('custa') || msg.includes('quanto')) {
        return luRespostas.precos;
    }
    
    // Produtos Gatos
    if (msg.includes('gato') || msg.includes('felino') || (msg.includes('produto') && msg.includes('gato'))) {
        return luRespostas.produtosGatos;
    }
    
    // Produtos Cães
    if (msg.includes('cao') || msg.includes('cão') || msg.includes('cachorro') || msg.includes('canino') || (msg.includes('produto') && msg.includes('cão'))) {
        return luRespostas.produtosCaes;
    }
    
    // Revenda
    if (msg.includes('revenda') || msg.includes('revender') || msg.includes('atacado') || msg.includes('petshop') || msg.includes('clinica')) {
        return luRespostas.revenda;
    }
    
    // Tamanhos
    if (msg.includes('tamanho') || msg.includes('medida') || msg.includes('porte')) {
        return luRespostas.tamanhos;
    }
    
    // Contato
    if (msg.includes('contato') || msg.includes('telefone') || msg.includes('whatsapp') || msg.includes('zap') || msg.includes('email')) {
        return luRespostas.contato;
    }
    
    // Endereço
    if (msg.includes('endereco') || msg.includes('endereço') || msg.includes('local') || msg.includes('onde fica') || msg.includes('retirada')) {
        return luRespostas.endereco;
    }
    
    // PIX
    if (msg.includes('pix') || msg.includes('pagamento') || msg.includes('pagar')) {
        return luRespostas.pix;
    }
    
    // Agradecimento
    if (msg.includes('obrigado') || msg.includes('obrigada') || msg.includes('valeu')) {
        return 'Por nada! 🥰 Estou aqui para ajudar sempre que precisar. Conte comigo! 🌟';
    }
    
    // Despedida
    if (msg.includes('tchau') || msg.includes('ate mais') || msg.includes('até mais') || msg.includes('bye')) {
        return 'Até mais! Foi um prazer ajudar. Volte sempre que precisar! 🐾💕';
    }
    
    // Fallback
    return luRespostas.fallback;
}

// ===== FUNÇÃO COPIAR PIX =====
function copiarPix() {
    const chavePix = storeData.pix.chave;
    
    navigator.clipboard.writeText(chavePix).then(() => {
        mostrarToast('Chave PIX copiada! 📋');
        
        const copyButton = document.getElementById('copyPixButton');
        if (copyButton) {
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = '✓';
            copyButton.style.background = 'var(--success)';
            
            setTimeout(() => {
                copyButton.innerHTML = originalText;
                copyButton.style.background = '';
            }, 2000);
        }
    }).catch(() => {
        mostrarToast('Clique na chave para copiar manualmente');
    });
}

// ===== MOSTRAR TOAST =====
function mostrarToast(mensagem) {
    const toast = document.getElementById('toast');
    toast.textContent = mensagem;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🐾 L&V - A Marca dos Animais - Tabela Março 2026 carregada!');
    
    carregarTabelaPrecos();
    carregarCardsContato();
    configurarEventListeners();
    
    setTimeout(() => {
        if (!chatAberto) {
            const notificationDot = document.getElementById('notificationDot');
            if (notificationDot) notificationDot.classList.add('show');
        }
    }, 10000);
});

// ===== CONFIGURAR EVENT LISTENERS =====
function configurarEventListeners() {
    const copyButton = document.getElementById('copyPixButton');
    if (copyButton) {
        copyButton.addEventListener('click', copiarPix);
    }
    
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const chatSend = document.getElementById('chatSend');
    const chatInput = document.getElementById('chatInput');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    
    if (chatToggle) chatToggle.addEventListener('click', toggleChat);
    if (chatClose) chatClose.addEventListener('click', toggleChat);
    if (chatSend) chatSend.addEventListener('click', enviarMensagem);
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                enviarMensagem();
            }
        });
    }
    
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const pergunta = chip.dataset.question;
            processarPerguntaSugerida(pergunta);
        });
    });
}

// ===== VARIÁVEIS DO CHAT =====
let chatAberto = false;

function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const notificationDot = document.getElementById('notificationDot');
    
    chatAberto = !chatAberto;
    
    if (chatAberto) {
        chatBox.classList.add('open');
        if (notificationDot) notificationDot.classList.remove('show');
        setTimeout(() => {
            document.getElementById('chatInput').focus();
        }, 300);
    } else {
        chatBox.classList.remove('open');
    }
}

function enviarMensagem() {
    const input = document.getElementById('chatInput');
    const mensagem = input.value.trim();
    
    if (!mensagem) return;
    
    adicionarMensagem('user', mensagem);
    input.value = '';
    
    const sendButton = document.getElementById('chatSend');
    if (sendButton) sendButton.disabled = true;
    
    mostrarDigitacao();
    
    setTimeout(() => {
        removerDigitacao();
        const resposta = obterRespostaLu(mensagem);
        adicionarMensagem('lu', resposta);
        if (sendButton) sendButton.disabled = false;
    }, 1500);
}

function adicionarMensagem(remetente, texto) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${remetente === 'lu' ? 'lu-message' : 'user-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const linhas = texto.split('\n');
    linhas.forEach(linha => {
        if (linha.trim()) {
            const p = document.createElement('p');
            p.textContent = linha;
            contentDiv.appendChild(p);
        }
    });
    
    messageDiv.appendChild(contentDiv);
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    const agora = new Date();
    timeSpan.textContent = `${agora.getHours().toString().padStart(2, '0')}:${agora.getMinutes().toString().padStart(2, '0')}`;
    messageDiv.appendChild(timeSpan);
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function mostrarDigitacao() {
    removerDigitacao();
    const messagesContainer = document.getElementById('chatMessages');
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
    if (typingIndicator) typingIndicator.remove();
}

function processarPerguntaSugerida(pergunta) {
    if (!chatAberto) toggleChat();
    
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