// Fonctions pour afficher/masquer les jeux
function showGame(gameId) {
    document.querySelectorAll('.game-area').forEach(area => {
        area.style.display = 'none';
    });
    document.getElementById(gameId).style.display = 'block';
    
    // Initialiser le jeu sélectionné
    if (gameId === 'tic-tac-toe') {
        resetTicTacToe();
    } else if (gameId === 'rps') {
        // Rien à initialiser
    } else if (gameId === 'memory') {
        initMemoryGame();
    }
}

// ... continuez avec tout le reste du JavaScript ...