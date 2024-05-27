var buyf = false;



function buy()
{
	
	if (buyf == false)
	{
	document.getElementById('btn').style.background = 'green';
    document.getElementById('btn').innerHTML = 'В корзине';
    document.getElementById('btn').style.color = 'white';
buyf = true;

	}
	else
	{
	document.getElementById('btn').style.background = 'silver';
    document.getElementById('btn').innerHTML = 'Купить';
    document.getElementById('btn').style.color = 'black';
buyf = false;

	}



}
