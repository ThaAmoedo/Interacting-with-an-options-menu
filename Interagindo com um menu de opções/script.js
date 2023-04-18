/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

  if/else
*/



let option //ele entra sem valor(vamos dizer assim)
let itens = [];

while(option != 3) { //equanto nn for ou n escolher o 3 é para cotinuar

    option = Number(prompt(` Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa 
    `) ); 



if(option == 1){
let item = prompt("Digite o nome dos seus itens") //se fo 1 digite seus itens e ele vai add em uma lista
itens.push(item)
}

else if(option == 2){ //se for 2

if(itens.length == 0){ //Caso não tenha itens cadastrado(caso for 0) ele vai falar q não existem itens cadastrados
alert("Não existem itens cadastrados")
}
else{  //se tiver itens ele vai mostar oque tem
    alert(itens)
}

}else{ alert("Tchauuuu!! :)")}
}















//Exmeplo1, sem o .push()

/*
let option //ele entra sem valor(vamos dizer assim)
let itens = [];
let add = 0;

while(option != 3) { //equanto nn for ou n escolher o 3 é para cotinuar

    option = Number(prompt(` Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa 
    `) ); 



if(option == 1){
itens[add] = prompt("Digite o nome dos seus itens") //se fo 1 digite seus itens e ele vai add em uma lista
add++
}

else if(option == 2){ //se for 2

if(itens.length == 0){ //Caso não tenha itens cadastrado(caso for 0) ele vai falar q não existem itens cadastrados
alert("Não existem itens cadastrados")
}
else{  //se tiver itens ele vai mostar oque tem
    alert(itens)
}

}
}
*/