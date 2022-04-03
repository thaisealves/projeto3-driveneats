
let allItems = 0;

function foodSelected(element){
    let boxSelected = document.querySelector(".food").querySelector(".item-selected");
    if (boxSelected !== null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
    countAll();
}

function drinkSelected(element){
    let boxSelected = document.querySelector(".drink").querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
    countAll();
}

function dessertSelected(element){
    let boxSelected = document.querySelector(".dessert").querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
    countAll();
}

function countAll(){
    let button = document.querySelector(".bottom").querySelector("button");
    let counting = document.querySelectorAll(".item-selected").length;
    // pegar aqui se tem item selecionado = 1, fazer um ifzinho, pegando se querySelector =! null, vai somar, dai se no final tiver >= 3 vai contabilizar!
    if ( counting < 3){
        button.disabled = true;
    }

    else {
        button.disabled = false;
        button.classList.add("checking")
        button.innerHTML = "Fechar pedido"
    }
}

function finalCheck(){
    let shown = document.querySelector(".confirm")
    shown.classList.remove("hidden")
    
}