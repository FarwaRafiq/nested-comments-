

let commentContainer = document.getElementById("comment-container");

// create a function for all comments detail

function createInputBox() {

    let div = document.createElement("div");
    div.setAttribute("class", "comment-details");
    div.innerHTML += `<input type="text" placeholder="add text here"
        class="input"></input>
        <button class="btn-submit">
        submit
        </button> `
        
    return div;
    };

// function for reply of comments 

function addReply(text){
    let div = document.createElement("div");
    div.setAttribute("class", "all-comments");
    div.innerHTML += `<div class="card">
        <span class="text">
            ${text}
        </span>
        <span id="reply" class="reply">
            Add Reply
        </span>
    </div>`;

    return div;

};

// add an eventlistener 

commentContainer.addEventListener("click", function(e){

    let replyClicked = e.target.classList.contains("reply");
    let submitClicked = e.target.classList.contains("btn-submit");
    let closeCard = e.target.closest(".all-comments");

        if(replyClicked){

            closeCard.appendChild(createInputBox());
        }
        if(submitClicked){

            const commentDetails = e.target.closest(".comment-details");
            if(commentDetails.children[0].value){
                closeCard.appendChild(
                    addReply(commentDetails.children[0].value));
                    commentDetails.remove();
                
            }
        }
})