const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const res = document.getElementById('res')
const num = document.getElementById('num');
const count ={
    counter:0
}
function makeChange(){
    num.innerHTML = count.counter
}
plus.addEventListener('click',() =>{
    increase();
    makeChange();
})
minus.addEventListener('click',() =>{
    decrease();
    makeChange();
})
res.addEventListener('click',() =>{
    reset();
    makeChange();
})
function increase()
{
    count.counter++;
}
function decrease()
{
    if(count.counter >0)
    {
    count.counter--;
    }
}
function reset()
{
    count.counter =0;
}

