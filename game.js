// تعريف اللاعب والعدو
class Character {
  constructor(name, health, weapon) {
    this.name = name;
    this.health = health;
    this.weapon = weapon;
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage! Health left: ${this.health}`);
  }

  isAlive() {
    return this.health > 0;
  }

  heal(healthPoints) {
    this.health += healthPoints;
  }
}

const player = new Character('Player', 100, 'سيف');
const enemy = new Character('عدو', 50, 'مطرقة');

// بدء اللعبة
document.getElementById('start-game').addEventListener('click', () => {
  document.getElementById('start-game').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  document.getElementById('weapon-name').innerText = player.weapon;
  document.getElementById('player-health-value').innerText = player.health;
  document.getElementById('enemy-health-value').innerText = enemy.health;
});

// قتال العدو
const attackSound = document.getElementById('attack-sound');
document.getElementById('fight-enemy').addEventListener('click', () => {
  attackSound.play(); // تشغيل الصوت
  if (player.isAlive() && enemy.isAlive()) {
    // حساب الضرر
    const playerDamage = Math.floor(Math.random() * 20) + 1;  // ضرر عشوائي من 1 إلى 20
    const enemyDamage = Math.floor(Math.random() * 15) + 1;   // ضرر عشوائي من 1 إلى 15

    enemy.takeDamage(playerDamage);
    player.takeDamage(enemyDamage);

    // تحديث القيم على الشاشة
    document.getElementById('player-health-value').innerText = player.health;
    document.getElementById('enemy-health-value').innerText = enemy.health;

    if (!player.isAlive()) {
      alert('لقد خسرت المعركة!');
      resetGame();
    } else if (!enemy.isAlive()) {
      alert('لقد فزت في المعركة!');
      document.getElementById('collect-item').style.display = 'block'; // إظهار زر جمع العنصر
    }
  }
});

// جمع العنصر
document.getElementById('collect-item').addEventListener('click', () => {
  player.heal(20); // شفاء اللاعب 20 نقطة صحة
  document.getElementById('player-health-value').innerText = player.health;
  document.getElementById('collect-item').style.display = 'none'; // إخفاء زر جمع العنصر بعد جمعه
  document.getElementById('item-container').style.display = 'none'; // إخفاء العنصر
});

// إعادة تعيين اللعبة
function resetGame() {
  player.health = 100;
  enemy.health = 50;
  document.getElementById('player-health-value').innerText = player.health;
  document.getElementById('enemy-health-value').innerText = enemy.health;
  document.getElementById('collect-item').style.display = 'none';
  document.getElementById('item-container').style.display = 'none';
}
