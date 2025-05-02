// ==========================
// ESTRUTURAS DE DADOS
// ==========================

// Notícias de destaque (aparece na home se preenchido)
const noticias = [
    {
      titulo: "Arraiá confirmado!",
      descricao: "O tradicional Arraiá da Comunidade Santa Marta será dia 14 de Junho, com muito forró, comidas típicas e diversão!",
      data: "2025-05-01"
    }
    // Basta adicionar mais avisos conforme necessidade!
  ];
  
  // Linha do tempo da comunidade (Nossa História)
  const historia = [
    {
      ano: "1995",
      titulo: "Fundação",
      descricao: "A Comunidade Santa Marta foi fundada por famílias unidas na fé.",
      imagem: "./images/historia1.jpg"
    },
    {
      ano: "2002",
      titulo: "Primeira Catequese",
      descricao: "Início das turmas de Catequese para crianças da comunidade.",
      imagem: "./images/historia2.jpg"
    },
    {
      ano: "2018",
      titulo: "Construção do Salão",
      descricao: "Obra coletiva: inauguração do novo salão para eventos e celebrações.",
      imagem: "./images/historia3.jpg"
    }
    // Adicione mais marcos importantes!
  ];
  
  // Galeria por categorias
  const galeria = [
    {
      categoria: "Catequese",
      imagens: [
        { src: "./images/galeria_catequese1.jpg", legenda: "Celebração de Primeira Eucaristia" },
        { src: "./images/galeria_catequese2.jpg", legenda: "Turma 2023" }
      ]
    },
    {
      categoria: "Tríduo Pascal",
      imagens: [
        { src: "./images/galeria_triduo1.jpg", legenda: "Vigília Pascal" },
        { src: "./images/galeria_triduo2.jpg", legenda: "Homenagem à cruz" }
      ]
    },
    {
      categoria: "Grupo de Oração",
      imagens: [
        { src: "./images/galeria_oracao1.jpg", legenda: "Encontro semanal de oração" }
      ]
    },
    {
      categoria: "Terço dos Homens",
      imagens: [
        { src: "./images/galeria_terco1.jpg", legenda: "Momento de fé entre pais e filhos" }
      ]
    },
    {
      categoria: "Sagrado Coração de Jesus",
      imagens: [
        { src: "./images/galeria_sagrado1.jpg", legenda: "Celebração do Sagrado Coração de Jesus" }
      ]
    }
    // Adicione outras categorias/fotos conforme necessidade!
  ];
  
  // Programação fixa e agenda especial
  const programacao = [
    {
      nome: "Celebração Eucarística",
      recorrencia: "1º e 3º domingos",
      horario: "18h"
    },
    {
      nome: "Celebração da Palavra",
      recorrencia: "2º, 4º e 5º domingos",
      horario: "18h"
    },
    {
      nome: "Grupo de Oração",
      recorrencia: "Todas as terças",
      horario: "19:30"
    },
    {
      nome: "Terço dos Homens",
      recorrencia: "Todas as segundas",
      horario: "19:45"
    },
    {
      nome: "Mil Ave Marias",
      recorrencia: "Terceiro sábado do mês",
      horario: "12h"
    }
    // Adicione outros eventos regulares!
  ];
  
  // Eventos futuros e passados (o próximo recebe destaque na Home)
  const eventos = [
    {
      nome: "Arraiá da Comunidade Santa Marta",
      data: "2025-06-14T19:00:00",
      descricao: "O tradicional Arraiá com comidas típicas, quadrilha, músicos e muitas brincadeiras!",
      destaque: true // Marque um como próximo evento (só 1 por vez!)
    },
    {
      nome: "Tríduo Pascal",
      data: "2025-04-17T19:30:00",
      descricao: "Celebração do Tríduo Pascal em preparação à Páscoa."
    }
    // Adicione mais eventos!
  ];
  
  
  // ==========================
  // CONTROLE SPA (NAVEGAÇÃO)
  // ==========================
  function changeSection(sectionId) {
    // Oculta todas as seções
    document.querySelectorAll('.spa-section').forEach(sec => sec.classList.remove('active'));
    // Mostra apenas a escolhida
    const secEl = document.getElementById(sectionId);
    if (secEl) secEl.classList.add('active');
    // Atualiza o título da aba para SEO e browser
    switch(sectionId) {
      case "home": document.title = "Comunidade Santa Marta"; break;
      case "historia": document.title = "Nossa História - Comunidade Santa Marta"; break;
      case "galeria": document.title = "Galeria - Comunidade Santa Marta"; break;
      case "programacao": document.title = "Programação - Comunidade Santa Marta"; break;
      case "eventos": document.title = "Eventos - Comunidade Santa Marta"; break;
      case "contato": document.title = "Contato - Comunidade Santa Marta"; break;
    }
    // Atualiza a hash na URL para facilitar compartilhamento direto de seções
    window.location.hash = sectionId;
  }
  
  // Liga os links do menu e os cards da home à função SPA
  function setupNavigation() {
    // Links do menu
    document.querySelectorAll('#main-menu a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        if (section) changeSection(section);
      });
    });
    // Cards da home
    document.querySelectorAll('.home-card').forEach(card => {
      card.addEventListener('click', () => {
        const section = card.getAttribute('data-section');
        if (section) changeSection(section);
      });
    });
    // SPA "deep-link": abre a seção da hash ao recarregar ou linkar diretão
    window.addEventListener('load', () => {
      const hash = window.location.hash.replace('#', '');
      if(hash) changeSection(hash);
      else changeSection('home');
    });
  }
  
  
  // ==========================
  // BLOCO DE NOTÍCIAS/AVISOS
  // ==========================
  function renderNoticias() {
    const newsBlock = document.getElementById("news-block");
    if (noticias.length === 0) {
      newsBlock.style.display = "none";
      return;
    }
    // Mostra a notícia mais recente
    const noticia = noticias[0];
    newsBlock.innerHTML = `
      <div class="noticia-destaque">
        <h4>${noticia.titulo}</h4>
        <p>${noticia.descricao}</p>
        <span class="news-date">${formataData(noticia.data)}</span>
      </div>
    `;
    newsBlock.style.display = "block";
  }
  
  // Formatação da data (pt-BR)
  function formataData(dataStr) {
    const d = new Date(dataStr);
    return d.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric'});
  }
  
  
  // ==========================
  // LINHA DO TEMPO HISTÓRICA
  // ==========================
  function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    historia.forEach(item => {
      timeline.innerHTML += `
        <div class="timeline-item">
          <div class="timeline-year">${item.ano}</div>
          <div class="timeline-content">
            <h4>${item.titulo}</h4>
            <p>${item.descricao}</p>
            ${item.imagem ? `<img src="${item.imagem}" alt="${item.titulo}">` : ''}
          </div>
        </div>
      `;
    });
  }
  
  
  // ==========================
  // GALERIA DE FOTOS COM FILTROS E MODAL
  // ==========================
  
  // Inicializa filtros das categorias
  function renderGalleryFilters() {
    const filters = document.getElementById('gallery-filters');
    filters.innerHTML = '';
    galeria.forEach((cat, idx) => {
      filters.innerHTML += `<button class="gallery-filter-btn" data-idx="${idx}">${cat.categoria}</button>`;
    });
    // Marca o primeiro ativo por padrão
    document.querySelectorAll('.gallery-filter-btn')[0].classList.add('active');
  }
  
  // Exibe imagens da categoria selecionada
  function renderGalleryImages(categoryIdx=0) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';
    const imagens = galeria[categoryIdx]?.imagens || [];
    imagens.forEach((img, i) => {
      grid.innerHTML += `
        <div class="gallery-photo">
          <img src="${img.src}" alt="${img.legenda}" data-idx="${i}" data-cat="${categoryIdx}">
          <div class="gallery-caption">${img.legenda}</div>
        </div>
      `;
    });
    setupGalleryModal();
  }
  
  // Filtros dinâmicos (trocam imagens)
  function setupGalleryFilters() {
    document.getElementById('gallery-filters').addEventListener('click', e => {
      if (e.target.classList.contains('gallery-filter-btn')) {
        // Remove ativo anterior e ativa novo
        document.querySelectorAll('.gallery-filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderGalleryImages(Number(e.target.dataset.idx));
      }
    });
  }
  
  // Modal/lightbox simples
  function setupGalleryModal() {
    document.querySelectorAll('.gallery-photo img').forEach(img => {
      img.addEventListener('click', e => {
        const catIdx = Number(img.dataset.cat);
        const imgIdx = Number(img.dataset.idx);
        openGalleryModal(catIdx, imgIdx);
      });
    });
  }
  
  function openGalleryModal(catIdx, imgIdx) {
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('modal-caption');
    const img = galeria[catIdx]?.imagens[imgIdx];
    if (img) {
      modalImg.src = img.src;
      caption.textContent = img.legenda;
      modal.style.display = 'flex';
    }
    document.getElementById('modal-close').onclick = () => { modal.style.display = "none"; };
    // Fecha também ao clicar fora da imagem
    modal.onclick = (event) => {
      if (event.target === modal) { modal.style.display = "none"; }
    };
  }
  
  
  // ==========================
  // PROGRAMAÇÃO - LISTAGEM
  // ==========================
  function renderSchedule() {
    const schedule = document.getElementById('schedule-list');
    schedule.innerHTML = `
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Quando</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          ${programacao.map(item => `
            <tr>
              <td>${item.nome}</td>
              <td>${item.recorrencia}</td>
              <td>${item.horario}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  
  // ==========================
  // EVENTOS - LISTAGEM E CONTAGEM REGRESSIVA
  // ==========================
  
  // Mostra todos os eventos, destaca o próximo com contagem regressiva
  function renderEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    eventos.forEach(ev => {
      const d = new Date(ev.data);
      const now = new Date();
      // Destaca evento futuro
      const isFuturo = d > now;
      eventList.innerHTML += `
        <div class="event-card${ev.destaque && isFuturo ? ' destaque' : ''}">
          <h4>${ev.nome}</h4>
          <span class="event-date">${d.toLocaleDateString('pt-BR')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}</span>
          <p>${ev.descricao}</p>
          ${ev.destaque && isFuturo ? `<div id="evento-countdown"></div>` : ""}
        </div>
      `;
    });
    // Inicia contagem regressiva para o evento em destaque se houver
    const evDest = eventos.find(ev => ev.destaque && new Date(ev.data) > new Date());
    if (evDest) startCountdown(evDest.data, "evento-countdown");
  }
  
  // Na home: próximo evento em destaque também recebe contagem
  function renderNextEventHome() {
    const nextBlock = document.getElementById("next-event-block");
    nextBlock.innerHTML = '';
    const now = new Date();
    // Pega o próximo evento futuro por data
    const next = eventos.filter(ev => new Date(ev.data) > now)
                        .sort((a, b) => new Date(a.data) - new Date(b.data))[0];
    if (next) {
      nextBlock.innerHTML = `
        <div class="card-next-event">
          <h4>Próximo Evento: ${next.nome}</h4>
          <p>${next.descricao}</p>
          <span class="event-date">${formataData(next.data)} ${new Date(next.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' })}</span>
          <div id="home-countdown"></div>
        </div>
      `;
      startCountdown(next.data, "home-countdown");  
    }
  }
  
  // Inicia contagem regressiva e atualiza dinamicamente
  function startCountdown(dateStr, targetId) {
    function update() {
      const eventDate = new Date(dateStr).getTime();
      const now = new Date().getTime();
      let diff = eventDate - now;
      if (diff <= 0) {
        document.getElementById(targetId).innerHTML = '<strong>Evento iniciado!</strong>';
        clearInterval(intv);
        return;
      }
      // Cálculo dos componentes
      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById(targetId).innerHTML = `
        <div class="countdown-inline">
          <span>${dias}d</span> <span>${horas}h</span> <span>${minutos}m</span> <span>${segundos}s</span>
        </div>
      `;
    }
    update(); // chama de imediato
    const intv = setInterval(update, 1000);
  }
  
  
  // ==========================
  // INICIALIZAÇÃO GERAL
  // ==========================
  document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    renderNoticias();    // Home: bloco de avisos
    renderTimeline();    // Tela história
    renderGalleryFilters();
    renderGalleryImages(0); // Começa na primeira categoria
    setupGalleryFilters();
    renderSchedule();
    renderEvents();
    renderNextEventHome();
  });
  