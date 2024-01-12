let element=document.getElementById("value");
let valuee=parseInt(element.innerText)

function increment()
{
    valuee=valuee+1;
    element.innerText=valuee;
}
function decrement()
{
    valuee=valuee-1;
    element.innerText=valuee;
}
