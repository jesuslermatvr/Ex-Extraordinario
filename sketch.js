let target = ",od8888bn.      ,.od88bo,  ";/*
             "d8P'   '*88bn. ,       'Y8b"
             "88'      '*888bn.       'D8"
             "Y8b         '*Y8bn.    ,d8p"
             "'*Y8bn,. '      '*+88888P*'"   */

var y = 100;

let popmax;
let mutationRate;
let population = [];

let bestPhrase;
let allPhrases;
let stats;
var answer;
var res1;
var res2;
var res3;
var res4;
var res5;
var done = 0;

function setup() {
  //frameRate(3);
  createCanvas(600, 600);
  background(100);

  Datos();

  population[0] = new Population(target, mutationRate, popmax);

  //population[1] = new Population(target, mutationRate, popmax);
}

function draw() {


  pob2();

  if (answer == ",od8888bn.      ,.od88bo,  ") {

   //text(answer, 0, y);textSize(32);
    res1=answer;
   target = "d8P'   '*88bn. ,       'Y8b";
   //text(target,0,130); 
    y=130;
  }
  if (answer=="d8P'   '*88bn. ,       'Y8b")
  {
    target= "88'      '*888bn.       'D8";
    y=160;
    res2=answer;
  }
    if (answer=="88'      '*888bn.       'D8")
    {
      target=  "Y8b         '*Y8bn.    ,d8p";
        y=190;
      res3=answer;
    }
  
    if (answer=="Y8b         '*Y8bn.    ,d8p")
    {
      target=  "'*Y8bn,. '      '*+88888P*'" ;
      y=210;
     res4=answer;
    }
      if(answer=="'*Y8bn,. '      '*+88888P*'")
      {
      res5=answer;
      noLoop();
      done=1;
      }
    

  displayInfo();

}

function displayInfo() {
  background(255)
  var s = 0;

  text(answer, 100, y);
  textSize(32);

  if(done==1)
  {
    background(255);
     text(res1,100,100);
     text(res2,100,130);
     text(res3,100,160);
     text(res4,100,190);
     text(res5,100,220);
    
    text("Jesus Antonio Lerma Tovar 1630357",0,300);
    text("Edelmiro Fabian Silva Mier 1579183",0,350);
    text("Saul Ignacio Moreno Mendoza 1630432",0,400);
  }


}

function Datos() {
  popmax = 2000;
  mutationRate = 0.01;

}

function pob2() {

  population[0].naturalSelection();
  population[0].generate();
  population[0].calcFitness();
  population[0].evaluate();
  answer = population[0].getBest();
}
