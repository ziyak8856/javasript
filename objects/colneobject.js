// iterration
let rectangle={
    length:12,
    breadth:15
}
let clone={};
for(let key in rectangle){
    clone[key]=rectangle[key];
}
console.log(clone);
//assign
let x={
    a:1
}
let clone2=Object.assign({},rectangle,x);
console.log(clone2);
// spread operator
let clone3={...clone2};
clone2.a++;
console.log(clone3);
