// Dados de exemplo - Estes seriam substituídos com seus dados reais
const candidatosCasal = [
    {
        nome: 'Miguel',
        foto: './images/miguel.jpeg',
    },
    {
        nome: 'Cecília',
        foto: './images/cecilia.jpeg',
    },
    {
        nome: 'CONTINUAR',
        foto: 'https://images.icon-icons.com/933/PNG/512/ellipsis_icon-icons.com_72770.png',
        descricao: 'CONTINUAR'
    }
];


// Adicionar candidatos ao DOM
function carregarCandidatos() {
    const casalContainer = document.querySelector('#casal .participants');
    
    // Limpar containers
    casalContainer.innerHTML = '';
    
    // Adicionar casais
    candidatosCasal.forEach(casal => {
        casalContainer.innerHTML += `
            <div class="participant">
                <img src="${casal.foto}" alt="${casal.nome}">
                <div class="participant-info">
                    <h3>${casal.nome}</h3>
                </div>
            </div>
        `;
    });
    
}

// Função para controlar as abas das competições
function openTab(tabName) {
    // Esconder todas as abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remover classe ativa de todos os botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar a aba selecionada
    document.getElementById(tabName).classList.add('active');
    
    // Adicionar classe ativa ao botão clicado
    const activeButton = document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`);
    activeButton.classList.add('active');
}

// Função para mostrar itens do menu
function showMenu(menuType) {
    // Esconder todos os menus
    const menuItems = document.querySelectorAll('.menu-items');
    menuItems.forEach(menu => {
        menu.classList.remove('active');
    });
    
    // Remover classe ativa de todos os botões
    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar o menu selecionado
    document.getElementById(menuType).classList.add('active');
    
    // Adicionar classe ativa ao botão clicado
    const activeButton = document.querySelector(`.menu-button[onclick="showMenu('${menuType}')"]`);
    activeButton.classList.add('active');
}

// Função para atualizar a contagem regressiva
function updateCountdown() {
    // Data da festa (substituir pela data real)
    const eventDate = new Date('June 14, 2025 19:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    
    if (timeLeft <= 0) {
        document.getElementById('countdown-timer').innerHTML = '<p>A festa já começou!</p>';
        return;
    }
    
    // Cálculo do tempo restante
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Atualizar os elementos HTML
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Função para lidar com o envio do formulário de contato
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você adicionaria o código para processar o formulário
            // Por exemplo, enviar os dados para um servidor
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            form.reset();
        });
    }
}

// Função para navegação suave ao clicar nos links do menu
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Ajuste para o cabeçalho fixo
                behavior: 'smooth'
            });
        });
    });
}

// Função para carregar e exibir as imagens da galeria
function setupGallery() {
    const galleryImages = document.querySelectorAll('.gallery-images img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Aqui você pode implementar um visualizador de imagem em tela cheia
            // Por exemplo, abrir um modal com a imagem ampliada
            alert('Implementar visualizador de imagem em tela cheia');
        });
    });
}

// Efeito de rolagem para revelar elementos
function setupScrollReveal() {
    const sections = document.querySelectorAll('.section');
    
    const revealSection = function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 150) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar estilo inicial
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });
    
    // Adicionar evento de rolagem
    window.addEventListener('scroll', revealSection);
    
    // Chamar uma vez para configurar elementos visíveis inicialmente
    revealSection();
}

// Inicializar todas as funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    carregarCandidatos();
    updateCountdown();
    setInterval(updateCountdown, 1000); // Atualizar a cada segundo
    handleContactForm();
    setupSmoothScrolling();
    setupGallery();
    setupScrollReveal();
});