/* =============================================================================
SCRIPT: THEME TOGGLE + EXPANDABLE BLOCKS + SCHEDULE + MODAL
============================================================================= */
document.addEventListener('DOMContentLoaded', function() {
    console.log('SYSTEM READY: BUREAU MODE');
    
    /* ---------------------------------------------------------------------
       THEME TOGGLE
       --------------------------------------------------------------------- */
    var themeToggle = document.getElementById('theme-toggle');
    var body = document.body;
    
    function applySmartTheme() {
        var isDesktop = window.matchMedia('(min-width: 769px)').matches;
        var now = new Date();
        var dayOfWeek = now.getDay();
        var currentHour = now.getHours();
        var currentMinutes = now.getMinutes();
        var currentTimeInMinutes = currentHour * 60 + currentMinutes;
        var workStart = 9 * 60;
        var workEnd = 18 * 60;
        var isWorkHours = currentTimeInMinutes >= workStart && currentTimeInMinutes < workEnd;
        var isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
        
        if (isDesktop && isWeekday && isWorkHours) {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        }
        updateToggleText();
    }
    
    function updateToggleText() {
        var isLight = body.classList.contains('light-theme');
        themeToggle.textContent = isLight ? 'ВО ТЬМУ' : 'НА СВЕТ';
    }
    
    applySmartTheme();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (body.classList.contains('light-theme')) { 
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
            }
            updateToggleText();
        });
    }
    
    /* ---------------------------------------------------------------------
       SCHEDULE TOGGLE (Weekday/ Weekend)
       --------------------------------------------------------------------- */
    var scheduleWeekdayBtn = document.getElementById('schedule-weekday');
    var scheduleWeekendBtn = document.getElementById('schedule-weekend');
    var scheduleViewType = null;
    
    function updateScheduleButtons() {
        if (!scheduleWeekdayBtn || !scheduleWeekendBtn) return;
        if (scheduleViewType === 'weekday') {
            scheduleWeekdayBtn.classList.add('active');
            scheduleWeekendBtn.classList.remove('active');
        } else {
            scheduleWeekendBtn.classList.add('active');
            scheduleWeekdayBtn.classList.remove('active');
        }
    }
    
    function parseTimeToMinutes(timeStr) {
        var parts = timeStr.split(':');
        var hours = parseInt(parts[0], 10);
        var minutes = parseInt(parts[1], 10);
        return hours * 60 + minutes;
    }
    
    function isCurrentTimeSlot(item, currentTimeInMinutes) {
        var start = item.dataset.timeStart;
        var end = item.dataset.timeEnd;
        if (!start || !end) return false;
        var startMin = parseTimeToMinutes(start);
        var endMin = parseTimeToMinutes(end);
        return currentTimeInMinutes >= startMin && currentTimeInMinutes < endMin;
    }
    
    function filterScheduleItems() {
        var now = new Date();
        var currentMinutes = now.getHours() * 60 + now.getMinutes();
        var timelineItems = document.querySelectorAll('.timeline-container .timeline-item');
        
        timelineItems.forEach(function(item) {
            var itemType = item.dataset.dayType;
            var matchesView = itemType === scheduleViewType;
            
            if (matchesView) {
                item.classList.remove('hidden');
                if (isCurrentTimeSlot(item, currentMinutes)) {
                    item.classList.add('current-slot');
                } else {
                    item.classList.remove('current-slot');
                }
            } else {
                item.classList.add('hidden');
                item.classList.remove('current-slot');
            }
        });
    }
    
    function initScheduleView() {
        var now = new Date();
        var isWeekend = (now.getDay() === 0 || now.getDay() === 6);
        scheduleViewType = isWeekend ? 'weekend' : 'weekday';
        updateScheduleButtons();
        filterScheduleItems();
    }
    
    if (scheduleWeekdayBtn) {
        scheduleWeekdayBtn.addEventListener('click', function() {
            scheduleViewType = 'weekday';
            updateScheduleButtons();
            filterScheduleItems();
        });
    }
    
    if (scheduleWeekendBtn) {
        scheduleWeekendBtn.addEventListener('click', function() {
            scheduleViewType = 'weekend';
            updateScheduleButtons();
            filterScheduleItems();
        });
    }
    
    /* ---------------------------------------------------------------------
       EXPANDABLE CONTENT - OVERLAY MODE (ONLY SCHEDULE SECTION)
       --------------------------------------------------------------------- */
    var expandableItems = document.querySelectorAll('.timeline-container .timeline-item.expandable');
    
    expandableItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            if (e.target.closest('a') || e.target.closest('input') || e.target.closest('button')) {
                return;
            }
            
            var isExpanded = item.classList.contains('expanded');
            
            // Close all other expanded items
            expandableItems.forEach(function(i) {
                if (i !== item) i.classList.remove('expanded');
            });
            
            item.classList.toggle('expanded', !isExpanded);
        });
    });
    
    /* ---------------------------------------------------------------------
       SCROLL REVEAL ANIMATION
       --------------------------------------------------------------------- */
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    var animatedElements = document.querySelectorAll('.timeline-item, .section-title, .case-card, .about-layout');
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/* =============================================================================
MODAL FUNCTIONALITY
============================================================================= */
function showContactModal() {
    var modal = document.getElementById('contactModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    var modal = document.getElementById('contactModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Запрос принят. Контакт будет установлен в ближайшее время.');
    closeContactModal();
});
