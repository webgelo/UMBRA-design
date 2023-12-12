const slides = document.querySelectorAll(".carousel-wrapper__photo-ticket")
const slider = document.querySelector(".carousel-wrapper")
const btnLeft = document.querySelector(".carousel-wrapper__btn--left")
const btnRight = document.querySelector(".carousel-wrapper__btn--right")
const imgLeftArrows = document.querySelector('.carousel-wrapper__arrows_left') //Картинка Стрелки влево
const imgRightArrows = document.querySelector('.carousel-wrapper__arrows_right')//Картинка Стрелки вправо
const modal = document.querySelector('.portfolio__modalBackground')
const closeX = document.querySelector('.portfolio__modalClose')

const modalWrp = document.getElementsByClassName("modal-wrapper__img-wrapper");
const modalBtnR = document.querySelector(".modal-wrapper__btn--right");
const modalBtnL = document.querySelector(".modal-wrapper__btn--left");
const modalImgR = document.querySelector(".modal-wrapper__arrows_right")
const modalImgL = document.querySelector(".modal-wrapper__arrows_left")

let targetSlide = 0


const countOnWindow = 4 //Количесвто карточек проектов на экране в секции Портфолио
const countSlide = slides.length //Количество проектов всего

let currSlide = 0 //номер активного слайда в первой позиции карусели. Не путать с выбранным слайдом по клику
let selectedPrj // Номер выбранного пользователем проекта в карусели
let countPhoto = 0; //Количесвто фото в проекте

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

// function slidePhoto(countOnWindow,countOfSlide,slides,btnRight,imgRightArrows,btnLeft,imgLeftArrows){
//     // let currSlide = 0;
//         console.log("Ого");
//         imgLeftArrows.hidden = true;
//         btnRight.hidden = false;
//         btnLeft.hidden = false;
//     btnRight.addEventListener('click',function(){
//         if(currSlide<countOfSlide-countOnWindow){ currSlide++;
//         console.log(`${currSlide} ? ${countOfSlide}-${countOnWindow}`);
//         goToSlide(slides,currSlide);
//         imgRightArrows.hidden = false;
//         imgLeftArrows.hidden = false;
//         btnRight.hidden = false;
//         btnLeft.hidden = false;
//         }else{
//             imgRightArrows.hidden = true;
//             btnRight.hidden = true;
//         }
//     })
//     btnLeft.addEventListener('click',function(){
//         if(currSlide>0){currSlide--;
//         goToSlide(slides, currSlide);
//         imgRightArrows.hidden = false;
//         imgLeftArrows.hidden = false;
//         btnRight.hidden = false;
//         btnLeft.hidden = false;
//         }
//         else {
//             imgLeftArrows.hidden = true;
//             btnLeft.hidden = true;
//         }

//     })
// }
// slidePhoto(4,countSlide, slides, btnRight,imgRightArrows,btnLeft,imgLeftArrows);

//-----------------------------------------------------------------------------
// Обработка перемотки карточек проектов---------------------------------------
    imgLeftArrows.hidden = true;
    btnRight.hidden = false;
    btnLeft.hidden = false;

    btnRight.addEventListener('click',function(){
        if(currSlide<countSlide-countOnWindow){ currSlide++;
        goToSlide(slides,currSlide);
        imgRightArrows.hidden = false;
        imgLeftArrows.hidden = false;

        }else{
            imgRightArrows.hidden = true;
        }
    })
    btnLeft.addEventListener('click',function(){
        if(currSlide>0){currSlide--;
        goToSlide(slides, currSlide);
        imgRightArrows.hidden = false;
        imgLeftArrows.hidden = false;
        }
        else {
            imgLeftArrows.hidden = true;
        }

    })

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
    modalBtnR.addEventListener('click',function(){
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
    })
    modalBtnL.addEventListener('click',function(){
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