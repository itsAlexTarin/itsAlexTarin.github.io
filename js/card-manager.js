/**
 * =============================================================================
 * МЕНЕДЖЕР КАРТОЧЕК
 * Логика для инлайн-карточек
 * =============================================================================
 */

class CardManager {
    constructor(dataLoader, uiManager) {
        this.dataLoader = dataLoader;
        this.uiManager = uiManager;
        this.cards = {};
    }

    async init() {
        this.cards = await this.dataLoader.loadCards();
        this.renderAllCards();
    }

    renderAllCards() {
        document.querySelectorAll('.inline-card').forEach(cardEl => {
            this.renderCard(cardEl);
        });
    }

    renderCard(cardEl) {
        const cardId = cardEl.getAttribute('data-card-id');
        const cardData = this.cards[cardId];

        if (cardData) {
            cardEl.textContent = cardData.side1 || cardEl.textContent;
            cardEl.setAttribute('data-side2', cardData.side2 || '');
            cardEl.setAttribute('data-type', cardData.type || 'medium');
            
            // Обновление класса типа
            cardEl.classList.remove('inline-card-compact', 'inline-card-medium', 'inline-card-wide');
            cardEl.classList.add(`inline-card-${cardData.type || 'medium'}`);
        }

        this.attachCardEvents(cardEl);
    }

    attachCardEvents(cardEl) {
        // Переворот по клику
        cardEl.addEventListener('click', (e) => {
            if (e.button !== 2) {
                this.flipCard(cardEl);
            }
        });

        // Контекстное меню
        cardEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.uiManager.showContextMenu(e, cardEl);
        });
    }

    flipCard(cardEl) {
        const side1 = cardEl.textContent;
        const side2 = cardEl.getAttribute('data-side2');

        if (cardEl.classList.contains('flipped')) {
            cardEl.textContent = side1;
            cardEl.classList.remove('flipped');
        } else {
            if (side2) {
                cardEl.textContent = side2;
                cardEl.classList.add('flipped');
            }
        }
    }

    updateCard(cardId, side1, side2, type) {
        this.cards[cardId] = { side1, side2, type };
        this.dataLoader.saveCards(this.cards);

        const cardEl = document.querySelector(`.inline-card[data-card-id="${cardId}"]`);
        if (cardEl) {
            this.renderCard(cardEl);
        }

        this.uiManager.showNotice(this.dataLoader.t('card_updated'));
    }

    deleteCard(cardId) {
        delete this.cards[cardId];
        this.dataLoader.saveCards(this.cards);

        const cardEl = document.querySelector(`.inline-card[data-card-id="${cardId}"]`);
        if (cardEl) {
            cardEl.style.textDecoration = 'line-through';
            cardEl.style.opacity = '0.5';
            cardEl.style.pointerEvents = 'none';
        }

        this.uiManager.showNotice(this.dataLoader.t('card_deleted'));
    }

    changeCardType(cardId, newType) {
        if (this.cards[cardId]) {
            this.cards[cardId].type = newType;
            this.dataLoader.saveCards(this.cards);

            const cardEl = document.querySelector(`.inline-card[data-card-id="${cardId}"]`);
            if (cardEl) {
                this.renderCard(cardEl);
            }

            this.uiManager.showNotice(this.dataLoader.t('type_changed'));
        }
    }

    resetAllCards() {
        this.dataLoader.clearData();
        this.cards = {};
        location.reload();
    }
}
