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

// Form validate

$('#contact-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        subject: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Введите email',
            email: 'отсутсвует символ @'
        },
        subject: {
            required: 'Введите тему сообщения'
        },
        message: {
            required: 'Введите текст сообщения'
        }
    }
})