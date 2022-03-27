//let codey;
const gameState = {};

function preload() {
  this.load.image("codey", "bot.png");
}

function create() {
  gameState.codey = this.add.sprite(30, 200, "codey");
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

// Create your update() function here
function update() {
  if (gameState.cursors.right.isDown) {
    gameState.codey.x += 5;
  }
  if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 5;
  }
  if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 5;
  }
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 5;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  backgroundColor: "#5f2a55",
  scene: {
    preload,
    create,
    update,
    // Include update here!
  },
};

const game = new Phaser.Game(config);
