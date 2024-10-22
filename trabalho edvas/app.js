// Dados das categorias e itens
const itemsByCategory = {
    cleaning: ["Sabão", "Detergente", "Água Sanitária"],
    food: ["Arroz", "Feijão", "Macarrão"],
    utilities: ["Papel Higiênico", "Esponja", "Vassoura"]
};

// Carregar itens com base na categoria selecionada
function loadItems() {
    const category = document.getElementById("category").value;
    const itemsDropdown = document.getElementById("items");

    // Limpar os itens anteriores
    itemsDropdown.innerHTML = '';

    if (category && itemsByCategory[category]) {
        itemsByCategory[category].forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.text = item;
            itemsDropdown.add(option);
        });
    }
}

// Adicionar item à lista de selecionados
function addItem() {
    const selectedItem = document.getElementById("items").value;
    const selectedItemsList = document.getElementById("selected-items");

    if (selectedItem) {
        const li = document.createElement("li");
        li.textContent = selectedItem;
        selectedItemsList.appendChild(li);
    }
}

// Registrar o service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registrado com sucesso:', registration);
            })
            .catch(error => {
                console.log('Falha ao registrar o Service Worker:', error);
            });
    });
}
