// Nav page
$('#page-nav').onePageNav({
    currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function () { },
	end: function () { },
	scrollChange: function ($currentListItem) { }
});

// Projects filter
let containerE1 = document.querySelector('#portfolio-projects');

let mixer = mixitup(containerE1, {
    classNames: {
        block: ""
    }
});

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
$('#contacts-form').validate({
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
    },
    submitHandler: function (form) {
        ajaxFormSubmit();
    }
})

 // Функция AJAX запроса на сервер

 function ajaxFormSubmit() {

    let string = $("#contacts-form").serialize(); // Соханяем данные введенные в форму в строку.

    //Формируем ajax запрос
    $.ajax({
        type: "POST", // Тип запроса - POST
        url: "php/mail.php", // Куда отправляем запрос
        data: string, // Какие даные отправляем, в данном случае отправляем переменную string

        // Функция если все прошло успешно
        success: function (html) {
            $("#contacts-form").slideUp(800);
            $('#answer').html(html);
        }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
}

// Back top button
$('#backTop').hide();
$(window).scroll( function () {
    if($(this).scrollTop() > 600){
        $('#backTop').fadeIn();
    }
    else{
        $('#backTop').fadeOut();
    }
})
