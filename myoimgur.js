//Remove the top bar because it isn't needed 
removeElement('topbar');

//function removeContentInClass(matchClass, content)
removeContentInClass('right-content');
removeContentInClass('fixed-share-container');
removeContentInClass('advertisement');
removeContentInClass('action-bar');
removeContentInClass('sponsored-image-caption');
removeContentInClass('submit-caption');
removeContentInClass('caption-error');
removeContentInClass('expand');
removeContentInClass('comments-info');
removeContentInClass('arrows');
removeContentInClass('btn');
removeContentInClass('clear');
removeContentInClass('children');
removeContentInClass('bad-captions');

var controlPanel = document.createElement('div');
controlPanel.setAttribute('class', 'right-content ctrl container');

var logo = document.createElement('div');
logo.setAttribute('class', 'ctrl-logo');

var logoImg = document.createElement('img');
logoImg.setAttribute('src', 'http://i.imgur.com/L02fiSM.png');
logoImg.setAttribute('class', 'mainLogo');

var table = document.createElement('table');
table.setAttribute('class', 'img-table');

var row1 = document.createElement('tr');
var col11 = document.createElement('td');
var img11 = document.createElement('img');
img11.setAttribute('src', 'http://i.imgur.com/4Jq1ida.png');
img11.setAttribute('class', 'table-img');
img11.setAttribute('id', 'img11');
col11.appendChild(img11);
var col12 = document.createElement('td');
var img12 = document.createElement('img');
img12.setAttribute('src', 'http://i.imgur.com/poQn5EA.png');
img12.setAttribute('class', 'table-img');
img12.setAttribute('id', 'img12');
col12.appendChild(img12);
var col13 = document.createElement('td');
var img13 = document.createElement('img');
img13.setAttribute('src', 'http://i.imgur.com/gpCf7bP.png');
img13.setAttribute('class', 'table-img');
img13.setAttribute('id', 'img13');
col13.appendChild(img13);
row1.appendChild(col11);
row1.appendChild(col12);
row1.appendChild(col13);

var row2 = document.createElement('tr');
var col21 = document.createElement('td');
var img21 = document.createElement('img');
img21.setAttribute('src', 'http://i.imgur.com/RSMI1wa.png');
img21.setAttribute('class', 'table-img');
img21.setAttribute('id', 'img21');
col21.appendChild(img21);
var col22 = document.createElement('td');
var img22 = document.createElement('img');
img22.setAttribute('src', 'http://i.imgur.com/1Qsvmw8.png');
img22.setAttribute('class', 'table-img');
img22.setAttribute('id', 'img22');
col22.appendChild(img22);
var col23 = document.createElement('td');
var img23 = document.createElement('img');
//img23.setAttribute('src', 'http://i.imgur.com/MMX6M3V.png');
img23.setAttribute('src', 'http://i.imgur.com/adEtBMR.png');
img23.setAttribute('class', 'table-img');
img23.setAttribute('id', 'img23');
col23.appendChild(img23);
row2.appendChild(col21);
row2.appendChild(col22);
row2.appendChild(col23);

var row3 = document.createElement('tr');
var col31 = document.createElement('td');
var img31 = document.createElement('img');
img31.setAttribute('src', 'http://i.imgur.com/45u4btF.png');
img31.setAttribute('class', 'table-img');
img31.setAttribute('id', 'img31');
col31.appendChild(img31);
var col32 = document.createElement('td');
var img32 = document.createElement('img');
img32.setAttribute('src', 'http://i.imgur.com/F23tfka.png');
img32.setAttribute('class', 'table-img');
img32.setAttribute('id', 'img32');
col32.appendChild(img32);
var col33 = document.createElement('td');
var img33 = document.createElement('img');
img33.setAttribute('src', 'http://i.imgur.com/8Xk14qI.png');
img33.setAttribute('class', 'table-img active');
img33.setAttribute('id', 'img33');
col33.appendChild(img33);
row3.appendChild(col31);
row3.appendChild(col32);
row3.appendChild(col33);

var row4 = document.createElement('tr');
var col41 = document.createElement('td');
var img41 = document.createElement('img');
img41.setAttribute('src', 'http://i.imgur.com/SpQj2ec.png');
img41.setAttribute('class', 'table-img');
img41.setAttribute('id', 'img41');
col41.appendChild(img41);
var col42 = document.createElement('td');
var img42 = document.createElement('img');
img42.setAttribute('src', 'http://i.imgur.com/scq9QHi.png');
img42.setAttribute('class', 'table-img');
img42.setAttribute('id', 'img42');
col42.appendChild(img42);
var col43 = document.createElement('td');
var img43 = document.createElement('img');
img43.setAttribute('src', 'http://i.imgur.com/q4Kmsg1.png');
img43.setAttribute('class', 'table-img');
img43.setAttribute('id', 'img43');
col43.appendChild(img43);
row4.appendChild(col41);
row4.appendChild(col42);
row4.appendChild(col43);

table.appendChild(row1);
table.appendChild(row2);
table.appendChild(row3);
table.appendChild(row4);

logo.appendChild(logoImg);
var center = document.createElement('center');
center.appendChild(logo);
center.appendChild(table);
controlPanel.appendChild(center);

var content = document.getElementById('content');
content.appendChild(controlPanel);

