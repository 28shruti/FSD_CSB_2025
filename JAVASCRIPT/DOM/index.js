// console.log("hello world");

// const div=document.getElementsByTagName("div");

// div[0].innerText="ABES Engineering College.";
// div[0].style.color="brown";
// div[0].style.backgroundColor='plum';
// console.log(div);

const div =document.getElementsByClassName("container");
//div[0].innerHTML= "<h2 style=color:red>Hii, I'm using DOM</h2>";
//console.dir(div);

// const h2= document.createElement('h2');
// h2.innerText= "CS-B Students";
// h2.style.backgroundColor="plum";
// console.log(h2);
// div[0].appendChild(h2);

const button = document.getElementById("btn");
console.log(button);
const loading=document.getElementById('disp');

function displayData(){
    loading.innerHTML='<h2>Data is Loading...</h2>';

    setTimeout(()=>{
//For h2 display
const h2= document.createElement('h2');
h2.innerText= "CS-B Students";
h2.style.backgroundColor="plum";
console.log(h2);
div[0].appendChild(h2);
        //For img display
const img=document.createElement("img");
img.src="https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg";
// img.style.width="200px";
// img.style.height="150px";
img.setAttribute('height', 150);
img.setAttribute('width', 200);

console.log(img);
div[0].appendChild(img);


    },2000);




}
button.addEventListener('click', displayData);