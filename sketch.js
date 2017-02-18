function setup() {
  createCanvas(720,480);
  background(239,239,234)
  
}

function draw() {
   //tre linee del corpo
 stroke(102,102,102)
 strokeWeight(2,2,2)
 line(350,200,350,300)
 line(360,200,360,300)
 line(370,200,370,300)
 
 //tre capelli
 stroke(102,102,102)
 strokeWeight(2,2,2)
 line(width/2,height/3,400,40)
 line(width/2,height/3,325,100)
 line(width/2,height/3,445,180)
  
  //head
 fill(2,2,2);
 noStroke()
 ellipse(width/2,height/3,120,120)
 
 //cerchio bianco 
 fill(255,255,255);
 ellipse(width/2+10,height/3-5,40,40)
 fill(2,2,2);
 ellipse(width/2+10,height/3-5,8,8)
 
 //3 cerchi grigi
 fill(216,216,216);
 noStroke()
 ellipse(width/2-25,height/3-10,15,15)
 ellipse(width/2+25,height/3-31,10,10)
 ellipse(width/2+36,height/3+10,8,8)

 
 // foot
 noStroke()
 fill(102,102,102)
 ellipse(350,410,80,80)
 
 //body
 fill(2,2,2)
 rect(299,280,100,130)
 
 fill(102,102,102);
 noStroke();
 rect(299,299,100,7)
 

 
 
 
 
  
}