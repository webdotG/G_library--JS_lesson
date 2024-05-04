let currentPlayer = 'X';
function makeMove(cell) {
    if (cell.textContent) return;
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    checkWinner();
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of combinations) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            alert('Выиграл ' + cells[a].textContent);
            window.location.reload();
        }
    }
}
