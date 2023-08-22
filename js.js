let H = document.getElementById('H');
let home = document.getElementById('home');
let btnClose = document.getElementById('btnClose');

H.onclick = function()
{
    home.style.display='block';
}
btnClose.onclick = function()
{
    home.style.display='none';
}

/* let hom = document.getElementById('hom');
let icons_adress = hom.querySelectorAll('a');

for(i = 0; i < cons_adress.length; i++)
{
    icons_adress[i].addEventListener('click', function()
    {
        if(i == 0)
        {
            icons_adress[i].href ="https://www.youtube.com/c/AbuAmeer";
            icons_adress[i].textContent = "https://www.youtube.com/c/AbuAmeer";
        }
    });
} */
