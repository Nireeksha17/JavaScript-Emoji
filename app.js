const cloasedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

//add event listener
cloasedFace.addEventListener('click',()=>{
    if(openFace.classList.contains('open'))
    {
        openFace.classList.add('active');
        cloasedFace.classList.remove('active');
    }
});

openFace.addEventListener('click',()=>
{
    if(cloasedFace.classList.contains('closed'))
    {
        cloasedFace.classList.add('active');
        openFace.classList.remove('active');
    }
})
