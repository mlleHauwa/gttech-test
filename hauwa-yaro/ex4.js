#1. JUST IN 
var title = document.querySelectorAll('li > a > h3');
var response = {};

for(i = 0; i < title.length; i++) {
    response[i] = title[i].textContent;
}

document.writeln(JSON.stringify(response));

#2. TRENDING
var title2 = document.querySelectorAll('span.tptn_after_thumb');
var response2 = {};

for(i = 0; i < title2.length; i++) {
    response2[i] = title2[i].textContent;
}

document.writeln(JSON.stringify(response2));

