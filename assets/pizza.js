const btn = document.getElementById('btn');
const myform = document.getElementById('form2')

btn.addEventListener('click', () => {
  myform.classList.toggle('displayform');
});
const clear=document.getElementById('clear')
clear.addEventListener('click',()=>{
  myform.classList.remove('displayform')
})