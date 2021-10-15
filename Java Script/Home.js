var counter = 1;
setInterval(function()
{
    document.getElementById('R' + counter).checked = true;
    counter++;
    if(counter > 7)
    {
        counter = 1;
    }
},3000);