document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const grabList = document.querySelector(".likes")
    const pauseButton = document.getElementById("pause");
    const commentForm = document.getElementById("comment-form")

    let count = 0;
    let likeCounter = {}
    let paused = false


    let timerInterval = 
        setInterval(()=> {
        count++
        updateCounter()
    }, 1000);
    
    

    function updateCounter() {
        counter.textContent = count;
    }
 
    function incrementCounter() {
        count++;
        updateCounter();
        }
    
    function decrementCounter() {
        count--;
        updateCounter();
        }
    
    function numberliker(){
         
        if (count in likeCounter) {
            likeCounter[count]++  
            console.log(`${count} has been liked ${likeCounter[count]} times`)
            let changeItem = document.getElementById(`${count}`)
            changeItem.textContent =`${count} has been liked ${likeCounter[count]} times`
            grabList.appendChild(listItem)
        } else {
            likeCounter[count] = 1
            console.log(`${count} has been liked ${likeCounter[count]} times`)
            const listItem = document.createElement('li')
            listItem.textContent =`${count} has been liked ${likeCounter[count]} times`
            grabList.appendChild(listItem)
            listItem.id = `${count}`
        }
    }
    
    function pauseActivity(){
        paused = !paused;
        if (paused) {
        clearInterval(timerInterval);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.textContent = 'resume';
        } else {
        timerInterval = 
        setInterval(()=> {
        count++
        updateCounter()
        }, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.textContent = 'pause';
        }
  
    }

    function commentHandler(event){
        event.preventDefault();
        let commentInput = document.getElementById('comment-input');
        let commentValue = commentInput.value
        let newComment = document.createElement('li')
        newComment.textContent = commentValue
        document.getElementById('list').appendChild(newComment)
    }


    
    
    plusButton.addEventListener('click', incrementCounter);
    
    minusButton.addEventListener('click', decrementCounter);

    likeButton.addEventListener('click',  numberliker)

    pauseButton.addEventListener('click', pauseActivity)

    commentForm.addEventListener("submit", commentHandler)
    
});


   