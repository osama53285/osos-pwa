document.getElementById('start-game').addEventListener('click', () => {
  document.getElementById('start-game').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
});

document.getElementById('fight-enemy').addEventListener('click', () => {
  const randomOutcome = Math.random();
  if (randomOutcome > 0.5) {
    alert('لقد فزت في المعركة!');
  } else {
    alert('لقد خسرت في المعركة!');
  }
});
