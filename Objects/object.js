// FOR IN LOOP
let alien ={
    name:'navin',
    tech:'js',
    laptop:{
         cpu:'i7',
         ram:4,
         brand:'Asus'
    }
}
for(let key in alien){
    console.log(key,alien[key])
}
