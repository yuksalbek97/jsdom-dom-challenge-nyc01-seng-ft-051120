
// 1. √ Get the timer
// 2. √increment somehow
// 3. √get plus and minus buttons
// 4. √manually increase and decrease timer
// 5. get like button
// 6. create li for that button




document.addEventListener('DOMContentLoaded', function(){

    const counter = document.getElementById('counter')
    const minusButton = document.getElementById('minus')
    const plusButton = document.getElementById('plus')
    const likeButton = document.getElementById('heart')
    const likeUl = document.querySelector('.likes')
    
   

    document.addEventListener('click', function(e){

        if(e.target === minusButton){
            counter.textContent = parseInt(counter.textContent, 10) - 1
        } 
        else if (e.target === plusButton){
            counter.textContent = parseInt(counter.textContent, 10) + 1
        }
        else if (e.target === likeButton){
            const like = document.createElement('li')
        like.textContent = counter.textContent
      
    
        likeUl.appendChild(like)
        }
    
    })


    
    
    setInterval(function(){
        counter.textContent = parseInt(counter.textContent, 10) + 1
    }, 1000)






    








    



})


