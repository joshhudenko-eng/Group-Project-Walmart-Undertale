let heartX = 500;
let heartY = 500;
const heartSpeed = 3;

let rocks = []
let gameOver = false
let lasers = []
let lives = 3
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  if (!gameOver){
  moveRocks()
    drawHeart()
    }
  drawRocks()
  //breakRocks()

  //to change amount of projectiles change this number ( the lower the more spawn)
    const spawnRate = 10
  if (frameCount % spawnRate === 0 && !gameOver){
    newRocks()
  }
  //died()
}
function newRocks(){
    const x = width/2
    const y = height/2

  const angle = atan2(heartY - y, heartX - x)
  //to change the speed of the projectiles change theese values
  const speed = random(3, 5)

  rocks.push({
    x: x,
    y:y,
    dx: cos(angle) * speed,
    dy: sin(angle) * speed,
    color: "white",
    diameter: random(5,20),
  })
}
function moveRocks(){
for (let i= 0; i < rocks.length; i++){
  rocks[i].x = rocks[i].x + rocks[i].dx
  rocks[i].y = rocks[i].y + rocks[i].dy
}
}
function drawRocks(){
  for ( let i = 0; i < rocks.length; i++){
  push()
  noStroke()
  fill(rocks[i].color)
  circle(rocks[i].x,rocks[i].y,rocks[i].diameter)
  pop()
  }
}
// function breakRocks(){
//  for (let i = rocks.length - 1; i >= 0; i--){
//    for( let l = lasers.length - 1; l >= 0; l--){
//      const d = dist(lasers[l].x, lasers[l].y, rocks[i].x, rocks[i].y)
//      if (d < rocks[i].diameter /2){
//        if (random() < 0.17){
//        powerup(rocks[i].x, rocks[i].y)
//      }
//        rocks.splice(i,1)
//        lasers.splice(l,1)
//        rockBreak.play()
       
//        break
//      }
//   }
// }
// }
// function died(){
//   for (let i = rocks.length - 1; i >= 0; i--){
//     const d = dist(rocks[i].x,rocks[i].y, 200, 200)
//     if( d < rocks[i].diameter /2 + 10 && !gameOver ){
//       rocks.splice(i,1)
//       lives = lives -1
//       hitTime = millis()
//       if (lives <= 0){
//     gameOver = true   
//       }
//     }
//     }
//   }
