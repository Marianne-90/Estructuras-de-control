let resultado_for = 10;


for(let i=10;i>1;i--){ 
  resultado_for = resultado_for * (i-1)
};

console.log(resultado_for)

let resultado_while = 10;
let cuenta = 9;

while(cuenta >0){
  resultado_while = resultado_while * (cuenta)
  cuenta--
}

console.log(resultado_while)

let resultado_break=10
let cuenta_break = 9;

while(true){
if(cuenta_break>0){
  resultado_break=resultado_break*cuenta_break
  cuenta_break--
}else{break}
}

console.log(resultado_break)