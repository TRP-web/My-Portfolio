const hidepost = document.querySelector('.catalog-aside__hide');
const post = document.querySelector('.catalog-aside__post-inner')

hidepost.addEventListener('click', ()=>{
  post.classList.toggle('active')
})