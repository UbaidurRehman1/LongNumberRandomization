$(document).ready(function()
{
    $( "#longNumber" ).click(function()
    {
        $("#result").text(getNumber());     
    });
});

function getNumber()
{
    return Math.floor((Math.random() * 100000000000000000) + 1);
}

