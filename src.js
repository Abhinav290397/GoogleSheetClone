//creating 26 columns/cells dynamically using Js.
let columns = 26;

const HeaderContainer = document.querySelector(".header");

function createHeaderCells(){
    for(let i=0;i<=columns;i++){
        const HeaderCell = document.createElement("div");
        HeaderCell.className = "header-cell cell";
        if(i != 0){
            HeaderCell.innerText = String.fromCharCode(64 + i);
        }
        HeaderContainer.appendChild(HeaderCell);
    }
}
createHeaderCells();


//Creating horizontal rows.
let rows = 100;
const SNumContainer = document.querySelector(".sNum");

function createSNumCells(){
    for(let i=1;i<=rows;i++){
        const SNumCell = document.createElement("div");
        SNumCell.className = "sNum-cell cell";
        SNumCell.innerText = i;
        SNumContainer.appendChild(SNumCell);
    }
}
createSNumCells();


//Now creating rows for main container.
const mainContainer = document.querySelector(".main");

function createRow(rowNumber){  //Here rowNumber catches the value of i.
    //creates rows and each row will have 26 columns.
    const Row = document.createElement("div");
    Row.className = "row";

    for(let i=1;i<=26;i++){
        const Cell = document.createElement("div");
        Cell.className = "row-cell cell";
        Cell.contentEditable = true;          //It is a html property which makes an element to be editable.
        Cell.id = String.fromCharCode(64 + i) + rowNumber; //Here we give the id to cell as A1,B3 ,G7,H73..etc
        Row.appendChild(Cell);

        //adding focus event in every cell.
        Cell.addEventListener("focus",onCellFocus);
    }
    mainContainer.appendChild(Row);
}

//Building 100 rows for main container
function buildMainSection(){
    for(let i=1;i<=rows;i++){
        createRow(i);  //here we passing the value of i as row number.
    }
}
buildMainSection();



const state = {};
const defaultProperties = {         //Changing font-size in focussed cell.
    fontFamily : "sans",
    fontSize: 16,
    color:"#000",
    textAlign: "left", //lrft,center,right
    backgroundColor:"#fff",
    isBold: false,
    isItalic:false,
    isUnderlined:false
}

const activeCellId  = document.querySelector("#active-cell"); //Now getting id after selecting a cell.
let activeCell = null;

function onCellFocus(event){
    const elementId = event.target.id;
    activeCellId.innerText = elementId;
    activeCell = event.target;
    if(state[elementId]){
        resetOptions(state[elementId]);
    }       
    else{
        resetOptions(defaultProperties);
    }
}
function resetOptions(optionsState){ //This function verifies if the cell is already selected or not by looking in the state object.

    Form.fontfamily.value = optionsState.fontFamily;
    Form.fontsize.value = optionsState.fontSize;
    Form.textalign.value = optionsState.textAlign;
    Form.bold.checked = optionsState.isBold;
    Form.italic.checked = optionsState.isItalic;
    Form.underlined.checked = optionsState.isUnderlined;
    Form.textcolor = optionsState.color;
    Form.bgcolor.value = optionsState.backgroundColor;

}

function onChangeFontSize(){

}

const Form = document.querySelector("form");
function onFormChange(){
if(!activeCell){
    alert("please select a cell for making changes");
    Form.reset();
    return;
}
}