const slides = document.querySelectorAll(".carousel-wrapper__photo-ticket")
const slider = document.querySelector(".carousel-wrapper")
const btnLeft = document.querySelector(".carousel-wrapper__btn--left")
const btnRight = document.querySelector(".carousel-wrapper__btn--right")
const imgLeftArrows = document.querySelector('.carousel-wrapper__arrows_left') //Картинка Стрелки влево
const imgRightArrows = document.querySelector('.carousel-wrapper__arrows_right')//Картинка Стрелки вправо
const modal = document.querySelector('.portfolio__modalBackground')
const closeX = document.querySelector('.portfolio__modalClose')
const  modalActive= document.querySelector('.portfolio__modalActive')


const modalWrp = document.getElementsByClassName("modal-wrapper__img-wrapper");
const modalBtnR = document.querySelector(".modal-wrapper__btn--right");
const modalBtnL = document.querySelector(".modal-wrapper__btn--left");
const modalImgR = document.querySelector(".modal-wrapper__arrows_right")
const modalImgL = document.querySelector(".modal-wrapper__arrows_left")

const form = document.querySelector(".form")
const buttons = document.querySelectorAll(".button")
const formHidden = document.querySelector(".form__hidden")
const closeForm = document.querySelector(".form__close")

let targetSlide = 0

const mobileWidthMedia_1199 = window.matchMedia('(max-width: 1199px)');
const mobileWidthMedia_767 = window.matchMedia('(max-width: 767px)');
const mobileWidthMedia_575 = window.matchMedia('(max-width: 575px)');

let countOnWindow = 4 //Количесвто карточек проектов на экране в секции Портфолио
if (mobileWidthMedia_1199.matches) countOnWindow = 3;
if (mobileWidthMedia_767.matches) countOnWindow = 2;
if (mobileWidthMedia_575.matches) countOnWindow = 1;

const countSlide = slides.length //Количество проектов всего

let currSlide = 0 //номер активного слайда в первой позиции карусели. Не путать с выбранным слайдом по клику
let selectedPrj // Номер выбранного пользователем проекта в карусели
let countPhoto = 0; //Количесвто фото в проекте

mobileWidthMedia_1199.addEventListener('change', function (event) {
    if (event.matches) countOnWindow = 3;
    else countOnWindow = 4;
})
mobileWidthMedia_767.addEventListener('change', function (event) {
    if (event.matches) countOnWindow = 2;
    else countOnWindow = 3;
})
mobileWidthMedia_575.addEventListener('change', function (event) {
    if (event.matches) countOnWindow = 1;
    else countOnWindow = 2;
})

slides.forEach(function(sl,i){
    sl.style.transform = `translateX(${107*i}%)` //Позиционируем карточки проектов
    sl.addEventListener('click',function(e){ // Вызов модального окна
        modal.style.display = 'block'
         //Получаем из имени класса номер слайда - число после символов '--'
        selectedPrj = 0;
        selectedPrj = e.currentTarget.className.slice(e.currentTarget.className.indexOf('--')+2);
        arrPrj[selectedPrj].renderModal();
        console.log(`Выбрали ${selectedPrj}`);
        countPhoto = arrPrj[selectedPrj].photos.length;
        console.log(`Количесвто фото ${countPhoto}`);

        modalImgR.hidden = false;
        modalImgL.hidden = false;
        modalBtnR.hidden = false;
        modalBtnL.hidden = false;
    });
})

modal.addEventListener('click',function(e){ //Обработка клика на свободной области и закрытие модального окна
    if(e.target.className === 'portfolio__modalBackground'){
        modal.style.display = 'none';
        document.querySelector(".portfolio__head").remove();
        document.querySelector(".modal-wrapper").remove();
        currPhoto = 0;
    }
})

closeX.addEventListener('click',function(){// Закрытие модального окна по крестику
    modal.style.display = 'none';
    document.querySelector(".portfolio__head").remove();
    document.querySelector(".modal-wrapper").remove();
    currPhoto = 0;
})


function goToSlide(slides,slide){
// Преобразовываем в массив, т.к. динамичную коллекцию нельзя перебрать
    Array.from(slides).forEach(function(s,i){
        s.style.transform = `translateX(${(i-slide)*107}%)`
    })
}
// Листаем кнопками карточки проектов--------------------------------------------
// countOnWindow - количесвто видимых слайдов на экране
// countSlide - всего слайдов в карусели
// slides - Контейнер для слайдов (оберток фоток)
// btnRight - объект кнопка правая
// imgRightArrows - объект картинка правой кнопки
// btnLeft - объект кнопка левая
// imgLeftArrows - объект картинка левой кнопки
//-----------------------------------------------------------------------------

// Обработка перемотки карточек проектов---------------------------------------
    imgLeftArrows.hidden = true;
    btnRight.hidden = false;
    btnLeft.hidden = false;

    function toRightPrj(){
        if(currSlide<countSlide-countOnWindow){ currSlide++;
        goToSlide(slides,currSlide);
        imgRightArrows.hidden = false;
        imgLeftArrows.hidden = false;
        }else{
            imgRightArrows.hidden = true;
        }
    }

    function toLeftPrj(){
        if(currSlide>0){currSlide--;
            goToSlide(slides, currSlide);
            imgRightArrows.hidden = false;
            imgLeftArrows.hidden = false;
        }
        else {
            imgLeftArrows.hidden = true;
        }
    }
    
    btnRight.addEventListener('click',toRightPrj)
    btnLeft.addEventListener('click',toLeftPrj)

    let x,y,newX,newY;
    slider.addEventListener('touchstart',function(e){
        touch = e.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    });
    
    slider.addEventListener('touchend',function(e){
        touch = e.changedTouches[0];
        newX = touch.pageX;
        newY = touch.pageY;
        if (newX-x<-30) toRightPrj();
        if (newX-x>30) toLeftPrj();
    });

// Обработка перемотки всех фото соответствующего проекта---------------------------------------

// const modalWrp = document.getElementsByClassName("modal-wrapper__img-wrapper");
// const modalBtnR = document.querySelector(".modal-wrapper__btn--right");
// const modalBtnL = document.querySelector(".modal-wrapper__btn--left");
// const modalImgR = document.querySelector(".modal-wrapper__arrows_right")
// const modalImgL = document.querySelector(".modal-wrapper__arrows_left")

    modalImgL.hidden = true;
    modalBtnR.hidden = false;
    modalBtnL.hidden = true;
    let currPhoto = 0;
    
    function goToRightFoto(){
        if(currPhoto<countPhoto-1){ currPhoto++;
            goToSlide(modalWrp,currPhoto);
            modalImgR.hidden = false;
            modalImgL.hidden = false;
            modalBtnR.hidden = false;
            modalBtnL.hidden = false;
        }else{
            modalImgR.hidden = true;
            modalBtnR.hidden = true;
        }
    }
    function goToLeftFoto(){
        if(currPhoto>0){currPhoto--;
            goToSlide(modalWrp, currPhoto);
            modalImgR.hidden = false;
            modalImgL.hidden = false;
            modalBtnR.hidden = false;
            modalBtnL.hidden = false;
        }
        else {
            modalImgL.hidden = true;
            modalBtnL.hidden = true;
        }
    }
    
    modalBtnR.addEventListener('click',goToRightFoto)
    modalBtnL.addEventListener('click',goToLeftFoto)

    modalActive.addEventListener('touchstart',function(e){
        touch = e.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    });
    modalActive.addEventListener('touchend',function(e){
        touch = e.changedTouches[0];
        newX = touch.pageX;
        newY = touch.pageY;
        if (newX-x<-30) goToRightFoto();
        if (newX-x>30) goToLeftFoto();
    })

    // -------------------------------------------------------------------------------------------
    
    // Плавный скрол к разделам при ннажатии на пункты меню

    // Раздео О нас
    const element = document.querySelector('#aboutUs')
    document.querySelector("#nav-1").addEventListener("click",function(){element.scrollIntoView({behavior: "smooth"})
    })
    // Раздел Портфолио
    const portf = document.querySelector('#portfolio')
    document.querySelector("#nav-2").addEventListener("click",function(){portf.scrollIntoView({behavior: "smooth"})
    })
    // Раздел Цены
    const price = document.querySelector('#price')
    document.querySelector("#nav-3").addEventListener("click",function(){price.scrollIntoView({behavior: "smooth"})
    })
    // Раздел Контакты (footer)
    const footer = document.querySelector('#footer')
    document.querySelector("#nav-4").addEventListener("click",function(){footer.scrollIntoView({behavior: "smooth"})
    })

    // Главный раздел при нажатии на логотип
    const logo = document.querySelector('#header')
    document.querySelector(".footer__logo").addEventListener("click",function(){logo.scrollIntoView({behavior: "smooth"})
    })

    // Обработка кнопки для вызова формы обратной связи
    buttons.forEach(function (value){    
        value.addEventListener('click',function(){
            formHidden.classList.remove('form__hidden')
        })
    })

    // Обработка кнопки для закрытия формы обратной связи
    closeForm.addEventListener('click', function(){
        form.classList.add('form__hidden')
    })

    
// Отправка письма из формы обратной связи в асинхронном режиме 
function submitForm() {
    // console.log("Отправить"); 
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "../mail.php",true);
    xhr.send(formData);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
          // Успешно обработанный запрос
        // console.log(xhr.responseText);
            alert("Письмо отправлено");
            form.reset();
        } else {
          // Ошибка запроса
        //   console.error('Ошибка: ' + xhr.status);
            alert("Что-то пошло не так");
          }
    }
    xhr.onerror = function() {
        alert("Отсутствует соединение или невалидный URL");
    };
}
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращение стандартной отправки формы
  submitForm(); // Здесь вызывается функция отправки формы через AJAX
  form.classList.add('form__hidden')
});


