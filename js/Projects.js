// Класс для дизайн проектов с описанием и массивом фото для каждого------------------------------------
class DesignProjects  {
    constructor(numberPrj, name, path, descr, mainPhoto, photos = []){
    this.numberPrj = numberPrj;
    this.name = name;
    this.path = path;
    this.descr = descr;
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
                    <p class="carousel-wrapper__obj-info">${this.descr}</p>
                </div>
        `)
    }
    renderModal(){
        let fullNamePhoto = this.path;
        document.querySelector(".portfolio__modalWindow").insertAdjacentHTML("beforeend",`
        <div class="portfolio__head">
            <h2 class="portfolio__subheader_modal subheader">${this.name} &nbsp;&nbsp;&nbsp;&nbsp;${this.descr}</h2>
        </div>
        <div class="modal-wrapper"></div> 
        `)
        const modalWrpObj = document.querySelector(".modal-wrapper")

        this.photos.forEach(function(photo,i){
            modalWrpObj.insertAdjacentHTML("beforeend", `
            <div class = "modal-wrapper__img-wrapper">
                <img src="${fullNamePhoto}${photo}" alt="Фото дизайн проекта">
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
    "Администартивное здание", // Название проекта (идет на сайт)
    "img/admBuilding/", // Путь до фото проекта
    "Дизайн зон общего пользования, S=242.2 м&sup2", // Доп. описание проекта 
    "001.jpg", // Главное фото проекта
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg","018.jpg","019.jpg","020.jpg","021.jpg","022.jpg","023.jpg"] // Массив фотографий проекта
    );
arrPrj[1] = new DesignProjects (
    1,
    "Баня",
    "img/bathhouse/",
    "",
    "Bathhose_001.jpg",
    ["Bathhose_001.jpg","Bathhose_002.jpg","Bathhose_003.jpg","Bathhose_004.jpg"]
    );
arrPrj[2] = new DesignProjects (
    2,
    "Детская комната",
    "img/chldroom/",
    "",
    "chldroom_001.jpg",
    ["chldroom_001.jpg","chldroom_002.jpg","chldroom_003.jpg","chldroom_004.jpg","chldroom_005.jpg"]
    );
arrPrj[3] = new DesignProjects (
    3,
    "Квартира ул. С.Акимова",
    "img/flat_akimova_str/",
    "Плошадь 68 м&sup2",
    "flat_akimova_str_002.jpg",
    ["flat_akimova_str_000.jpg","flat_akimova_str_001.jpg","flat_akimova_str_002.jpg","flat_akimova_str_003.jpg","flat_akimova_str_004.jpg","flat_akimova_str_005.jpg","flat_akimova_str_006.jpg","flat_akimova_str_007.jpg","flat_akimova_str_008.jpg","flat_akimova_str_009.jpg","flat_akimova_str_010.jpg","flat_akimova_str_011.jpg","flat_akimova_str_012.jpg","flat_akimova_str_013.jpg","flat_akimova_str_014.jpg","flat_akimova_str_015.jpg","flat_akimova_str_016.jpg","flat_akimova_str_017.jpg","flat_akimova_str_018.jpg","flat_akimova_str_019.jpg","flat_akimova_str_020.jpg"]
    );
arrPrj[4] = new DesignProjects (
    4,
    "Квартира  ЖК Цветы",
    "img/flat_flowers/",
    "",
    "flat_flowers_002.jpg",
    ["flat_flowers_002.jpg","flat_flowers_003.jpg","flat_flowers_004.jpg","flat_flowers_005.jpg","flat_flowers_006.jpg","flat_flowers_007.jpg","flat_flowers_008.jpg","flat_flowers_010.jpg","flat_flowers_011.jpg","flat_flowers_012.jpg","flat_flowers_013.jpg","flat_flowers_014.jpg","flat_flowers_015.jpg","flat_flowers_016.jpg",]
    );
arrPrj[5] = new DesignProjects (
    5,
    "Квартира  ул.Республиканская",
    "img/flat_respublic/",
    "",
    "flat_respublic_001.jpg",
    ["flat_respublic_001.jpg","flat_respublic_002.jpg","flat_respublic_003.jpg","flat_respublic_004.jpg","flat_respublic_005.jpg","flat_respublic_006.jpg","flat_respublic_007.jpg","flat_respublic_008.jpg","flat_respublic_009.jpg","flat_respublic_010.jpg","flat_respublic_011.jpg","flat_respublic_012.jpg","flat_respublic_013.jpg","flat_respublic_014.jpg","flat_respublic_015.jpg"]
    );
arrPrj[6] = new DesignProjects (
    6,
    "Квартира ул.Щербакова",
    "img/flat_sherbakov_str/",
    "",
    "flat_sherbakov_str_010.jpg",
    ["flat_sherbakov_str_001.jpg","flat_sherbakov_str_002.jpg","flat_sherbakov_str_003.jpg","flat_sherbakov_str_004.jpg","flat_sherbakov_str_005.jpg","flat_sherbakov_str_006.jpg","flat_sherbakov_str_007.jpg","flat_sherbakov_str_008.jpg","flat_sherbakov_str_009.jpg","flat_sherbakov_str_010.jpg","flat_sherbakov_str_011.jpg","flat_sherbakov_str_012.jpg","flat_sherbakov_str_013.jpg","flat_sherbakov_str_014.jpg","flat_sherbakov_str_015.jpg","flat_sherbakov_str_016.jpg","flat_sherbakov_str_017.jpg","flat_sherbakov_str_018.jpg","flat_sherbakov_str_019.jpg","flat_sherbakov_str_020.jpg","flat_sherbakov_str_021.jpg","flat_sherbakov_str_022.jpg","flat_sherbakov_str_023.jpg","flat_sherbakov_str_024.jpg","flat_sherbakov_str_025.jpg","flat_sherbakov_str_026.jpg","flat_sherbakov_str_027.jpg","flat_sherbakov_str_028.jpg","flat_sherbakov_str_029.jpg","flat_sherbakov_str_030.jpg","flat_sherbakov_str_031.jpg","flat_sherbakov_str_032.jpg","flat_sherbakov_str_033.jpg","flat_sherbakov_str_034.jpg","flat_sherbakov_str_035.jpg","flat_sherbakov_str_036.jpg","flat_sherbakov_str_037.jpg","flat_sherbakov_str_038.jpg","flat_sherbakov_str_039.jpg","flat_sherbakov_str_040.jpg","flat_sherbakov_str_041.jpg","flat_sherbakov_str_042.jpg","flat_sherbakov_str_043.jpg","flat_sherbakov_str_044.jpg","flat_sherbakov_str_045.jpg","flat_sherbakov_str_046.jpg",]
    );
arrPrj[7] = new DesignProjects (
    7,
    "Квартира пр-т Союзный",
    "img/flat_souzny_prsp/",
    "",
    "flat_souzny_prsp_007.jpg",
    ["flat_souzny_prsp_001.jpg","flat_souzny_prsp_002.jpg","flat_souzny_prsp_003.jpg","flat_souzny_prsp_005.jpg","flat_souzny_prsp_006.jpg","flat_souzny_prsp_007.jpg","flat_souzny_prsp_009.jpg","flat_souzny_prsp_010.jpg",]
    );
arrPrj[8] = new DesignProjects (
    8,
    "Квартира пер.Светлогорский",
    "img/flat_svetlogorsky_per/",
    "Площадь 61 м&sup2",
    "flat_svetlogorsky_per_001.jpg",
    ["flat_svetlogorsky_per_001.jpg","flat_svetlogorsky_per_002.jpg","flat_svetlogorsky_per_003.jpg","flat_svetlogorsky_per_004.jpg","flat_svetlogorsky_per_005.jpg","flat_svetlogorsky_per_006.jpg","flat_svetlogorsky_per_007.jpg","flat_svetlogorsky_per_008.jpg","flat_svetlogorsky_per_009.jpg","flat_svetlogorsky_per_010.jpg","flat_svetlogorsky_per_011.jpg","flat_svetlogorsky_per_012.jpg","flat_svetlogorsky_per_013.jpg","flat_svetlogorsky_per_014.jpg","flat_svetlogorsky_per_015.jpg","flat_svetlogorsky_per_016.jpg","flat_svetlogorsky_per_017.jpg","flat_svetlogorsky_per_018.jpg","flat_svetlogorsky_per_019.jpg","flat_svetlogorsky_per_020.jpg","flat_svetlogorsky_per_021.jpg","flat_svetlogorsky_per_022.jpg","flat_svetlogorsky_per_023.jpg","flat_svetlogorsky_per_024.jpg",]
    );
arrPrj[9] = new DesignProjects (
    9,
    "Офисное помещение",
    "img/office_1/",
    "",
    "office_1_001.jpg",
    ["office_1_001.jpg","office_1_002.jpg","office_1_003.jpg","office_1_004.jpg","office_1_005.jpg","office_1_006.jpg","office_1_007.jpg","office_1_008.jpg","office_1_009.jpg","office_1_010.jpg","office_1_011.jpg","office_1_012.jpg","office_1_013.jpg","office_1_014.jpg","office_1_015.jpg","office_1_016.jpg","office_1_017.jpg",]
    );
arrPrj[10] = new DesignProjects (
    10,
    "Офисное помещение",
    "img/office_2_120m/",
    "Площадь 120 м&sup2",
    "office_2_120m_002.jpg",
    ["office_2_120m_001.jpg","office_2_120m_002.jpg","office_2_120m_003.jpg","office_2_120m_004.jpg","office_2_120m_005.jpg","office_2_120m_006.jpg","office_2_120m_007.jpg","office_2_120m_008.jpg","office_2_120m_009.jpg","office_2_120m_010.jpg","office_2_120m_011.jpg","office_2_120m_012.jpg",]
    );
    

arrPrj.forEach(function(val){
    val.render();
})
    

