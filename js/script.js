document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Pesquisa
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', function() {
        if(searchInput.value.trim() !== '') {
            alert('Pesquisando por: ' + searchInput.value);
            // Aqui você pode adicionar a lógica real de pesquisa
        }
    });
    
    // Permitir pesquisa ao pressionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            searchBtn.click();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const allNewsSection = document.getElementById('allNews');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const searchResults = document.getElementById('searchResults');
    const searchResultsTitle = document.getElementById('searchResultsTitle');

    // Função principal de busca
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm.length < 2) {
            searchResultsContainer.style.display = 'none';
            allNewsSection.style.display = 'block';
            return;
        }

        // Esconde todas as notícias
        allNewsSection.style.display = 'none';
        
        // Filtra notícias que contém o termo buscado
        const newsCards = document.querySelectorAll('.news-card');
        let foundResults = false;
        searchResults.innerHTML = '';

        newsCards.forEach(card => {
            const keywords = card.getAttribute('data-keywords').toLowerCase();
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (keywords.includes(searchTerm) || 
                title.includes(searchTerm) || 
                content.includes(searchTerm)) {
                
                // Clona a notícia para mostrar nos resultados
                const clonedCard = card.cloneNode(true);
                searchResults.appendChild(clonedCard);
                foundResults = true;
            }
        });

        // Mostra os resultados
        searchResultsTitle.textContent = foundResults ? 
            `Resultados para "${searchTerm}"` : 
            `Nenhum resultado encontrado para "${searchTerm}"`;
        searchResultsContainer.style.display = 'block';
    }

    // Event listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
});