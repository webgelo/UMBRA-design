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
    0,
    "Проект #9",
    "img/magazin_belya/",
    "Магазин нижнего белья и аксессуаров в ТЦ «Республика» площадью 40 кв.м.",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg"]
);
arrPrj[1] = new DesignProjects (
    1,
    "Проект #136",
    "img/dom_tiz_nadezhda/",
    "Дом для семьи с двумя детьми, собакой и котом площадью 155 кв.м.",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg"]
);
arrPrj[2] = new DesignProjects (
    2,
    "Проект #34",
    "img/flat_gornaya/",
    "Квартира для семьи с подростком площадью 77 кв.м.",
    "001.jpg",
    ["001.jpg","002.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","012.jpg","detskaya_001.jpg","detskaya_002.jpg","detskaya_003.jpg","garderobnaya_001_.jpg","garderobnaya_002_.jpg","spalnya_001.jpg","spalnya_002.jpg","spalnya_003.jpg","spalnya_004.jpg","spalnya_005.jpg","spalnya_006.jpg","su_001.jpg","su_002.jpg","vannaya_001b.jpg","vannaya_002b.jpg","vannaya_003b.jpg","vannaya_004b.jpg"]
);
arrPrj[3] = new DesignProjects (
    3,
    "Проект #8",
    "img/kv_novaya/",
    "Квартира для семьи с двумя детьми площадью 146 кв.м.",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","detskaya D_001.jpg","detskaya D_002.jpg","detskaya D_003.jpg","detskaya D_004.jpg","detskaya D_005.jpg","detskaya D_006.jpg","detskaya D_007.jpg","detskaya D_008.jpg","detskaya M_001.jpg","detskaya M_002.jpg","detskaya M_003.jpg","detskaya M_004.jpg","detskaya M_005.jpg","detskaya M_006.jpg","garderobnaya_001.jpg","garderobnaya_002.jpg","garderobnaya_004.jpg","spalnya_001.jpg","spalnya_002.jpg","spalnya_003.jpg","spalnya_004.jpg","spalnya_005.jpg","spalnya_006.jpg","spalnya_007.jpg","spalnya_008.jpg","spalnya_009.jpg","su 1_001.jpg","su 1_002.jpg","su 2_001.jpg","su 2_002.jpg","su 2_004.jpg"]
);
arrPrj[4] = new DesignProjects (
    4,
    "Проект #30.2",
    "img/kv_shokolad/",
    "Квартира для семьи с тремя детьми площадью 96 кв.м.",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg","018.jpg","019.jpg","020.jpg","021.jpg","022.jpg","023.jpg","024.jpg","025.jpg","026.jpg","027.jpg"]
);
arrPrj[5] = new DesignProjects (
    5,
    "Проект #11.5.1",
    "img/office_ait/",
    "Офисное помещение инженерно-технологической компании площадью  262 кв.м.",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg","018.jpg","019.jpg","020.jpg","021.jpg","022.jpg","023.jpg","024.jpg","025.jpg","026.jpg","027.jpg","028.jpg","029.jpg","030.jpg","031.jpg"]
);
arrPrj[6] = new DesignProjects (
    6,
    "Проект #9",
    "img/office_ait2/",
    "Офисное помещение инженерно-технологической компании площадью  124 кв.м.",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg","018.jpg","019.jpg","020.jpg","021.jpg","022.jpg","023.jpg","024.jpg","025.jpg","026.jpg","027.jpg","028.jpg"]
);
arrPrj[7] = new DesignProjects (
    7,
    "Проект #30.3",
    "img/tc/",
    "Торговый центр в г. Нижний Новгород",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg"]
);


arrPrj[8] = new DesignProjects (
    8, //Номер проекта в массиве проектов
    "Проект #52", // Название проекта (идет на сайт)
    "img/admBuilding/", // Путь до фото проекта
    "Административное здание в г.Н.Новгород", // Доп. описание проекта 
    "zd_mosk_su_hall1.jpg", // Главное фото проекта
    ["zd_mosk_su_hall1.jpg","zd_mosk_su_hall2.jpg","zd_mosk_su_hall3.jpg","zd_mosk_su_hall4.jpg","zd_mosk_su_hall5.jpg","zd_mosk_su_hall6.jpg","zd_mosk_su_hall7.jpg","zd_mosk_su_hall8.jpg","zd_mosk_su_hall9.jpg","zd_mosk_su_hall10.jpg","zd_mosk_su_hall11.jpg","zd_mosk_su_hall12.jpg","zd_mosk_su_lest1.jpg","zd_mosk_su_lest2.jpg","zd_mosk_su_lest3.jpg","zd_mosk_su_lest4.jpg","zd_mosk_su_lest5.jpg","zd_mosk_su_lest6.jpg","zd_mosk_su_lest7.jpg","zd_mosk_su_lest8.jpg","zd_mosk_su_lest9.jpg","zd_mosk_su_muzh1.jpg","zd_mosk_su_muzh2.jpg","zd_mosk_su_muzh3.jpg","zd_mosk_su_muzh4.jpg","zd_mosk_su_muzh5.jpg","zd_mosk_su_muzh6.jpg","zd_mosk_su_muzh7.jpg","zd_mosk_su_obsh1.jpg","zd_mosk_su_obsh2.jpg","zd_mosk_su_zh1.jpg","zd_mosk_su_zh2.jpg","zd_mosk_su_zh3.jpg","zd_mosk_su_zh4.jpg"] // Массив фотографий проекта
    );
arrPrj[9] = new DesignProjects (
    9,
    "Проект #7",
    "img/bathhouse/",
    "Баня с купелью в загородном доме",
    "Bathhose_001.jpg",
    ["Bathhose_001.jpg","Bathhose_002.jpg","Bathhose_003.jpg","Bathhose_004.jpg"]
    );
arrPrj[10] = new DesignProjects (
    10,
    "Проект #30.2",
    "img/chldroom/",
    "Родительская и детские спальни в городской квартире",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg"]
    );
arrPrj[11] = new DesignProjects (
    11,
    "Проект #6",
    "img/flat_akimova_str/",
    "Квартира для семьи с дочерью площадью 68 кв.м",
    "flat_akimova_str_000.jpg",
    ["flat_akimova_str_000.jpg","flat_akimova_str_001.jpg","flat_akimova_str_002.jpg","flat_akimova_str_003.jpg","flat_akimova_str_004.jpg","flat_akimova_str_005.jpg","flat_akimova_str_006.jpg","flat_akimova_str_007.jpg","flat_akimova_str_008.jpg","flat_akimova_str_009.jpg","flat_akimova_str_010.jpg","flat_akimova_str_011.jpg","flat_akimova_str_012.jpg","flat_akimova_str_013.jpg","flat_akimova_str_014.jpg","flat_akimova_str_015.jpg","flat_akimova_str_016.jpg","flat_akimova_str_017.jpg","flat_akimova_str_018.jpg","flat_akimova_str_019.jpg","flat_akimova_str_020.jpg"]
    );
arrPrj[12] = new DesignProjects (
    12,
    "Проект #48",
    "img/flat_flowers/",
    "Квартира для семьи с сыном площадью  95 кв.м.",
    "flat_flowers_002.jpg",
    ["flat_flowers_002.jpg","flat_flowers_003.jpg","flat_flowers_004.jpg","flat_flowers_005.jpg","flat_flowers_006.jpg","flat_flowers_007.jpg","flat_flowers_008.jpg","flat_flowers_010.jpg","flat_flowers_011.jpg","flat_flowers_012.jpg","flat_flowers_013.jpg","flat_flowers_014.jpg","flat_flowers_015.jpg","flat_flowers_016.jpg",]
    );
arrPrj[13] = new DesignProjects (
    13,
    "Проект #121",
    "img/flat_respublic/",
    "Квартира для молодой пары площадью  98 кв.м. ",
    "flat_respublic_001.jpg",
    ["flat_respublic_001.jpg","flat_respublic_002.jpg","flat_respublic_003.jpg","flat_respublic_004.jpg","flat_respublic_005.jpg","flat_respublic_006.jpg","flat_respublic_007.jpg","flat_respublic_008.jpg","flat_respublic_009.jpg","flat_respublic_010.jpg","flat_respublic_011.jpg","flat_respublic_012.jpg","flat_respublic_013.jpg","flat_respublic_014.jpg","flat_respublic_015.jpg"]
    );
arrPrj[14] = new DesignProjects (
    14,
    "Проект #65",
    "img/flat_sherbakov_str/",
    "Квартира для семьи с тремя детьми площадью 110 кв.м.",
    "flat_sherbakov_str_001.jpg",
    ["flat_sherbakov_str_001.jpg","flat_sherbakov_str_002.jpg","flat_sherbakov_str_003.jpg","flat_sherbakov_str_004.jpg","flat_sherbakov_str_005.jpg","flat_sherbakov_str_006.jpg","flat_sherbakov_str_007.jpg","flat_sherbakov_str_008.jpg","flat_sherbakov_str_009.jpg","flat_sherbakov_str_010.jpg","flat_sherbakov_str_011.jpg","flat_sherbakov_str_012.jpg","flat_sherbakov_str_013.jpg","flat_sherbakov_str_014.jpg","flat_sherbakov_str_015.jpg","flat_sherbakov_str_016.jpg","flat_sherbakov_str_017.jpg","flat_sherbakov_str_018.jpg","flat_sherbakov_str_019.jpg","flat_sherbakov_str_020.jpg","flat_sherbakov_str_021.jpg","flat_sherbakov_str_022.jpg","flat_sherbakov_str_023.jpg","flat_sherbakov_str_024.jpg","flat_sherbakov_str_025.jpg","flat_sherbakov_str_026.jpg","flat_sherbakov_str_027.jpg","flat_sherbakov_str_028.jpg","flat_sherbakov_str_029.jpg","flat_sherbakov_str_030.jpg","flat_sherbakov_str_031.jpg","flat_sherbakov_str_032.jpg","flat_sherbakov_str_033.jpg","flat_sherbakov_str_034.jpg","flat_sherbakov_str_035.jpg","flat_sherbakov_str_036.jpg","flat_sherbakov_str_037.jpg","flat_sherbakov_str_038.jpg","flat_sherbakov_str_039.jpg","flat_sherbakov_str_040.jpg","flat_sherbakov_str_041.jpg","flat_sherbakov_str_042.jpg","flat_sherbakov_str_043.jpg","flat_sherbakov_str_044.jpg","flat_sherbakov_str_045.jpg","flat_sherbakov_str_046.jpg",]
    );
arrPrj[15] = new DesignProjects (
    15,
    "Проект #2",
    "img/flat_souzny_prsp/",
    "Квартира для семьи с двумя детьми",
    "001.jpg",
    ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg"]
    );
arrPrj[16] = new DesignProjects (
    16,
    "Проект #8",
    "img/flat_svetlogorsky_per/",
    "Квартира под сдачу площадью 61 кв.м.",
    "flat_svetlogorsky_per_001.jpg",
    ["flat_svetlogorsky_per_001.jpg","flat_svetlogorsky_per_002.jpg","flat_svetlogorsky_per_003.jpg","flat_svetlogorsky_per_004.jpg","flat_svetlogorsky_per_005.jpg","flat_svetlogorsky_per_006.jpg","flat_svetlogorsky_per_007.jpg","flat_svetlogorsky_per_008.jpg","flat_svetlogorsky_per_009.jpg","flat_svetlogorsky_per_010.jpg","flat_svetlogorsky_per_011.jpg","flat_svetlogorsky_per_012.jpg","flat_svetlogorsky_per_013.jpg","flat_svetlogorsky_per_014.jpg","flat_svetlogorsky_per_015.jpg","flat_svetlogorsky_per_016.jpg","flat_svetlogorsky_per_017.jpg","flat_svetlogorsky_per_018.jpg","flat_svetlogorsky_per_019.jpg","flat_svetlogorsky_per_020.jpg","flat_svetlogorsky_per_021.jpg","flat_svetlogorsky_per_022.jpg","flat_svetlogorsky_per_023.jpg","flat_svetlogorsky_per_024.jpg",]
    );
arrPrj[17] = new DesignProjects (
    17,
    "Проект #11.5.2",
    "img/office_1/",
    "Офисное помещение компании по техническим испытаниям, анализу и сертификации площадью 229 кв.м. ",
    "office_1_001.jpg",
    ["office_1_001.jpg","office_1_002.jpg","office_1_003.jpg","office_1_004.jpg","office_1_005.jpg","office_1_006.jpg","office_1_007.jpg","office_1_008.jpg","office_1_009.jpg","office_1_010.jpg","office_1_011.jpg","office_1_012.jpg","office_1_013.jpg","office_1_014.jpg","office_1_015.jpg","office_1_016.jpg","office_1_017.jpg",]
    );
arrPrj[18] = new DesignProjects (
    18,
    "Проект #2",
    "img/office_2_120m/",
    "Офис продаж металлургической компании площадью 120 кв.м.",
    "office_2_120m_001.jpg",
    ["office_2_120m_001.jpg","office_2_120m_002.jpg","office_2_120m_003.jpg","office_2_120m_004.jpg","office_2_120m_005.jpg","office_2_120m_006.jpg","office_2_120m_007.jpg","office_2_120m_008.jpg","office_2_120m_009.jpg","office_2_120m_010.jpg","office_2_120m_011.jpg","office_2_120m_012.jpg",]
    );
    

arrPrj.forEach(function(val){
    val.render();
})
    

