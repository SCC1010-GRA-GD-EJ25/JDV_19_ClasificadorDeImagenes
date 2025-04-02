let clasificador
let imagen

function preload() {
  // put preload code here
  clasificador = ml5.imageClassifier('MobileNet')
  imagen = loadImage("./images/PastorAleman.jpg")
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  clasificador.classify(imagen, gotResult)
  image(imagen, 0, 0, width, height)
}

function gotResult(results) {
  print(results)
  fill(255)
  stroke(0)
  textSize(18)
  text(results[0].label, 10, 20)
  text(results[0].confidence, 10, 40)
}

function draw() {
  // put drawing code here
  background(255)
  rect(100,100,200,200)
}
