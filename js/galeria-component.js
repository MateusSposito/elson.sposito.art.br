/**
 * Componente de Galeria Dinâmica com Vídeo - Elson Sposito
 * Gerencia o acervo, filtros, grid e modal com suporte a múltiplas fotos e YouTube.
 */

const acervoObras = [
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
        titulo: "Menino Lendo 01",
        categoria: "Cotidiano",
        colecao: "Leitura na Pedra",
        descricao: "Peça número 1 da coleção Leitura na Pedra, focada no incentivo à leitura.",
        dimensoes: "7cm x 7cm x 14cm",
        peso: "153g",
        materiais: "Arame, tela metálica, solda plástica e base em pedra natural.",
        fotos: ["assets/obras/menino_lendo_01.jpg"], // Transformado em lista para não dar erro
        videoID: "",
        linkML: "https://www.mercadolivre.com.br/pagina/spositoartbr"
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
            .galeria-section { padding: 2rem 0; }
            .filtros-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 30px; }
            .btn-filtro { padding: 8px 20px; border-radius: 20px; border: 1px solid #1e3a8a; background: white; color: #1e3a8a; cursor: pointer; transition: 0.3s; font-weight: bold; }
            .btn-filtro.active, .btn-filtro:hover { background: #1e3a8a; color: white; }
            .obras-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; padding: 10px; }
            .obra-item { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); cursor: pointer; transition: 0.3s; }
            .obra-item:hover { transform: translateY(-8px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
            .obra-item img { width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; }
            .obra-info { padding: 15px; text-align: center; }
            .obra-info h3 { margin: 0; color: #1e3a8a; font-size: 1.15rem; }
            
            .modal-obra { display: none; position: fixed; z-index: 10000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); align-items: center; justify-content: center; padding: 15px; }
            .modal-content { background: white; max-width: 1000px; width: 100%; max-height: 90vh; border-radius: 24px; overflow: hidden; display: flex; flex-direction: column; }
            @media (min-width: 768px) { .modal-content { flex-direction: row; } }
            
            .modal-media { flex: 1.2; background: #f3f4f6; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 350px; }
            #container-media { width: 100%; height: 100%; display: flex; flex-direction: column; }
            .main-img { width: 100%; height: 100%; object-fit: contain; flex-grow: 1; }
            .thumb-container { display: flex; justify-content: center; gap: 8px; padding: 10px; background: #eee; width: 100%; overflow-x: auto; }
            .thumb { width: 50px; height: 50px; object-fit: cover; cursor: pointer; border: 2px solid transparent; border-radius: 4px; }
            .thumb.active { border-color: #1e3a8a; }

            .modal-detalhes { flex: 1; padding: 30px; overflow-y: auto; position: relative; }
            .close-modal { position: absolute; top: 10px; right: 20px; font-size: 35px; cursor: pointer; color: #999; z-index: 10; }
            .tech-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .tech-table td { padding: 8px 0; border-bottom: 1px solid #eee; font-size: 0.9rem; }
            .btn-ml { display: block; text-align: center; background: #ffdb15; color: #000; padding: 14px; border-radius: 50px; text-decoration: none; font-weight: bold; margin-top: 20px; }
            .btn-video-toggle { width: 100%; margin-top: 10px; padding: 12px; border: 2px solid #1e3a8a; background: white; color: #1e3a8a; border-radius: 50px; cursor: pointer; font-weight: bold; }
        </style>

        <div class="galeria-section">
            <div class="filtros-container" id="filtros-nav">
                ${categorias.map(cat => `<button class="btn-filtro ${cat==='Todas'?'active':''}" onclick="filtrarObras('${cat}', this)">${cat}</button>`).join('')}
            </div>
            <div class="obras-grid" id="grid-obras"></div>
        </div>

        <div id="modalObra" class="modal-obra" onclick="fecharModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-media" id="container-media"></div>
                <div class="modal-detalhes">
                    <span class="close-modal" onclick="fecharModal()">&times;</span>
                    <h2 id="m-titulo" style="color: #1e3a8a; margin-top:0;"></h2>
                    <p id="m-desc" style="color: #666;"></p>
                    <table class="tech-table">
                        <tr><td><b>Materiais:</b></td><td id="m-mat"></td></tr>
                        <tr><td><b>Dimensões:</b></td><td id="m-dim"></td></tr>
                        <tr><td><b>Peso:</b></td><td id="m-peso"></td></tr>
                    </table>
                    <a id="m-link" href="" target="_blank" class="btn-ml">Ver no Mercado Livre</a>
                    <button id="btn-alternar" onclick="alternarMedia()" class="btn-video-toggle" style="display:none;">🎬 Ver Vídeo da Peça</button>
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
            <img src="${o.fotos[0]}" alt="${o.titulo}" loading="lazy">
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
    btnVideo.innerText = "🎬 Ver Vídeo da Peça";

    exibirFoto(0);
    document.getElementById('modalObra').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

window.exibirFoto = function(index = 0) {
    const container = document.getElementById('container-media');
    let html = `<img src="${obraAtual.fotos[index]}" class="main-img">`;
    
    if (obraAtual.fotos.length > 1) {
        html += `<div class="thumb-container">`;
        obraAtual.fotos.forEach((foto, i) => {
            html += `<img src="${foto}" class="thumb ${i === index ? 'active' : ''}" onclick="exibirFoto(${i})">`;
        });
        html += `</div>`;
    }
    
    container.innerHTML = html;
    mostrandoVideo = false;
    document.getElementById('btn-alternar').innerText = "🎬 Ver Vídeo da Peça";
}

window.alternarMedia = function() {
    const container = document.getElementById('container-media');
    const btn = document.getElementById('btn-alternar');
    
    if (!mostrandoVideo) {
        container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${obraAtual.videoID}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="flex-grow:1;"></iframe>`;
        btn.innerText = "🖼️ Ver Fotos da Peça";
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
