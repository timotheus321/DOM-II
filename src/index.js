import './less/index.less'

// Your code goes here!

window.onload = function (evt) {
    // 1-load
    console.log(`event ${evt.type} fired! ready to go!`)
    const heading = document.querySelector('h1')
    console.log(heading) 
    heading.textContent = 'Ready To Go!!'
    //2-copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })
    //3-click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })
    //4 dbl click
    document.body.addEventListener('dblclick', evt =>{
        evt.target.innerHTML = ''
    })
    //5 keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1>You ran order 66</h1>'
        }
    })
    //6 mousemove 
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt
        
    })
    // 7 mouseenter
    // 8 mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations){
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', evt => {
            destination.style.fontWeight = 'initial'
        })
    }
    // scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          header.style.backgroundColor = 'red';
        } else {
          header.style.backgroundColor = 'white';
        }
      });
    // focus
    const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('focus', () => {
    button.style.backgroundColor = 'yellow';
    button.style.color = 'black';
  });
  button.addEventListener('blur', () => {
    button.style.backgroundColor = 'transparent';
    button.style.color = 'white';
  });
});
    //resize 
    window.addEventListener('resize', function() {
  console.log('Window size:', window.innerWidth, 'x', window.innerHeight);
});

}  
  

    