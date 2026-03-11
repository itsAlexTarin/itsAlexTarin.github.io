/* =============================================================================
STYLE: MINIMALIST WITH GREEN ACCENT
============================================================================= */
:root {
    --color-bg: #000000;
    --color-bg-secondary: #0a0a0a;
    --color-text: #ffffff;
    --color-text-muted: #808080;
    --color-border: #333333;
    --color-accent: #059669;
    --color-accent-light: #10B981;
    --color-accent-bg: rgba(5, 150, 105, 0.15);
    --color-accent-text: #ffffff;
    --color-card-bg: #272727a1;
    --font-main: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --size-text: 14px;
    --line-height: 1.6;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 18px;
    --spacing-lg: 24px;
}

body.light-theme {
    --color-bg: #ffffff;
    --color-bg-secondary: #f9f9f9;
    --color-text: #000000;
    --color-text-muted: #666666;
    --color-border: #cccccc;
    --color-accent: #059669;
    --color-accent-light: #10B981;
    --color-accent-bg: rgba(5, 150, 105, 0.25);
    --color-accent-text: #000000;
    --color-card-bg: #8f8f8f2c;
}

/* =============================================================================
RESET & BASE
============================================================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-main);
    font-size: var(--size-text);
    line-height: var(--line-height);
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-border);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-text-muted);
}

/* =============================================================================
LAYOUT
============================================================================= */
.document-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-sm);
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px 13px;
    margin-bottom: var(--spacing-lg);
    border-bottom: 2px solid var(--color-border);
}

.page-title {
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: 8px;
}

.theme-toggle {
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    font-family: var(--font-main);
    font-size: 10px;
    padding: 6px 14px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.2s ease;
}

.theme-toggle:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
}

/* =============================================================================
MAIN GRID
============================================================================= */
.main-grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: var(--spacing-lg);
    align-items: stretch;
}

.left-column, .right-column {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    min-height: 0;
}

.content-section {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    padding: var(--spacing-md);
}

.content-section.full-width {
    grid-column: 1 / -1;
}

.content-section.full-height {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.section-title {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-text-muted);
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-xs);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

/* =============================================================================
DOSSIER SECTION (Large Block)
============================================================================= */
.dossier-section {
    flex: 2;
}

.about-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--spacing-lg);
    align-items: start;
}

.about-image {
    float: left;
    margin-right: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
}

.image-frame {
    border: 1px solid var(--color-border);
    padding: var(--spacing-sm);
    background: var(--color-bg);
}

.image-placeholder {
    aspect-ratio: 3/4;
    background: var(--color-card-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-border);
}

.placeholder-text {
    font-family: var(--font-main);
    color: var(--color-text-muted);
    text-align: center;
    letter-spacing: 1px;
    line-height: 1.8;
    font-size: 11px;
    text-transform: uppercase;
}

.image-caption {
    font-family: var(--font-main);
    color: var(--color-text-muted);
    font-size: 9px;
    text-align: center;
    letter-spacing: 1px;
    margin-top: var(--spacing-xs);
    text-transform: uppercase;
}

.about-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.about-lead {
    font-size: 14px;
    color: var(--color-text);
    line-height: 1.6;
}

.about-text {
    color: var(--color-text-muted);
    font-size: 13px;
    line-height: 1.6;
}

.credentials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-sm);
    padding: var(--spacing-md) 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
}

.credential-item {
    text-align: center;
}

.credential-number {
    display: block;
    font-size: 24px;
    color: var(--color-accent);
    font-weight: 700;
    margin-bottom: 4px;
    letter-spacing: 1px;
}

.credential-label {
    font-family: var(--font-main);
    color: var(--color-text-muted);
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.about-list {
    list-style: none;
    padding-left: 0;
    clear: both;
}

.about-list li {
    color: var(--color-text-muted);
    font-size: 12px;
    margin-bottom: var(--spacing-xs);
    padding-left: var(--spacing-md);
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* =============================================================================
CONTACTS SECTION (Small Block)
============================================================================= */
.contacts-section {
    flex-shrink: 0;
}

.contact-compact-grid {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
}

.contact-compact-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    border: 1px solid var(--color-border);
    transition: all 0.2s ease;
}

.contact-compact-item:hover {
    border-color: var(--color-accent);
    background: var(--color-accent-bg);
}

.contact-icon {
    font-size: 16px;
    flex-shrink: 0;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.contact-label {
    font-size: 9px;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.contact-value {
    font-size: 12px;
    color: var(--color-text);
    font-weight: 500;
}

.contact-btn {
    width: 100%;
    background: transparent;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    padding: 12px;
    font-size: 11px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.2s ease;
    margin-top: var(--spacing-sm);
}

.contact-btn:hover {
    background: var(--color-accent);
    color: var(--color-accent-text);
}

/* =============================================================================
INFO TABS
============================================================================= */
.info-tabs {
    display: flex;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
    flex-shrink: 0;
}

.tab-btn {
    flex: 1;
    padding: 10px 16px;
    font-size: 11px;
    background: transparent;
    color: var(--color-text-muted);
    font-family: var(--font-main);
    border: 1px solid var(--color-border);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.2s ease;
}

.tab-btn:hover {
    border-color: var(--color-text-muted);
    color: var(--color-text);
}

.tab-btn.active {
    background: var(--color-accent);
    color: var(--color-accent-text);
    border-color: var(--color-accent);
    font-weight: 700;
}

.info-content {
    flex: 1;
    overflow: hidden;
    position: relative;
}

.text-module {
    display: none;
    border-left: 2px solid var(--color-border);
    padding-left: var(--spacing-sm);
    margin-top: var(--spacing-sm);
    transition: border-color 0.3s ease;
    height: 100%;
    overflow-y: auto;
}

.text-module.active {
    display: block;
    animation: fadeIn 0.3s ease;
}

.text-module:hover {
    border-left-color: var(--color-accent);
}

.text-module-title {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-text);
    margin-bottom: var(--spacing-xs);
    letter-spacing: 0.5px;
}

.text-module-content {
    font-size: 14px;
    color: var(--color-text-muted);
    line-height: var(--line-height);
}

.text-module-content p {
    margin-bottom: var(--spacing-sm);
}

.text-module-content p:last-child {
    margin-bottom: 0;
}

/* =============================================================================
ARCHIVE (Fixed Height Desktop, Unlimited Mobile)
============================================================================= */
.archive-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 500px;
}

.archive-section .section-title {
    flex-shrink: 0;
}

.cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--spacing-sm);
    overflow-y: auto;
    padding-right: var(--spacing-xs);
    flex: 1;
}

.case-card {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    padding: var(--spacing-md);
    transition: all 0.2s ease;
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.case-card:hover {
    transform: translateY(-2px);
    border-color: var(--color-accent);
}

.case-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-sm);
    padding-bottom: var(--spacing-xs);
    border-bottom: 1px solid var(--color-border);
    flex-shrink: 0;
}

.case-number {
    font-family: var(--font-main);
    font-size: 9px;
    color: var(--color-text-muted);
    letter-spacing: 1px;
}

.case-status {
    font-family: var(--font-main);
    font-size: 8px;
    padding: 3px 8px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 1px solid;
}

.case-closed {
    border-color: var(--color-accent);
    color: var(--color-accent);
}

.case-card h4 {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: var(--spacing-xs);
    letter-spacing: 0.5px;
    text-transform: uppercase;
    flex-shrink: 0;
}

.case-card p {
    color: var(--color-text-muted);
    font-size: 11px;
    line-height: 1.5;
    margin-bottom: var(--spacing-sm);
    flex: 1;
    overflow: hidden;
    max-height: 6em;
}

.case-meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
    padding: var(--spacing-sm);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    flex-shrink: 0;
}

.meta-label {
    font-family: var(--font-main);
    font-size: 8px;
    color: var(--color-text-muted);
}

.meta-value {
    color: var(--color-text);
    font-size: 10px;
    font-weight: 500;
}

.case-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-xs);
    border-top: 1px solid var(--color-border);
    flex-shrink: 0;
    margin-top: auto;
}

.case-date {
    font-family: var(--font-main);
    font-size: 8px;
    color: var(--color-text-muted);
}

.case-result {
    font-family: var(--font-main);
    font-size: 8px;
    color: var(--color-accent);
    font-weight: 600;
}

/* =============================================================================
LISTS & TABLES
============================================================================= */
.info-list {
    list-style: none;
    padding-left: var(--spacing-sm);
    margin: var(--spacing-sm) 0;
}

.info-list li {
    position: relative;
    padding-left: var(--spacing-sm);
    margin-bottom: var(--spacing-xs);
    color: var(--color-text-muted);
    font-size: 13px;
    line-height: var(--line-height);
}

.info-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    background-color: var(--color-accent);
    border-radius: 50%;
}

.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    min-width: 0;
    margin: var(--spacing-sm) 0;
    border: 1px solid var(--color-border);
}

.data-table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
    font-size: 13px;
    display: table;
}

.data-table th,
.data-table td {
    text-align: left;
    padding: var(--spacing-sm);
    border-bottom: 1px solid var(--color-border);
    white-space: nowrap;
}

.data-table th {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-text-muted);
    font-weight: 600;
    border-bottom: 2px solid var(--color-border);
    background-color: var(--color-bg-secondary);
}

.data-table td {
    color: var(--color-text);
}

.data-table tr:hover td {
    background-color: var(--color-bg-secondary);
    color: var(--color-accent-light);
    transition: all 0.2s ease;
}

.data-table tr:last-child td {
    border-bottom: none;
}

/* =============================================================================
MODAL
============================================================================= */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 1000;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.modal.active {
    display: flex;
}

.modal-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
}

.modal-content {
    position: relative;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    padding: 2rem;
    max-width: 500px;
    width: 100%;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: var(--color-text-muted);
    width: 32px;
    height: 32px;
    cursor: pointer;
    font-size: 1.25rem;
}

.modal-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.modal-classification {
    font-family: var(--font-main);
    font-size: 0.6rem;
    color: var(--color-accent);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border: 1px solid var(--color-accent);
}

.modal-header h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: 2px;
    color: var(--color-text);
}

.modal-header p {
    color: var(--color-text-muted);
    font-size: 0.8rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-family: var(--font-main);
    color: var(--color-text-muted);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.75rem;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    color: var(--color-text);
    font-size: 0.85rem;
    font-family: var(--font-main);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-accent);
}

.submit-btn {
    background: var(--color-accent);
    color: var(--color-accent-text);
    border: none;
    padding: 0.875rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

.submit-btn:hover {
    opacity: 0.9;
}

.modal-note {
    margin-top: 1rem;
    font-family: var(--font-main);
    font-size: 0.65rem;
    color: var(--color-text-muted);
    text-align: center;
}

/* =============================================================================
FOOTER
============================================================================= */
.footer {
    border-top: 1px solid var(--color-border);
    padding: 2rem 1.5rem;
    margin-top: 3rem;
}

.footer-bottom {
    text-align: center;
}

.footer-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    opacity: 0.5;
}

.divider-line {
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
}

.divider-icon {
    color: var(--color-accent);
    font-size: 0.65rem;
}

.footer-bottom p {
    font-family: var(--font-main);
    color: var(--color-text-muted);
    font-size: 0.7rem;
}

.footer-archive {
    margin-top: 0.4rem;
    font-size: 0.65rem;
    color: var(--color-accent);
}

/* =============================================================================
UTILITIES
============================================================================= */
.list-marker {
    width: 5px;
    height: 5px;
    background-color: var(--color-accent);
    border: 1px solid var(--color-accent);
    transform: rotate(45deg);
    flex-shrink: 0;
}

.head-marker {
    width: 8px;
    height: 8px;
    border: 1px solid var(--color-accent);
    transform: rotate(45deg);
    transition: all 0.2s ease;
}

/* =============================================================================
RESPONSIVE
============================================================================= */
@media (max-width: 1024px) {
    .main-grid {
        grid-template-columns: 1fr;
    }

    .about-layout {
        grid-template-columns: 1fr;
    }

    .about-image {
        float: none;
        margin-right: 0;
        width: 200px;
        margin-bottom: var(--spacing-md);
    }

    .about-content {
        overflow: hidden;
    }

    .archive-section {
        max-height: 600px;
    }

    .cases-grid {
        max-height: calc(600px - 80px);
    }
}

@media (max-width: 768px) {
    .document-page {
        padding: var(--spacing-xs);
    }

    .top-bar {
        margin-bottom: var(--spacing-md);
    }

    .page-title {
        font-size: 13px;
    }

    .credentials-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-xs);
    }

    .credential-number {
        font-size: 18px;
    }

    .credential-label {
        font-size: 8px;
    }

    /* Hide Photo on Mobile */
    .about-image {
        display: none;
    }

    .about-layout {
        grid-template-columns: 1fr;
    }

    .about-content {
        overflow: hidden;
    }

    .about-lead, .about-text {
        font-size: 12px;
    }

    .about-list {
        clear: both;
    }

    .info-tabs {
        flex-direction: column;
    }

    .tab-btn {
        padding: 8px 12px;
    }

    /* Archive Height Unlimited on Mobile */
    .archive-section {
        height: auto;
        max-height: none;
        min-height: 400px;
    }

    .cases-grid {
        max-height: none;
        overflow-y: visible;
        grid-template-columns: 1fr;
    }

    /* Case Cards Horizontal on Mobile */
    .case-card {
        flex-direction: row;
        height: auto;
        min-height: 140px;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .case-card h4 {
        font-size: 11px;
        margin-bottom: 0;
        flex-shrink: 0;
        width: 30%;
    }

    .case-card p {
        overflow: hidden;
        max-height: 3em;
        font-size: 10px;
        margin-bottom: 0;
        flex: 1;
    }

    .case-meta {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: var(--spacing-xs);
        flex-shrink: 0;
        width: 120px;
    }

    .case-footer {
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;
        padding-top: 0;
        border-top: none;
        margin-top: 0;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .contact-compact-item {
        padding: var(--spacing-xs);
    }

    .contact-value {
        font-size: 11px;
    }
}

/* =============================================================================
ANIMATIONS
============================================================================= */
.fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section-title,
.case-card,
.about-layout,
.text-module {
    animation: fadeIn 0.4s ease forwards;
}
