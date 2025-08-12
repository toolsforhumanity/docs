(function() {
    function hideContextualMenu() {
        const currentPath = window.location.pathname;
        
        if (currentPath === '/main') {
            const contextualMenu = document.getElementById('page-context-menu');
            if (contextualMenu) {
                contextualMenu.style.display = 'none';
                console.log('Hidden contextual menu on mini-apps page');
            }
        }
    }
    

    function tryHideMenu() {
        hideContextualMenu();
        
     
        setTimeout(hideContextualMenu, 100);
        setTimeout(hideContextualMenu, 500);
        setTimeout(hideContextualMenu, 1000);
    }
    
   
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryHideMenu);
    } else {
        tryHideMenu();
    }
    
   
    window.addEventListener('popstate', tryHideMenu);
    
   
    const observer = new MutationObserver(function(mutations) {
        let shouldCheck = false;
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldCheck = true;
            }
        });
        if (shouldCheck) {
            hideContextualMenu();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
