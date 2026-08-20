const button=document.querySelector('.menu-btn');const links=document.querySelector('.links');
if(button){button.addEventListener('click',()=>{const open=links.classList.toggle('open');button.setAttribute('aria-expanded',open);button.textContent=open?'×':'☰';});}
document.querySelectorAll('.links a').forEach(link=>link.addEventListener('click',()=>links?.classList.remove('open')));
