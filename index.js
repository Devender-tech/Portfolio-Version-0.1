document.querySelector('.menu-toggle').addEventListener('click',function(){

document.querySelector('.mobile-menu').classList.toggle("active");
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    document.getElementsByTagName("header").classList.toggle('active');
 
  
}