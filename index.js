const birthdate = document.querySelector("#birthdate");
const luck = document.querySelector("#Lucky-number");
const btn_check = document.querySelector(".btn-check");
const outHere = document.querySelector(".outputHere");


function calculateSumDigits(bday)
{
    var sum=0;
    for(var i=0;i<bday.length;i++)
    {
        if(!isNaN(bday[i]))
            sum+=parseInt(bday[i]);
    }
    return sum;
}

btn_check.addEventListener("click", function clickEventHandler()
{
    const sum=calculateSumDigits(birthdate.value);
    console.log(sum);
    if( sum % (parseInt(luck.value))==0)
    {
        outHere.innerText=("Your birthday is indeed very lucky!!!");
    }
    else
    {
        outHere.innerText=("You're Not so lucky on your birthday...");
    }

});