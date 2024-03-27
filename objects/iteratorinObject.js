function rectangle(len,bre){
this.len=len;
this.bre=bre;
this.draw=function(){
    console.log("drwaing");
}
}
let rect1=new rectangle(10,20);
//for in loop
for(let key in rect1){
    console.log(key,rect1[key]);
}
//for of loop
// work on iterable not on the object we will convert in arrasy
for(let key of Object.keys(rect1)){
    console.log(key,rect1[key]);
}
//or
for(let key of Object.entries(rect1)){
    console.log(key);
}
