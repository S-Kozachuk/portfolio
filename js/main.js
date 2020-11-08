// Form placeholder

const formInputs = document.querySelectorAll('.form-field');
for (let item of formInputs){
    const thisPlaceholder = item.nextElementSibling;
    
    item.addEventListener('focus', function(){
        thisPlaceholder.classList.add('active');
    });

    item.addEventListener('blur', function(){
        if(item.value == '') {
            thisPlaceholder.classList.remove('active');
        }
    }); 
}