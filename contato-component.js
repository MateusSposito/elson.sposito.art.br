/**
 * Componente de Contato e Redes - Elson Sposito
 * Injeta a seção de contato com YouTube, Instagram e Mercado Livre.
 */
function renderContato() {
    const contatoContainer = document.getElementById('contato-placeholder');
    
    if (contatoContainer) {
        contatoContainer.innerHTML = `
            <section id="contato" class="mb-16">
                <div class="card p-8 md:p-10 text-center">
                    <h2 class="section-title mb-10">Entre em Contato</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-8">
                        Para encomendas personalizadas ou dúvidas, entre em contato diretamente. Se deseja acompanhar o processo de criação ou adquirir uma peça pronta, visite nossos canais abaixo.
                    </p>
                    
                    <div class="mb-12">
                        <a href="mailto:elson@sposito.art.br" class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-md inline-block transform hover:-translate-y-1">
                            Enviar E-mail
                        </a>
                    </div>

                    <h3 class="text-xl font-bold text-gray-800 mb-6">Onde nos encontrar</h3>
                    <div class="flex flex-wrap justify-center items-center gap-4">
                        
                        <a href="https://www.youtube.com/@SpositoArtBr" 
                           target="_blank" 
                           class="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md w-full sm:w-auto flex items-center justify-center space-x-2 transform hover:-translate-y-1">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            <span>YouTube</span>
                        </a>

                        <a href="https://www.instagram.com/elsonsposito" 
                           target="_blank" 
                           class="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md w-full sm:w-auto flex items-center justify-center space-x-2 transform hover:-translate-y-1">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            <span>Instagram</span>
                        </a>

                        <a href="https://www.mercadolivre.com.br/pagina/spositoartbr#from=share_eshop" 
                           target="_blank" 
                           class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md w-full sm:w-auto transform hover:-translate-y-1">
                             Mercado Livre
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

// Inicialização
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderContato);
} else {
    renderContato();
}
