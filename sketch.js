let clasificador
let imagen
let video
let etiqueta
let confianza

function preload() {
  // put preload code here
  clasificador = ml5.imageClassifier("MobileNet")
  imagen = loadImage("./images/PastorAleman.jpg")
}

function setup() {
  // put setup code here
  createCanvas(640,480)
  //clasificador.classify(imagen, gotResult)
  //image(imagen,0,0,width,height)
  video = createCapture(VIDEO)
  video.size(640,480)
  //video.hide()
  cladificaVideo()
}

function gotResult(results) {
  console.log(results[0].label)
  fill(255)
  stroke(0)
  textSize(32)
  text(results[0].label, 10, 20)
  text(results[0].confidence, 10, 80)
  etiqueta = results[0].label
  confianza = results[0].confidence
  cladificaVideo()
}

function draw() {
  // put drawing code here
  //background(255)
  //rect(100,100,200,200)
  tint(0,255,0)
  image(video,0,0)
  text(etiqueta, 10, 20)
  text(confianza, 10, 80)
}

function cladificaVideo() {
  clasificador.classify(video, gotResult)
  console.log("Clasificando video")
}