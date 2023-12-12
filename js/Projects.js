// Класс для дизайн проектов с описанием и массивом фото для каждого------------------------------------
class DesignProjects  {
    constructor(numberPrj, name, path, area, mainPhoto, photos = []){
    this.numberPrj = numberPrj;
    this.name = name;
    this.path = path;
    this.area = area;
    this.mainPhoto = this.path+mainPhoto;
    this.photos = photos;
    }
    render(){
        /* --${this.numberPrj} */
        document.querySelector(".carousel-wrapper").insertAdjacentHTML("beforeend",`
        <div class="carousel-wrapper__photo-ticket photo-ticket--${this.numberPrj}"> 
                    <div class="carousel-wrapper__img-wrapper">
                        <img src=${this.mainPhoto} alt="Фото проекта">
                    </div>
                    <p class="carousel-wrapper__design-obj">${this.name}</p>
                    <p class="carousel-wrapper__obj-info">Площадь ${this.area} м&sup2</p>
                </div>
        `)
    }
    renderModal(){
        let fullNamePhoto = this.path;
        document.querySelector(".portfolio__modalWindow").insertAdjacentHTML("beforeend",`
        <div class="portfolio__head">
            <h2 class="portfolio__subheader_modal subheader">${this.name} &nbsp;&nbsp;&nbsp;&nbsp;площадь ${this.area} м&sup2</h2>
        </div>
        <div class="modal-wrapper"></div> 
        `)
        const modalWrpObj = document.querySelector(".modal-wrapper")

        this.photos.forEach(function(photo,i){
            modalWrpObj.insertAdjacentHTML("beforeend", `
            <div class = "modal-wrapper__img-wrapper">
                <img src="${fullNamePhoto}${photo}" alt="Фото проекта">
            </div>
            `);
        })
        document.querySelectorAll(".modal-wrapper__img-wrapper").forEach(function(val,i){
        val.style.transform = `translateX(${100*i}%)`;
        })
    }
}
// ---------------------------------------------------------------------------------------------------

let arrPrj =[];

arrPrj[0] = new DesignProjects (
    0, //Номер проекта в массиве проектов
    "Прорыв года", // Название проекта (идет на сайт)
    "img/project1/", // Путь до фото проекта
    600, // Плащадь объекта 
    "xB8DlUkQjQo.jpg", // Главное фото проекта
    ["PIC_8391121121.jpg","0HMvgm_8WlY.jpg","5nAgB_XepqA.jpg","43YAPu1widg.jpg"] // Массив фотографий проекта
    );
arrPrj[1] = new DesignProjects (
    1,
    "Квартира 1",
    "img/project1/",
    100,
    "0HMvgm_8WlY.jpg",
    ["0HMvgm_8WlY.jpg","5nAgB_XepqA.jpg","43YAPu1widg.jpg"]
    );
arrPrj[2] = new DesignProjects (
    2,
    "Общага на Лядова",
    "img/project1/",
    1200,
    "5nAgB_XepqA.jpg",
    ["0HMvgm_8WlY.jpg","5nAgB_XepqA.jpg","43YAPu1widg.jpg"]
    );
arrPrj[3] = new DesignProjects (
    3,
    "Офис дома",
    "img/project1/",
    30,
    "43YAPu1widg.jpg",
    ["0HMvgm_8WlY.jpg","5nAgB_XepqA.jpg","43YAPu1widg.jpg"]
    );
arrPrj[4] = new DesignProjects (
    4,
    "Офис Сбера",
    "img/project1/",
    120,
    "gMc2KiOKh8c.jpg",
    ["0HMvgm_8WlY.jpg","5nAgB_XepqA.jpg","43YAPu1widg.jpg"]
    );
arrPrj[5] = new DesignProjects (
    5,
    "Дом Деда Мороза",
    "img/project1/",
    400,
    "hall5.jpg",
    ["0HMvgm_8WlY.jpg","5nAgB_XepqA.jpg","43YAPu1widg.jpg"]
    );

arrPrj.forEach(function(val){
    val.render();
})
    

