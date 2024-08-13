let ID = document.getElementById('ID');
let type = document.getElementById('type');
let value = document.getElementById('firstValue');
let result = document.getElementById('result');
function test(){
  if (type.value === "mTf") {
  ID.textContent = "Meter To Foot";
  value.value = "";
  result.value = "";
}else if (type.value === "fTm"){
  ID.textContent = "Foot To Meter";
  value.value = "";
  result.value = "";
}else if (type.value === "miTk") {
  ID.textContent = "Mile To Kilometer";
  value.value = "";
  result.value = "";
}else if (type.value === "kTmi"){
  
  ID.textContent = "Kilometer To Mile"
  value.value = "";
  result.value = "";
}else if(type.value === "mTy"){
  value.value = "";
  result.value = "";
  ID.textContent = "Meter To Yard";
}else if(type.value === "yTm"){
  ID.textContent = "Yard To Meter";
  value.value = "";
  result.value = "";
}else if (type.value === "yTf"){
  ID.textContent = "Yard To Foot";
  value.value = "";
  result.value = "";
}else if (type.value === "fTy"){
  ID.textContent = "Foot To Yard";
  value.value = "";
  result.value = "";
}else {
  
  result.value = "";
  ID.textContent = "Please Select A Category"
}
}

function button() {
  if(type.value === 'mTf'){
    MtF()
  }else if(type.value === 'fTm'){
    FtM()
  }else if(type.value === 'miTk'){
    MitK()
  }else if(type.value === ''){
    alert('Please Select Above')
  }else if(type.value === 'fTy'){
    FtY()
  }else if(type.value === 'yTf'){
    YtF()
  }else if(type.value === 'yTm'){
    YtM()
  }else{
    MtY()
  }
}
function MtF(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 3.281).toFixed(3);
    
  }
}
function FtM(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 0.3048).toFixed(3);
    
  }
}
function MitK(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 1.609).toFixed(3);
    
  }
}
function KtMi(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 0.621371).toFixed(3);
    
  }
}
function YtF(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 3).toFixed(3);
    
  }
}
function FtY(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 0.3333333333).toFixed(3);
    
  }
}
function YtM(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 0.9144).toFixed(3);
    
  }
}
function MtY(){
  if(value.value == ""){
    alert('Invalid Number')
  }else{
    result.value = (value.value * 1.0936132983).toFixed(3);
    
  }
}
function reset(){
  result.value = "";
  value.value = "";
  type.value = "";
  ID.textContent = "Please Select A Category"
}
