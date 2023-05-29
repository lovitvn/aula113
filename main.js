function preload(){

}
function setup(){
    canvas = createCanvas(683,492)
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide()
    tintColor = ""
}
function draw(){
    image(video,0,0,683,492)
    tint(tintColor)
}
function takeSnapshot(){
    save("0-0-0 dart monkey.png")
}
function changeFilter(){
     tintColor = document.getElementeById("nome_de_el_cor").value
}