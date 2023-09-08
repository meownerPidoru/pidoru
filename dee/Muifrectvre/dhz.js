var num = 0; 
function step(t) {
if (t.innerHTML == "") {
if (num % 2 == 0) { t.innerHTML = "оф ротик";
}
else {
t.innerHTML = "заюш";
}
num++; 
analiz(t);
}
else
{ alert("Клетка занята. Выберите другую клетку"); }
}