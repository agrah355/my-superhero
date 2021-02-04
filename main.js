
var canvas=new fabric.Canvas("my_canvas");
var width_of_hero=50;
var height_of_hero=50;
var x=10;
var y=10;
var object;
function image(){
    fabric.Image.fromURL("hero.JPG",function(Img){
        object=Img;
        object.scaleToWidth(100);
        object.scaleToHeight(90);
        object.set();
          top=y;
          left=x
    }
    )
    console.log(object);
}
