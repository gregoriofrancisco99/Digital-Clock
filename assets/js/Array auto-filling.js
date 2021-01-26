var message;
var calendar = 
    [
        [], //Arrays for months - fill till 11
        []  //Arrays for days - fill till 31
    ];

    // Fill arrays
for (let i = 0; i < 12; i++) 
{
    calendar[0][i] = i;
    if(calendar[0][i] == 11)
    {
        for(let j = 1; j <= 31; j++) 
        {
            calendar[1][j] = j;
        }
    }
}

// Catch today
for(let i = 0; calendar[0][i] < 12; i++)
{
    for(let j = 1; calendar[1][j] < 31; j++)
    {
        //Dia internacional da mulher
        if(month == 0 && day == 23)
        { 
            message = "Dia internacional da mulher";
            document.getElementById('message').innerText = message;
        }
    }
}