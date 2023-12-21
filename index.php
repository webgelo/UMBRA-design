<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Дизайн студия UMBRA design group - команда профессионалов дизайнеров </title>
    <link type="image/svg+xml" sizes="32x32" rel="icon" href="img/UMBRA dg logo.svg" />
    <meta name="description" content="Создаем интерьеры квартир, домов, офисных и промышленных помещений, которые улучшат качество вашей жизни за счет грамотного баланса эстетики и комфорта" />
</head>
<body>
    <header id="header">
        <nav class="nav-menu">
            <a href="#"><img class="nav-menu__logo logo" src="img/UMBRA dg logo.svg" alt="Логотип UMBRA design group"></a>
            <ul class="nav-menu__list">
                <li id="nav-1" class="nav-menu__item">о нас</li>
                <li id="nav-2" class="nav-menu__item">портфолио</li>
                <li id="nav-3" class="nav-menu__item">цены</li>
                <li id="nav-4" class="nav-menu__item">контакты</li>
            </ul>
            <div class="nav-menu__contacts contacts">
                <div class="nav-menu__phone">
                <a class="nav-menu__phone-item" href="tel:+7 952 44 17 600">+7 952 44 17 600</a>
                <a class="nav-menu__phone-item" href="tel:+7 951 91 95 672">+7 951 91 95 672</a>
                </div>
                <div class="nav-menu__social-net">
                    <a href="https://t.me/doma_kristina_guseva" target="_blank"><img class="nav-menu__img-item" src="icon/telegram-logo.png" alt="Telegram"></a>
                    <a href="https://www.instagram.com/umbrainterior" target="_blank"><img class="nav-menu__img-item" src="icon/instagram-logo.png" alt="Instagram"></a>
                </div>
            </div>
        </nav>
    </header>
    <!-- Главная секция------------------------------------------------------------------------------->
    <section class="section-main">
            <!-- полупрозрачный прямоугольник -->
            <h1 class="section-main__h1">Дизайн проект</h1>
            <div class="section-main__box">
                <p class="section-main__header">Создадим интерьер</p>
                <p class="section-main__text">который улучшит качество вашей жизни за <br> счет грамотного баланса эстетики и комфорта</p>
            </div>
            <button class="section-main__btn button">
                Получить консультацию
            </button>
            
            <form class="form" action="./mail.php" method="post">
                <div class="form__form-group">
                   <input type="name" name="name" class="form-control" id="name" placeholder="Ваше имя">
                   <label for="name">Ваше имя:</label>
                </div>
                <div class="form__form-group">
                   <input type="email" name="email" class="form-control" id="email1" placeholder="Email">
                   <label for="email1">E-mail:</label>
                </div>
                <div class="form__form-group">
                   <input type="phone" name="phone" class="form-control" id="phone" placeholder="Phone">
                   <label for="phone">Номер телефона:</label>
                </div>
                <div class="form__form-group">
                   <textarea class="form__form-control" name="message" rows="3"></textarea>
                   <label for="message">Сообщение:</label>
                </div>
                   <button type="submit" class="form__btn">Отправить сообщение</button>
            </form>

    </section> <!--------------------------------------------------------------------------------------->

    <!-- Секция Поможем Вам ---------------------------------------------------------------------------->
    <section class="section-help">
        <div class="section-help__content-container content-container">
            <h2 class="section-help__header header">Поможем Вам</h2>
            <h3 class="section-help__subheader subheader">профессионально и качественно</h3>
            <div class="section-help__wraper">
                <img class="section-help__designer-img" src="img/designer3.1.jpg" alt="Фото дизайнера">
                <div class="section-help__wraper-text">
                    <p class="section-help__text">
                        &bull; <span>Выберем квартиру</span>, отвечающую вашим запросам<br>
                        &bull; <span>Разработаем планировку</span>, идеальную для вашего образа жизни<br>
                        &bull; Поможем <span>определиться со стелевым решением</span> интерьера
                    </p>
                </div>
            </div>
            <div class="section-help__wraper section-help__wraper_reverse">
                <img class="section-help__designer-img" src="img/designer2.1.jpg" alt="Фото дизайнера">
                <div class="section-help__wraper-text">
                    <p class="section-help__text">
                        &bull; <span>Нарисуем интерьер</span>, в котором вам будет хорошо и удобно жить<br>
                        &bull; Разработаем подробную и понятную <span>проектную документацию</span><br>
                        &bull; Заранее <span>спланируем бюджет</span> на ремонт
                    </p>
                </div>
            </div>
            <div class="section-help__wraper">
                <img class="section-help__designer-img" src="img/designer1.1.jpg" alt="Фото дизайнера">
                <div class="section-help__wraper-text">
                    <p class="section-help__text">
                        &bull; <span>Сбережем</span> ваше <span>время и нервы</span> для более важных задач<br>
                        &bull; Подберем наполнение интерьера, <span>как на картинке</span><br>
                        &bull; Поможем <span>избежать переделок</span> и лишних вопросов на стройке
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Секция Портфолио--------------------------------------------------------------------------------- -->
    <section id="portfolio" class="portfolio">
        <div class="portfolio__header-wrapper">    
            <h2 class="portfolio__header header">Портфолио</h2>
            <h3 class="portfolio__subheader subheader">наши работы</h3>
        </div>
        <div class="portfolio__content-container content-container">
            <button class="carousel-wrapper__btn carousel-wrapper__btn--left">
                <img class="carousel-wrapper__arrows carousel-wrapper__arrows_left" src="icon/arrows-left.png" alt="">
            </button>
            <div class="carousel-wrapper">
                <!-- Сюда из скрипта вставляются карточки проектов -->
            </div>
            <button class="carousel-wrapper__btn carousel-wrapper__btn--right">
                <img class="carousel-wrapper__arrows carousel-wrapper__arrows_right" src="icon/arrows-right.png" alt="">
            </button>
        </div>
        
        <div class="portfolio__modalBackground"> <!-- Модальное окно -->
            <div class="portfolio__modalActive">
                <div class="portfolio__modalClose">
                    <img class="portfolio__x" src="icon/XX.png" />
                </div>
                <div class="portfolio__modalWindow"> <!-- Само окно --> 
                    
                    <button class="modal-wrapper__btn modal-wrapper__btn--left"> <!-- Лева кнопка -->
                        <img class="modal-wrapper__arrows modal-wrapper__arrows_left" src="icon/left.png" alt="">
                    </button>
                    <button class="modal-wrapper__btn modal-wrapper__btn--right"><!-- Правая кнопка -->
                        <img class="modal-wrapper__arrows modal-wrapper__arrows_right" src="icon/right.png" alt="">
                    </button>
                    
                    <!--<div class="portfolio__head"></div>  сюда из скрипта вставляется div с информацией по проекту -->
                    <!-- <div class="modal-wrapper"></div> Сюда из скрипта вставляются div c  карточками проектов -->
                    
                </div>
            </div>
        </div>
    </section>

    <!-- Секция Услуги и цены---------------------------------------------------------------------------- -->
    <section id="price" class="prices">
        <div class="prices__content-container content-container">
            <h2 class="prices__header header">Услуги и цены</h2>
            <h3 class="prices__subheader subheader">варианты сотрудничества</h3>
            <div class="prices__wrapper">
                <div class="ticket-price">
                    <h3 class="ticket-price__header">Тариф <span>Light</span> <b>2100</b> руб/м&sup2;</h3>
                    <table>
                        <tbody>
                            <tr><td>замер помещения</td><td>&#10004;</td></tr>
                            <tr><td>планировочные решения</td><td>&#10004;</td></tr>
                            <tr><td>авторская концепция интерьера</td><td>&#10004;</td></tr>
                            <tr><td>коллажная подача </td><td>&#10004;</td></tr>
                            <tr><td>один круг правок </td><td>&#10004;</td></tr>
                            <tr><td></td><td></td></tr>     
                            <tr><td>базовый комплект чертежей (планы перегородок, пола, потолка, электрики, сантехники, отделки) </td><td>&#10004;</td></tr>
                            <tr><td>развертки стен </td><td>&mdash;</td></tr>
                            <tr><td>чертежи мебели </td><td>&mdash;</td></tr>
                            <tr><td></td><td></td></tr>                                
                            <tr><td>спецификации и сметы </td><td>&mdash;</td></tr>
                            <tr><td>авторский надзор </td><td>&mdash;</td></tr>
                        </tbody>
                    </table>
                    <hr class="ticket-price__hr">
                </div>
                <div class="ticket-price">
                    <h3 class="ticket-price__header">Тариф <span>Standart</span> <b>2600</b> руб/м&sup2;</h3>
                    <table>
                        <tbody>
                            <tr><td>замер помещения</td><td>&#10004;</td></tr>
                            <tr><td>планировочные решения</td><td>&#10004;</td></tr>
                            <tr><td>авторская концепция интерьера</td><td>&#10004;</td></tr>
                            <tr><td>коллажная подача </td><td>&#10004;</td></tr>
                            <tr><td>один круг правок </td><td>&#10004;</td></tr>
                            <tr><td></td><td></td></tr>     
                            <tr><td>базовый комплект чертежей (планы перегородок, пола, потолка, электрики, сантехники, отделки) </td><td>&#10004;</td></tr>
                            <tr><td>развертки стен </td><td>&#10004;</td></tr>
                            <tr><td>чертежи мебели </td><td>&#10004;</td></tr>
                            <tr><td></td><td></td></tr>                                
                            <tr><td>спецификации и сметы </td><td>&mdash;</td></tr>
                            <tr><td>авторский надзор </td><td>&mdash;</td></tr>
                        </tbody>
                    </table>
                    <hr class="ticket-price__hr">
                    <p class="ticket-price__footer-text"><span>*</span> самый популярный тариф</p>
                </div>        
                <div class="ticket-price">
                    <h3 class="ticket-price__header">Тариф <span>VIP</span> <b>3950</b> руб/м&sup2;</h3>
                    <table>
                        <tbody>
                            <tr><td>замер помещения</td><td>&#10004;</td></tr>
                            <tr><td>планировочные решения</td><td>&#10004;</td></tr>
                            <tr><td>авторская концепция интерьера</td><td>&#10004;</td></tr>
                            <tr><td>коллажная подача </td><td>&#10004;</td></tr>
                            <tr><td>один круг правок </td><td>&#10004;</td></tr>
                            <tr><td></td><td></td></tr>     
                            <tr><td>базовый комплект чертежей (планы перегородок, пола, потолка, электрики, сантехники, отделки) </td><td>&#10004;</td></tr>
                            <tr><td>развертки стен </td><td>&#10004;</td></tr>
                            <tr><td>чертежи мебели </td><td>&#10004;</td></tr>
                            <tr><td></td><td></td></tr>                                
                            <tr><td>спецификации и сметы </td><td>&#10004;</td></tr>
                            <tr><td>авторский надзор </td><td>&#10004;</td></tr>
                        </tbody>
                    </table>
                    <hr class="ticket-price__hr">
                </div>
            </div>
            <p class="prices__footer-text">Указана стоимость пакетных предложений для дизайна жилых помещений.<br>Стоимость дизайна коммерческих объектов -20% - 30% . Зависит от типа интерьера и его площади.</p>
            <button class="prices__btn button">
                Рассчитать стоимость проекта
            </button>
        </div>
    </section>
    <!-- Секция О нас---------------------------------------------------------------------------------------- -->
    <section id="aboutUs" class="about">
        <div class="about__content-container content-container">
            <h2 class="about__header header">О нас</h2>
            <h3 class="about__subheader subheader">образование, опыт, подход</h3>
            <div class="about__wrapper">
                <div class="about__designer-foto-wrp">
                    <a href="tel:+7 952 44 17 600">   
                        <img class="about__designer-foto" src="img/guseva-fotor.jpg" alt="Фото дизайнера">
                    </a> 
                </div>
                <div class="about__designer-foto-wrp">
                    <a href="tel:+7 951 91 95 672">    
                        <img class="about__designer-foto" src="img/dementieva-fotor.jpg" alt="Фото дизайнера">
                    </a>
                </div>
                <div class="about__text-wrp">
                    <p class="about__text">&bull;дизайнеры <span>Кристина Гусева</span> и <span>Галина Дементьева</span><br>
                        &bull;<span>профильное образование</span>, выпускницы ННГАСУ<br>
                        &bull;опыт практической деятельности <span>более 10 лет</span><br><br>
                        &bull;не только рисуем картинки, но и <span>ведем стройки</span><br>
                        &bull;предлагаем <span>командный подход</span> к реализации проектов<br>
                        &bull;<span>слышим</span> ваши <span>пожелания</span><br><br>
                        &bull;при проектировании <span>учитываем бюджет</span> на ремонт<br>
                        &bull;рекомендуем только <span>проверенных поставщиков</span><br>
                        &bull;наши интерьеры <span>выглядят дороже</span>, чем обходятся по факту<br>
                        &bull;знаем, как реализовать проект <span>как на картинке</span></p>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer" class="footer">
        <div class="footer__content-container content-container">
            <div class="footer__first-wrap">    
                <div class="footer__logo">
                    <img class="footer__logo logo" src="img/UMBRA dg logo.svg" alt="Логотип UMBRA design group">
                </div>
                <div class="footer__social-net">
                    <a href="https://t.me/doma_kristina_guseva" target="_blank"><img class="footer__img-item" src="icon/telegram-logo.png" alt="Telegram"></a>
                    <a href="https://www.instagram.com/umbrainterior" target="_blank"><img class="footer__img-item" src="icon/instagram-logo.png" alt="Instagram"></a>
                </div>
                <div class="footer__contacts">
                    <h3 class="footer__company-name"><span>UMBRA</span> design group</h3>
                    <div class="footer__phone-wrap">
                        <img src="icon/telephone_159832.png" alt="Иконка телефон" class="footer__phone-icon">
                        <a class="footer__item" href="tel:+7 952 44 17 600">+7 952 44 17 600</a> 
                    </div>
                    <div class="footer__phone-wrap">
                        <img src="icon/telephone_159832.png" alt="Иконка телефон" class="footer__phone-icon">
                        <a class="footer__item" href="tel:+7 951 91 95 672">+7 951 91 95 672</a>
                    </div>
                    <a class="footer__item" href="mailto:umbrainterior@yandex.ru?subject=Запрос на рассчет стоимости проекта">umbrainterior@yandex.ru</a>
                </div>
            </div>
            <hr class="footer__hr">
            <div class="footer__second-wrap">
                <div class="footer__subfooter-wrap">
                    <p class="footer__subfooter-text">
                        Студия дизайна интерьеров UMBRA design group <br>
                        Политика обработки персональных данных</p>
                </div>
                <div class="footer__subfooter-wrap">
                    <p class="footer__subfooter-text">
                        Разработка сайта <br>
                        Студия M-Web <br>
                        <a href="mailto:moiseevou@mail.ru">&#9993; moiseevou@mail.ru</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    <script src="js/Projects.js"></script>
    <script src="js/script.js"></script>
</body>
</html>