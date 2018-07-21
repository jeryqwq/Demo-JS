var name='windows';
var object={
    name:'myobject',
    getNameFunc:()=>{
       return(this.name)
    }
}
console.log(object.getNameFunc());
console.log(this.name);
