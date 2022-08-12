async function icefire() {
try{
let link =await fetch(`https://www.anapioficeandfire.com/api/books`);
let result= await link.json();

var div=document.createElement("div");
div.innerHTML=`1. Display Around 10 Books:`;
div.style.margin="60px";
div.style.lineHeight = "35px";
div.style.fontSize = "22px";
document.body.append(div);

for(var i=0;i<result.length;i++)  {
var div1=document.createElement("div");
div1.innerHTML=`${result[i].url}`;
div.append(div1);
}

var div=document.createElement("div");
div.innerHTML=`2. Display the name and isbn of each book:`;
div.style.margin="70px";
div.style.lineHeight = "35px";
div.style.fontSize = "22px";
document.body.append(div);

for(var i=0;i<result.length;i++)  {
var div1=document.createElement("div");
div1.innerHTML=`Name: ${result[i].name} and ISBN: ${result[i].isbn}`;
div.append(div1);
}

var div=document.createElement("div");
div.innerHTML=`3. Display the number of pages in the book:`;
div.style.margin="70px";
div.style.lineHeight = "35px";
div.style.fontSize = "22px";
document.body.append(div);

for(var i=0;i<result.length;i++)  {
var div1=document.createElement("div");
div1.innerHTML=`${result[i].numberOfPages}`;
div.append(div1);
}

var div=document.createElement("div");
div.innerHTML=`4. Display the authors of the book:`;
div.style.margin="70px";
div.style.lineHeight = "35px";
div.style.fontSize = "22px";
document.body.append(div);

var div1=document.createElement("div");
div1.innerHTML=`${result[0].authors}`;
div.append(div1);


var div=document.createElement("div");
div.innerHTML=`5. Display the publisher name and the released date:`;
div.style.margin="70px";
div.style.lineHeight = "35px";
div.style.fontSize = "22px";
document.body.append(div);

for(var i=0;i<result.length;i++)  {
var div1=document.createElement("div");
div1.innerHTML=`Publisher Name: ${result[i].publisher} and Released Date and Time: ${result[i].released}`;
div.append(div1);
}

var div=document.createElement("div");
div.innerHTML=`6. Display at least 5 characters for each book:`;
div.style.margin="70px";
div.style.lineHeight = "35px";
div.style.fontSize = "22px";
document.body.append(div);

for(var i=0;i<result.length;i++)  {
var div1=document.createElement("div");
div1.innerHTML=`${result[i].characters}`;
div.append(div1);
}
} catch(error) {
    console.log(error)
}
}
icefire();