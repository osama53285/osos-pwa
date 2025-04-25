// بدء اللعبة
document.getElementById('start-game').addEventListener('click', () => {
  document.getElementById('start-game').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
});

// تحريك اللاعب باستخدام الأسهم
document.addEventListener('keydown', (event) => {
  const player = document.getElementById('player');
  const currentPos = player.getBoundingClientRect();
  const moveDistance = 10;

  if (event.key === 'ArrowUp') {
    player.style.transform = `translateY(${currentPos.top - moveDistance}px)`;
  } else if (event.key === 'ArrowDown') {
    player.style.transform = `translateY(${currentPos.top + moveDistance}px)`;
  } else if (event.key === 'ArrowLeft') {
    player.style.transform = `translateX(${currentPos.left - moveDistance}px)`;
  } else if (event.key === 'ArrowRight') {
    player.style.transform = `translateX(${currentPos.left + moveDistance}px)`;
  }
});

// محاربة العدو
const attackSound = document.getElementById('attack-sound');
document.getElementById('fight-enemy').addEventListener('click', () => {
  attackSound.play(); // تشغيل الصوت عند محاربة العدو
  const randomOutcome = Math.random();
  if (randomOutcome > 0.5) {
    alert('لقد فزت في المعركة!');
  } else {
    alert('لقد خسرت في المعركة!');
  }
});

// حركة العدو
const enemy = document.getElementById('enemy');
let enemyX = 0;

function moveEnemy() {
  enemyX += 5;
  enemy.style.transform = `translateX(${enemyX}px)`;
  if (enemyX > window.innerWidth) {
    enemyX = 0; // عندما يصل العدو إلى حافة الشاشة، يعيد الحركة
  }
}

setInterval(moveEnemy, 100); // تحريك العدو كل 100 ميلي ثانية

// جمع العنصر
document.getElementById('item').addEventListener('click', () => {
  alert('تم جمع العنصر!');
  document.getElementById('item').style.display = 'none'; // إخفاء العنصر بعد جمعه
});
