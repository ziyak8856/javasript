// factory functions

function createrect(len,bre){
    let rectangle={
        length:len,
        breadth:bre,
        draw:function(){
          console.log("drwaing the object");
        }
      }
      return rectangle;
}
let rect1=createrect(4,5);
console.log(`rect1 lenght is${rect1.length}and breadh${rect1.breadth}`);

// conturctor functions
function rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
}
let rect2=new rectangle(3,4);
console.log(`rect2 lenght is${rect2.length}and breadh${rect2.breadth}`);
//dynamic adding and deleting 
rect2.hieght=12;
console.log(rect2);
delete rect2.hieght;
console.log(rect2);