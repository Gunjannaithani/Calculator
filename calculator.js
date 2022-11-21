//Mode
const changeMode = () =>{
    let mybody = document.body;
    mybody.classList.toggle(`dark`)
}

//Calculator
function dis(val)
{
    document.getElementById("screen").value+=val;
}

function point()
{
    document.getElementById("screen").value+='.';
}

function solve()
{
    let a = document.getElementById("screen").value
    let b = eval(a)
    document.getElementById("screen").value = b
}

function AC()
{
    document.getElementById("screen").value="";
}


function div()
{
    document.getElementById("screen").value+="/";
}

function mul()
{
    document.getElementById("screen").value+="*";
}

function add()
{
    document.getElementById("screen").value+="+";
}

function sub()
{
    document.getElementById("screen").value+="-";
}