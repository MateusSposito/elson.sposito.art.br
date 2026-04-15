/**
 * Componente de Galeria Dinâmica - Elson Sposito
 * Versão Ultra-Otimizada para Mobile (Botões e Miniaturas Visíveis)
 */

const acervoObras = [
    {
        id: 6,
        titulo: "Brincando de Girar",
        categoria: "Brincadeiras",
        colecao: "Brincadeiras",
        descricao: "A escultura 'Brincando de Girar' retrata aquela sensação clássica de liberdade da infância.",
        dimensoes: "19cm x 9cm x 19cm",
        peso: "388g",
        materiais: "Arame, tela de alumínio, solda plástica, esponja de aço, arenito e resina epóxi.",
        fotos: [
            "assets/obras/20260414_094603.jpg", 
            "assets/obras/20260414_094721.jpg",
            "assets/obras/20260414_094733.jpg",
            "assets/obras/20260414_094802.jpg", 
            "assets/obras/20260414_094818.jpg",
            "assets/obras/20260414_094824.jpg",
            "assets/obras/20260414_094832.jpg", 
        ],
        videoID: "NF3KqKJB89g",
        linkML: "https://www.mercadolivre.com.br/escultura-brincando-de-girar-19cm--elson-sposito/up/MLBU3896588781"
    },
    
    {
        id: 1,
        titulo: "Cantando na Chuva",
        categoria: "Cinema",
        colecao: "Clássicos",
        descricao: "Inspirada na famosa cena de Gene Kelly no filme 'Singin in the Rain'.",
        dimensoes: "15cm x 17cm x 33cm",
        peso: "554g",
        materiais: "Arame, tela de alumínio, solda plástica, arenito e resina epóxi.",
        fotos: [
            "assets/obras/20260226_154757.jpg", 
            "assets/obras/20260226_154819.jpg",
            "assets/obras/20260226_154918.jpg",
            "assets/obras/20260226_154939.jpg", 
            "assets/obras/20260226_155001.jpg",
            "assets/obras/20260226_155008.jpg",
            "assets/obras/20260226_155019.jpg", 
            "assets/obras/20260226_155027.jpg",
            "assets/obras/20260226_155042.jpg"
        ],
        videoID: "kDK3djcVUno",
        linkML: "https://www.mercadolivre.com.br/escultura-original-cantando-na-chuva-gene-kelly-33cm-sposito/up/MLBU3809321771"
    },
    {
        id: 2,
        titulo: "Paleta de Brincadeiras",
        categoria: "Brincadeiras",
        colecao: "Paleta De Brincadeiras",
        descricao: "Uma obra de arte que celebra a essência da infância e a criatividade. A base em formato de paleta de pintor serve como cenário para personagens que, como se surgissem das tintas, imortalizam brincadeiras clássicas.",
        dimensoes: "20cm x 23cm x 30cm",
        peso: "240g",
        materiais: "Arame, Tela Metálica, Solda Plástica, Celulose, Silicone e MDF",
        fotos: ["assets/obras/Paleta01.jpg",
               "assets/obras/Paleta02.jpg",
               "assets/obras/20260409_084439.jpg",
               "assets/obras/20260409_084446.jpg",
               "assets/obras/20260409_084423.jpg",
               "assets/obras/20260409_084430.jpg",
               "assets/obras/20260409_084455.jpg",
               "assets/obras/20260409_084505.jpg",
               "assets/obras/20260409_084513.jpg",
               "assets/obras/20260409_084523.jpg",
               "assets/obras/20260409_084532.jpg"],
        videoID: "jDEapkXko7U",
        linkML: "https://www.mercadolivre.com.br/escultura-paleta-de-brincadeiras-30cm--arte-elson-sposito/up/MLBU3896961386"
    },
    {
        id: 3,
        titulo: "Coleção Leitura na Pedra",
        categoria: "Brincadeiras",
        colecao: "Leitura Na Pedra",
        descricao: "Cada peça captura uma cena diferente e lúdica de crianças imersas no mundo dos livros.",
        dimensoes: "Entre 7cm e 21cm de altura",
        peso: "Entre 153g e 376g",
        materiais: "Arame, Tela de Arame, Solda Plástica, Celulose e Base de Pedra Natural",
        fotos: [
               "assets/obras/20260410_144129.jpg",
               "assets/obras/20260410_141552.jpg",
               "assets/obras/20260410_141729.jpg",
               "assets/obras/20260410_141855.jpg",
               "assets/obras/20260410_142011.jpg",
               "assets/obras/20260410_142218.jpg",
               "assets/obras/20260411_113734.jpg",
               "assets/obras/20260411_113855.jpg",
               "assets/obras/20260411_113927.jpg"],
        videoID: "wy6VK2fFD8Q",
        linkML: "https://www.mercadolivre.com.br/escultura-da-colecao-lendo-na-pedra/up/MLBU3890491927"
    },
    {
        id: 4,
        titulo: "Gepeto com Pinóquio",
        categoria: "Literatura",
        colecao: "Personagens",
        descricao: "Uma obra de arte que captura a essência da criação e do afeto. A clássica cena de Gepeto dando vida ao Pinóquio.",
        dimensoes: "15cm x 15cm x 25cm",
        peso: "1,26kg",
        materiais: "Arame, Tela de Alumínio, Solda Plástica, Celulose, Linha e Base de Pedra Natura",
        fotos: [
               "assets/obras/20260411_192311.jpg",
               "assets/obras/20260411_192342.jpg",
               "assets/obras/20260411_192357.jpg",
               "assets/obras/20260411_192413.jpg",
               "assets/obras/20260411_192439.jpg",
               "assets/obras/20260411_192500.jpg",
               "assets/obras/20260411_192512.jpg",
               "assets/obras/20260411_192533.jpg"],
        videoID: "D_O25VjCPGc",
        linkML: "https://www.mercadolivre.com.br/escultura-gepeto-e-pinoquio-com-25cm--elson-sposito/up/MLBU3891231155"
    },
    {
        id: 5,
        titulo: "Chaplin com Balão",
        categoria: "Cinema",
        colecao: "Personagens",
        descricao: "Uma obra que desafia a gravidade e celebra a poesia do cinema mudo.",
        dimensoes: "7,5cm x 14,5cm x 42cm",
        peso: "1,26kg",
        materiais: "Arame, Tela de Alumínio, Solda Plástica, Celulose e Arenito",
        fotos: [
               "assets/obras/20260226_154546.jpg",
               "assets/obras/20260226_154613.jpg",
               "assets/obras/20260226_154624.jpg",
               "assets/obras/20260226_154635.jpg",
               "assets/obras/20260226_154705.jpg",
               "assets/obras/20260226_154715.jpg",
               "assets/obras/20260226_154722.jpg",
               "assets/obras/20260226_154727.jpg"],
        videoID: "9SQCvju9HpU",
        linkML: "https://www.mercadolivre.com.br/escultura-original-charles-chaplin-balao-42cm-elson-sposito/up/MLBU3809435949"
    },
    {
        id: 6,
        titulo: "Soltando Pipas",
        categoria: "Brincadeiras",
        colecao: "Brincadeiras",
        descricao: "Esta peça captura com sensibilidade a essência da infância brasileira e a liberdade de voar sem tirar os pés do chão.",
        dimensoes: "15cm x 7cm x 38cm",
        peso: "380g",
        materiais: "Arame, Tela de Alumínio, Solda Plástica, Celulose e Arenito",
        fotos: [
               "assets/obras/20260225_124126.jpg",
               "assets/obras/20260225_124230.jpg",
               "assets/obras/20260225_124306.jpg",
               "assets/obras/20260225_124329.jpg",
               "assets/obras/20260225_124341.jpg",
               "assets/obras/20260225_124357.jpg",
               "assets/obras/20260225_124421.jpg",
               "assets/obras/20260225_124437.jpg"],
        videoID: "vix2rNypXMk",
        linkML: "https://www.mercadolivre.com.br/escultura-criancas-empinando-pipa--elson-sposito--38cm/up/MLBU3806343293"
    }
];

let obraAtual = null;
let mostrandoVideo = false;

function renderGaleria() {
    const container = document.getElementById('galeria-placeholder');
    if (!container) return;

    const categorias = ["Todas", ...new Set(acervoObras.map(o => o.categoria))];

    container.innerHTML = `
        <style>
            .galeria-section { padding: 1rem 0; font-family: sans-serif; }
            .filtros-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 20px; }
            .btn-filtro { padding: 6px 15px; border-radius: 20px; border: 1px solid #1e3a8a; background: white; color: #1e3a8a; cursor: pointer; font-weight: bold; font-size: 0.9rem; }
            .btn-filtro.active { background: #1e3a8a; color: white; }
            
            .obras-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 15px; padding: 10px; }
            .obra-item { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer; }
            .obra-item img { width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; }
            .obra-info { padding: 10px; text-align: center; }
            .obra-info h3 { margin: 0; color: #1e3a8a; font-size: 0.9rem; }
            
            /* Modal Ajustado */
            .modal-obra { display: none; position: fixed; z-index: 10000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); align-items: center; justify-content: center; }
            .modal-content { 
                background: white; width: 95%; max-width: 900px; max-height: 95vh; 
                border-radius: 20px; overflow-y: auto; display: flex; flex-direction: column; position: relative;
            }
            @media (min-width: 768px) { .modal-content { flex-direction: row; overflow: hidden; } }

            /* Área da Mídia */
            .modal-media { background: #f8f9fa; display: flex; flex-direction: column; width: 100%; }
            @media (min-width: 768px) { .modal-media { width: 55%; height: 100%; } }

            .main-img-container { width: 100%; height: 250px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
            @media (min-width: 768px) { .main-img-container { height: 400px; } }
            
            .main-img { max-width: 100%; max-height: 100%; object-fit: contain; }

            .thumb-container { 
                display: flex; gap: 8px; padding: 10px; background: #eee; 
                overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;
                z-index: 10001; position: relative; /* Garante clique */
            }
            .thumb { width: 50px; height: 50px; object-fit: cover; border-radius: 4px; border: 2px solid transparent; flex-shrink: 0; cursor: pointer; }
            .thumb.active { border-color: #1e3a8a; }

            /* Detalhes */
            .modal-detalhes { padding: 20px; flex: 1; }
            @media (min-width: 768px) { .modal-detalhes { overflow-y: auto; } }

            .close-modal { position: absolute; top: 10px; right: 15px; font-size: 30px; cursor: pointer; color: #aaa; z-index: 10002; }
            
            .tech-table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
            .tech-table td { padding: 6px 0; border-bottom: 1px solid #eee; font-size: 0.85rem; color: #444; }
            
            .btn-ml { display: block; text-align: center; background: #ffdb15; color: #000; padding: 12px; border-radius: 30px; text-decoration: none; font-weight: bold; margin-bottom: 10px; font-size: 0.9rem; }
            .btn-video-toggle { width: 100%; padding: 10px; border: 2px solid #1e3a8a; background: white; color: #1e3a8a; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 0.85rem; }
        </style>

        <div class="galeria-section">
            <div class="filtros-container" id="filtros-nav">
                ${categorias.map(cat => `<button class="btn-filtro ${cat==='Todas'?'active':''}" onclick="filtrarObras('${cat}', this)">${cat}</button>`).join('')}
            </div>
            <div class="obras-grid" id="grid-obras"></div>
        </div>

        <div id="modalObra" class="modal-obra" onclick="fecharModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <span class="close-modal" onclick="fecharModal()">&times;</span>
                <div class="modal-media" id="container-media"></div>
                <div class="modal-detalhes">
                    <h2 id="m-titulo" style="color: #1e3a8a; font-size: 1.2rem; margin: 0 0 10px 0;"></h2>
                    <p id="m-desc" style="color: #666; font-size: 0.85rem; margin-bottom: 15px;"></p>
                    <table class="tech-table">
                        <tr><td><b>Materiais:</b></td><td id="m-mat"></td></tr>
                        <tr><td><b>Dimensões:</b></td><td id="m-dim"></td></tr>
                        <tr><td><b>Peso:</b></td><td id="m-peso"></td></tr>
                    </table>
                    <a id="m-link" href="" target="_blank" class="btn-ml">Ver no Mercado Livre</a>
                    <button id="btn-alternar" onclick="alternarMedia()" class="btn-video-toggle" style="display:none;">🎬 Ver Vídeo</button>
                </div>
            </div>
        </div>
    `;
    filtrarObras('Todas');
}

window.filtrarObras = function(categoria, btn) {
    const grid = document.getElementById('grid-obras');
    const filtradas = categoria === 'Todas' ? acervoObras : acervoObras.filter(o => o.categoria === categoria);
    grid.innerHTML = filtradas.map(o => `
        <div class="obra-item" onclick="abrirModal(${o.id})">
            <img src="${o.fotos[0]}" alt="${o.titulo}">
            <div class="obra-info"><h3>${o.titulo}</h3></div>
        </div>
    `).join('');
    if(btn) {
        document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
}

window.abrirModal = function(id) {
    obraAtual = acervoObras.find(item => item.id === id);
    mostrandoVideo = false;
    document.getElementById('m-titulo').innerText = obraAtual.titulo;
    document.getElementById('m-desc').innerText = obraAtual.descricao;
    document.getElementById('m-mat').innerText = obraAtual.materiais;
    document.getElementById('m-dim').innerText = obraAtual.dimensoes;
    document.getElementById('m-peso').innerText = obraAtual.peso;
    document.getElementById('m-link').href = obraAtual.linkML;
    const btnVideo = document.getElementById('btn-alternar');
    btnVideo.style.display = obraAtual.videoID ? 'block' : 'none';
    exibirFoto(0);
    document.getElementById('modalObra').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

window.exibirFoto = function(index = 0) {
    const container = document.getElementById('container-media');
    let html = `
        <div class="main-img-container">
            <img src="${obraAtual.fotos[index]}" class="main-img">
        </div>
    `;
    if (obraAtual.fotos.length > 1) {
        html += `<div class="thumb-container">`;
        obraAtual.fotos.forEach((foto, i) => {
            html += `<img src="${foto}" class="thumb ${i === index ? 'active' : ''}" onclick="exibirFoto(${i})">`;
        });
        html += `</div>`;
    }
    container.innerHTML = html;
    mostrandoVideo = false;
    document.getElementById('btn-alternar').innerText = "🎬 Ver Vídeo";
}

window.alternarMedia = function() {
    const container = document.getElementById('container-media');
    const btn = document.getElementById('btn-alternar');
    if (!mostrandoVideo) {
        container.innerHTML = `
            <div class="main-img-container" style="background:#000;">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${obraAtual.videoID}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        `;
        btn.innerText = "🖼️ Ver Fotos";
        mostrandoVideo = true;
    } else {
        exibirFoto(0);
    }
}

window.fecharModal = function() {
    document.getElementById('modalObra').style.display = 'none';
    document.getElementById('container-media').innerHTML = '';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', renderGaleria);
