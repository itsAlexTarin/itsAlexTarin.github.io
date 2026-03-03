/**
 * =============================================================================
 * МЕНЕДЖЕР КАРТОЧЕК
 * Логика создания, редактирования, перемещения карточек
 * =============================================================================
 */

class CardManager {
    constructor(dataLoader, uiManager) {
        this.dataLoader = dataLoader;
        this.uiManager = uiManager;
        this.draggedCardIndex = null;
    }

    /**
     * Инициализация блока карточек
     */
    async initBlock(blockId) {
        const container = document.querySelector(`.danayi-cards[data-block-id="${blockId}"]`);
        if (!container) return;

        const cards = await this.dataLoader.loadCards(blockId);
        this.renderCards(container, cards, blockId);
    }

    /**
     * Отрисовка карточек
     */
    renderCards(container, cards, blockId) {
        container.innerHTML = '';

        // Сортировка по order
        cards.sort((a, b) => a.order - b.order);

        if (cards.length === 0) {
            const emptyMsg = document.createElement('p');
            emptyMsg.textContent = this.dataLoader.t('no_cards');
            emptyMsg.style.cssText = 'color:var(--color-text-muted);grid-column:1/-1;text-align:center;padding:20px;';
            container.appendChild(emptyMsg);
            return;
        }

        cards.forEach((card, index) => {
            this.createCardElement(container, card, index, blockId);
        });
    }

    /**
     * Создание элемента карточки
     */
    createCardElement(container, card, index, blockId) {
        const cardEl = document.createElement('div');
        cardEl.className = `danayi-card danayi-card-${card.type}`;
        cardEl.setAttribute('data-index', index);
        cardEl.setAttribute('data-block-id', blockId);
        cardEl.setAttribute('draggable', 'true');

        // Контент
        const contentEl = document.createElement('div');
        contentEl.className = 'danayi-card-content';

        const side1El = document.createElement('div');
        side1El.className = 'danayi-side side-1';
        const text1 = document.createElement('div');
        text1.className = 'danayi-text';
        text1.textContent = card.side1 || '---';
        side1El.appendChild(text1);

        const side2El = document.createElement('div');
        side2El.className = 'danayi-side side-2';
        const text2 = document.createElement('div');
        text2.className = 'danayi-text';
        text2.textContent = card.side2 || '---';
        side2El.appendChild(text2);

        contentEl.appendChild(side1El);
        contentEl.appendChild(side2El);
        cardEl.appendChild(contentEl);

        // События
        this.attachCardEvents(cardEl, index, blockId);

        container.appendChild(cardEl);
    }

    /**
     * Навешивание событий на карточку
     */
    attachCardEvents(cardEl, index, blockId) {
        // Переворот по клику
        cardEl.addEventListener('click', (e) => {
            if (e.button !== 2) {
                cardEl.classList.toggle('flipped');
            }
        });

        // Контекстное меню
        cardEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.uiManager.showContextMenu(e, index, blockId);
        });

        // Drag and Drop
        cardEl.addEventListener('dragstart', () => {
            this.draggedCardIndex = index;
            cardEl.classList.add('dragging');
        });

        cardEl.addEventListener('dragend', () => {
            cardEl.classList.remove('dragging');
            this.draggedCardIndex = null;
        });

        cardEl.addEventListener('dragover', (e) => e.preventDefault());

        cardEl.addEventListener('drop', (e) => {
            e.preventDefault();
            if (this.draggedCardIndex !== null) {
                this.moveCard(blockId, this.draggedCardIndex, index);
            }
        });
    }

    /**
     * Перемещение карточки
     */
    async moveCard(blockId, fromIndex, toIndex) {
        const cards = await this.dataLoader.loadCards(blockId);
        
        if (fromIndex >= 0 && fromIndex < cards.length && 
            toIndex >= 0 && toIndex < cards.length) {
            
            const [moved] = cards.splice(fromIndex, 1);
            cards.splice(toIndex, 0, moved);
            
            // Пересчет order
            cards.forEach((card, i) => card.order = i + 1);
            
            this.dataLoader.saveCards(blockId, cards);
            
            const container = document.querySelector(`.danayi-cards[data-block-id="${blockId}"]`);
            this.renderCards(container, cards, blockId);
            
            this.uiManager.showNotice(this.dataLoader.t('card_moved'));
        }
    }

    /**
     * Добавление карточки
     */
    async addCard(blockId, side1, side2, type) {
        const cards = await this.dataLoader.loadCards(blockId);
        
        const newCard = {
            order: cards.length + 1,
            type: type,
            side1: side1,
            side2: side2
        };
        
        cards.push(newCard);
        this.dataLoader.saveCards(blockId, cards);
        
        const container = document.querySelector(`.danayi-cards[data-block-id="${blockId}"]`);
        this.renderCards(container, cards, blockId);
        
        this.uiManager.showNotice(this.dataLoader.t('card_added'));
    }

    /**
     * Обновление карточки
     */
    async updateCard(blockId, index, side1, side2, type) {
        const cards = await this.dataLoader.loadCards(blockId);
        
        if (cards[index]) {
            cards[index].side1 = side1;
            cards[index].side2 = side2;
            cards[index].type = type;
            
            this.dataLoader.saveCards(blockId, cards);
            
            const container = document.querySelector(`.danayi-cards[data-block-id="${blockId}"]`);
            this.renderCards(container, cards, blockId);
            
            this.uiManager.showNotice(this.dataLoader.t('card_updated'));
        }
    }

    /**
     * Удаление карточки
     */
    async deleteCard(blockId, index) {
        const cards = await this.dataLoader.loadCards(blockId);
        
        cards.splice(index, 1);
        
        // Пересчет order
        cards.forEach((card, i) => card.order = i + 1);
        
        this.dataLoader.saveCards(blockId, cards);
        
        const container = document.querySelector(`.danayi-cards[data-block-id="${blockId}"]`);
        this.renderCards(container, cards, blockId);
        
        this.uiManager.showNotice(this.dataLoader.t('card_deleted'));
    }

    /**
     * Изменение типа карточки
     */
    async changeCardType(blockId, index, newType) {
        const cards = await this.dataLoader.loadCards(blockId);
        
        if (cards[index]) {
            cards[index].type = newType;
            this.dataLoader.saveCards(blockId, cards);
            
            const container = document.querySelector(`.danayi-cards[data-block-id="${blockId}"]`);
            this.renderCards(container, cards, blockId);
        }
    }
}
