
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado Por Clicar!!</b>";
    //alert("Obrigado Por Clicar!!");
    //console.log(document.getElementById("agradecimento"));    
}

function redirecionar() {
    window.open("https://www.google.com/");
   // window.location.href = "https://www.google.com/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto!");
    elemento.innerHTML = "Obrigado por passar o mouse!!";

}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse!!";
}

function load() {
    alert("Página Carregada!!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}


/*var validar = 0;

function validarIdade(idade) {

        if (idade >= 18){
            validar = true
        } else {
            validar = false
        }
        return validar;
}

var idade = prompt("Qual a sua idade?:")
validarIdade (idade)
console.log(validar);
*/

/*
function soma( n1, n2) {
            return n1 + n2;
}
*?

//alert(soma(5, 10));


/*
var d = new Date;
alert(d.getDay()+1);
alert(d.getHours()+1);
alert(d.getMinutes()+1);
*/
/*
var count;
for(count =0; count <= 5; count++) {
    alert(count);
};
*/
/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count ++;
    //count + 1;
};*/

/*var idade = prompt ("qual a suua idade?");
//var idade = 18;
if( idade >= 18) {
    alert("maior de idade");
}else {
    alert("menor de idade");
};*/

/*var frutas =[{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/


/*var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

/*var lista = ["Maçã", "Pêra", "Laranja"];
lista.push("Uva")
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));*/


/*var nome = "Vanilson Marques";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo !!!";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));*/
