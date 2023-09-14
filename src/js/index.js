function changeColor() {
    //Check if the button have a class "clicked"
    if (this.classList.contains("clicked")) {
        //Remove the class
        this.classList.remove("clicked");
        //check if the button have a class "no-model"
        if(this.classList.contains("no-model")){
            //Remove the class
            this.classList.remove('no-model')
        }
        //No class so add "clicked"
    } else {
        this.classList.add("clicked");
        //get the closest element with the class ".card"
        const parent = this.closest('.card')
        //check if a class "model exist in the parent"
        if(parent.querySelector('.model')){
            const modelDiv = parent.querySelector('.model')
            const modelText = modelDiv.textContent.trim()
            alert(`Vous avez click sur ${modelText} `)
        }else{
            this.classList.add("no-model")
            alert("Modele sans nom :((")
        }
    }
}

//Bind the function to each .toggle (.toggle => button on each card)
document.querySelectorAll('.toggle').forEach((button) => {
    button.addEventListener('click', changeColor);
});
