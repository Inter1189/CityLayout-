// импорт файлов
import {svgModalLogo} from "./svg.js"
import {svgModalCloseBtn} from './svg.js'

// проверка подключения фаила JS
console.log("JS-work")

// массив для пуша сообщений клиентов
const clientsArr = [];

// массив с данными для контента секции hero
const heroContentArr = [
  { title: 'Реставрация <br> лакокрасочного <br> покрытия',
    img: 'url("./img/cp-hero-image-1.png")',
    background: 'url(./img/cp-hero-background.png)',
  },
  { title: 'Профессиональная окраска <br> интерьера',
    img: 'url("./img/cp-hero-image-2.png")',
    background: 'url(./img/cp-hero-background-2.png',
  },
  { title: 'Профессиональная окраска <br> экстерьера',
    img: 'url("./img/cp-hero-image-3.png")',
    background: 'url(./img/cp-hero-background-3.png',
  },
];

// массив с данными для контента секции service
const serviceContentArr = [
  { title: 'Реставрация <br> лакокрасочного <br> покрытия',
    svg: `<svg class="service-item__icon" width="80" height="74" viewbox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 16.8184L20 18.4995V21.8638L0 23.5449V16.8184ZM0 34.2664L20.342 26.551L21.75 29.5994L2.817 40.3633L0 34.2664ZM2.817 0L21.75 10.7629L20.342 13.8133L0 6.09687L2.817 0ZM63.333 3.36327C61.077 3.36327 58.916 3.82341 56.953 4.65086L43.942 10.0908H33.333V13.4541H25V26.9092H33.333V30.2725H43.932L50 32.8083V38.6821H45V43.7275H50V74H60L70 60.5449V35.5812C75.882 32.9849 80 27.0777 80 20.1816C80 10.892 72.539 3.36327 63.333 3.36327ZM63.333 58.3017L56.667 67.2725V35.5933L56.953 35.7144C58.9746 36.5641 61.143 37.001 63.333 37V58.3017ZM63.333 30.2725C62.0224 30.2741 60.7246 30.0127 59.515 29.5035L45.257 23.5449H40V16.8184H45.267L59.505 10.8668C60.7169 10.3529 62.0185 10.089 63.333 10.0908C66.276 10.0908 68.899 11.4046 70.732 13.4541H61.667V18.4995H73.164C73.255 19.0505 73.333 19.6054 73.333 20.1816C73.333 20.7578 73.255 21.3128 73.164 21.8638H61.667V26.9092H70.732C68.899 28.9586 66.276 30.2725 63.333 30.2725Z" fill="white"/>
          </svg>`,
    background: 'url("./img/cp-service-item-background-image-1.png")',
    id: "1",
    ariaLabel: "получение консультации по реставрации лакокрасочного покрытия",
  },
  { title: 'Профессиональная <br> окраска <br> на объекте',
    svg: `<svg width="80" height="80" viewbox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M78.448 27.6183L74.4699 23.6404C73.1305 22.301 71.2232 21.8106 69.4677 22.2372C69.8946 20.481 69.4033 18.574 68.0645 17.235L59.4353 8.60573C58.6571 7.82689 57.6554 7.31004 56.5698 7.12712C56.3868 6.04146 55.8699 5.03983 55.0911 4.2616L52.3824 1.55284C50.3119 -0.517613 46.9551 -0.517613 44.8847 1.55284L17.7571 28.6806C15.6867 30.7509 15.6867 34.1077 17.7571 36.1781L23.5348 41.9558C23.8015 42.2213 24.0049 42.5436 24.1296 42.8987C24.2544 43.2538 24.2974 43.6324 24.2555 44.0064C24.2148 44.3814 24.0901 44.7423 23.8907 45.0624C23.6912 45.3825 23.4221 45.6534 23.1034 45.8551C5.88241 56.8324 4.26507 58.4498 3.57427 59.1406C-1.19134 63.9062 -1.19151 71.6606 3.57427 76.4261C8.33988 81.1919 16.0942 81.1919 20.86 76.4261C21.5508 75.7353 23.1683 74.1178 34.1454 56.8969C34.3472 56.5792 34.6181 56.3111 34.9378 56.1125C35.2576 55.9139 35.618 55.79 35.9923 55.75C36.7579 55.6659 37.5059 55.9267 38.0449 56.4657L43.8226 62.2434C45.893 64.3139 49.2498 64.3137 51.3203 62.2434L78.448 35.116C80.5183 33.0456 80.5183 29.6888 78.448 27.6183ZM47.5715 58.495L41.7938 52.7173C40.1187 51.0422 37.7689 50.2219 35.4141 50.4804C34.2515 50.6078 33.1324 50.9944 32.1392 51.6118C31.1459 52.2292 30.3039 53.0616 29.6751 54.0477C24.8096 61.6806 18.6806 71.1086 17.1114 72.6777C14.4084 75.3806 10.0261 75.3806 7.32321 72.6777C4.62028 69.9747 4.62028 65.5926 7.32321 62.8895C8.8923 61.3204 18.3203 55.1914 25.9532 50.3258C27.9519 49.0518 29.2667 46.9412 29.5252 44.5852C29.7838 42.2292 28.9594 39.883 27.2835 38.207L21.5059 32.4293L25.719 28.2162L51.7845 54.2816L47.5715 58.495ZM55.5368 50.5295L29.4712 24.464L48.6336 5.3016L51.3424 8.01018L48.3171 14.7213C48.2668 14.8329 48.2517 14.9571 48.2737 15.0775C48.2957 15.1979 48.3538 15.3087 48.4403 15.3953L48.4458 15.4006C48.5343 15.487 48.6473 15.544 48.7694 15.5639C48.8915 15.5839 49.0168 15.5658 49.1283 15.5121L55.6865 12.3545L64.3157 20.9837L52.7775 38.1795C52.6997 38.2954 52.6645 38.4349 52.6781 38.5739C52.6916 38.7129 52.7531 38.8429 52.8519 38.9417L52.8532 38.9429C52.9524 39.0416 53.0829 39.1027 53.2223 39.1156C53.3617 39.1286 53.5012 39.0926 53.6169 39.0139L70.7211 27.3889L74.6993 31.3669L55.5368 50.5295Z" fill="white"/>
          <path d="M13.0497 70.072C14.7739 70.072 16.1716 68.6743 16.1716 66.9501C16.1716 65.2259 14.7739 63.8281 13.0497 63.8281C11.3255 63.8281 9.92773 65.2259 9.92773 66.9501C9.92773 68.6743 11.3255 70.072 13.0497 70.072Z" fill="white"/>
          </svg>`,
    background: 'url("./img/cp-service-item-background-image-2.png")',
    id: "2",
    ariaLabel: "получение консультации по профессиональной окраске на объекте",
  },
  { title: 'Профессиональная <br> окраска <br> экстерьера',
    svg: `<svg width="80" height="69" viewbox="0 0 80 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9289 16.9472H30.1497V22.0738H17.9289V16.9472ZM17.9289 28.6049H30.1497V33.7316H17.9289V28.6049ZM17.9289 40.2625H30.1497V45.3892H17.9289V40.2625ZM17.9289 51.9203H30.1497V57.0469H17.9289V51.9203Z" fill="white"/>
          <path d="M42.6427 63.8733V21.9837L69.4359 21.9524V50.2115H74.5641V19.3861C74.5641 17.9876 73.3947 16.8227 71.9969 16.8227L40.0756 16.8599C38.6607 16.8616 37.5145 18.0087 37.5145 19.4233V63.8733H10.5641V13.1488L37.5145 5.90496V11.7247H42.6427V2.56136C42.6427 0.902968 41.0169 -0.345181 39.4128 0.0858978L7.33419 8.708C6.78935 8.85461 6.30809 9.1766 5.96492 9.62411C5.62174 10.0716 5.43581 10.6197 5.4359 11.1835V63.8733H0V69H80V63.8733H42.6427Z" fill="white"/>
          <path d="M69.4359 54.8256H74.5641V59.6011H69.4359V54.8256ZM49.8503 28.6049H62.0711V33.7316H49.8503V28.6049ZM49.8503 40.2625H62.0711V45.3892H49.8503V40.2625ZM49.8503 51.9203H62.0711V57.0469H49.8503V51.9203Z" fill="white"/>
          </svg>`,
    background: 'url("./img/cp-service-item-background-image-3.png")',
    id: "3",
    ariaLabel: "получение консультации по профессиональной окраске экстерьера",
  },
  { title: 'Профессиональная <br> окраска ограждений <br> и витражей',
    svg: `<svg width="86" height="86" viewbox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9585 8.19946C12.9585 10.9495 10.7291 13.1787 7.97925 13.1787C5.22938 13.1787 3 10.9495 3 8.19946C3 5.44942 5.22938 3.2202 7.97925 3.2202C10.7291 3.2202 12.9585 5.44942 12.9585 8.19946Z" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M12.9585 83.22H3V23.137H12.9585V83.22Z" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M7.97852 13.1787V23.1372" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M82.9995 8.19946C82.9995 10.9495 80.7701 13.1787 78.0203 13.1787C75.2704 13.1787 73.041 10.9495 73.041 8.19946C73.041 5.44942 75.2704 3.2202 78.0203 3.2202C80.7701 3.2202 82.9995 5.44942 82.9995 8.19946Z" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M82.9995 83.22H73.041V23.137H82.9995V83.22Z" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M78.0215 13.1787V23.1372" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M73.042 78.2407H12.959" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M12.959 28.1165H28.0627C28.0627 28.1165 34.7505 23.1372 43.0005 23.1372C51.2504 23.1372 57.9382 28.1165 57.9382 28.1165H73.042" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M28.0625 85.7097V20.6475" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M57.9375 20.6475V85.7097" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M43 15.6683V48.1995" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M43 58.1579V85.7097" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          <path d="M47.98 58.158H38.0215V48.1995H47.98V58.158Z" stroke="white" stroke-width="5" stroke-miterlimit="10"/>
          </svg>`,
    background: 'url("./img/cp-service-item-background-image-4.png")',
    id: "4",
    ariaLabel: "получение консультации по профессиональной окраске ограждений и витражей",
  },
];

// массив с данными для контента секции portfolio
const portfolioContentArr = [
  { title: 'Kazakov Grand Loft',
    paragraph1: `<p>Kazakov Grand Loft — новый проект в исторической части Москвы, дом для тех, кто не идет на компромиссы. Все, на что город будет равняться в обозримой перспективе, находится здесь. И в центре этого мира вы. Индивидуальность даже в мелочах и комфорт, возведенный в абсолют — чем не рецепт совершенства?</p>`,
    paragraph2: `<p>Проект прогрессивной авторской архитектуры, умного наполнения и персональных панорамных видов на город. Здесь созданы условия премиального сервиса, чтобы вы не отвлекались на бытовые мелочи, а просто наслаждались жизнью.</p>`,
    paragraph3: '',
    src: './img/cp-portfolio-image-Kazakov-Grand.png',
    id: "1",
  },
  { title: 'Новое здание Третьяковской галереи',
    paragraph1: `<p>Третьяковская галерея на Кадашёвской набережной — строящийся новый корпус Третьяковской галереи, расположенный на Кадашёвской набережной, 10 — рядом с историческими зданиями музея в Лаврушинском переулке.</p>`,
    paragraph2: `<p>Новый музейный корпус спроектирован «Моспроектом-4» и дополнен конкурсным проектом фасадов от архитектурного бюро SPEECH.</p>`,
    paragraph3: `<p>Строительство началось летом 2014 года, завершение работ запланировано на 2024 год.</p>`,
    src: './img/cp-portfolio-image-Tretyakovka.png',
    id: "2",
  },
  { title: 'ТРЦ Павелецкая Плаза',
  paragraph1: `<p>ТРЦ «Павелецкая Плаза» расположится в историческом центре Москвы, на первой линии Садового кольца, на площади перед Павелецким вокзалом. Торговый центр будет соединен подземным переходом через Садовое кольцо с радиальной станцией метро «Павелецкая», а также одноименным ТПУ, который свяжет транспортные артерии города с аэропортом «Домодедово».</p>`,
  paragraph2: `<p>Ежедневный пассажиропоток через станции метро и наземный транспорт составляет около 300 тыс. человек. В зоне охвата торгового центра живут и работают более 3 млн человек.</p>`,
  paragraph3: '',
  src: './img/cp-portfolio-image-Plaza.png',
    id: "3",
  },
];

// получение элементов HTML
const body = document.getElementById('body'),
      hero = document.getElementById('hero'),
      heroTitle = document.getElementById('heroTitle'),
      heroSectionImageWrapper = document.getElementById('heroSectionImageWrapper'),
      serviceItemCart = document.getElementById('serviceItemCart'),
      serviceItemIcon = document.getElementById('serviceItemIcon'),
      serviceItemTitle = document.getElementById('serviceItemTitle'),
      folderPortfolioTitle = document.getElementById('folderPortfolioTitle'),
      folderPortfolioParagraph1 = document.getElementById('folderPortfolioParagraph1'),
      folderPortfolioParagraph2 = document.getElementById('folderPortfolioParagraph2'),
      folderPortfolioParagraph3 = document.getElementById('folderPortfolioParagraph3'),
      navigationBtnPrev = document.getElementById('navigationBtnPrev'),
      navigationSlideNumber = document.getElementById('navigationSlideNumber'),
      navigatoinLengthNumber = document.getElementById('navigatoinLengthNumber'),
      navigationBtnNext = document.getElementById('navigationBtnNext'),
      infoFolgerBtn = document.getElementById('infoFolgerBtn'),
      folderInfoText = document.getElementById('folderInfoText'),
      portfolioFolgerBtn = document.getElementById('portfolioFolgerBtn'),
      folderPortfolioText = document.getElementById('folderPortfolioText'),
      burger = document.getElementById('burger'),
      headerNav = document.getElementById('headerNav'),
      btnConsultationHero = document.getElementById('btnConsultationHero'),
      formSendBtn = document.getElementById('formSendBtn'),
      addForm = document.getElementById('addForm'),
      inputName = document.getElementById('inputName'),
      errorName = document.getElementById('errorName'),
      inputContact = document.getElementById('inputContact'),
      errorContact = document.getElementById('errorContact'),
      inputMessage = document.getElementById('inputMessage'),
      errorMessage = document.getElementById('errorMessage'),
      applicationFormCheckbox = document.getElementById('applicationFormCheckbox'),
      btnUp = document.getElementById('btnUp'),
      serviceItemBtn = document.querySelector('.service-item__button'),
      errorCheckbox = document.getElementById('errorCheckbox');
      formSendBtn.disabled = false;




function getContentHero(Array) {

  const heroPagination = document.getElementById('heroPagination');

  // создаем кнопки
  for (let i=0; i <= Array.length-1; ++i) {
    const heroPaginationBtn = document.createElement('button');
          heroPaginationBtn.classList.add('btn-reset', 'pagination-block__button');
          heroPaginationBtn.id = `heroPaginationBtn${i}`;
          heroPagination.append(heroPaginationBtn);
          // событие нажатия кнопки
          heroPaginationBtn.addEventListener('click', function(){
            for (let m=0; m <= Array.length; ++m) {
              let Obj = Array[i];
              hero.style.backgroundImage = Obj.background;
              heroTitle.innerHTML = Obj.title;
              // document.getElementById('heroSectionImage').style.backgroundImage = Obj.src;
              heroSectionImageWrapper.style.backgroundImage = Obj.img;
              // событие нажатия для конкретной кнопки
              heroPagination.addEventListener('click', event => {
                heroPaginationBtn.style.backgroundColor = "var(--color-white)";
                if (event.target.id === heroPaginationBtn.id) {
                  document.getElementById(heroPaginationBtn.id).style.backgroundColor = "var(--color-Science-Blue)";
                }
              })
            }
          })
  }
    const heroFirstSlideNumber = document.getElementById('heroFirstSlideNumber');
          heroFirstSlideNumber.textContent = "01";
    const heroLaststSlideNumber = document.getElementById('heroLaststSlideNumber');
          heroLaststSlideNumber.textContent = `0${Array.length}`;
          heroPagination.prepend(heroFirstSlideNumber);
          heroPagination.append(heroLaststSlideNumber);

}
  getContentHero(heroContentArr)

// for resize
// фнкция получения и управления контентом секции Виды услуг
function getContentService(Array) {

  const servicePagination = document.getElementById('servicePagination');

  // создаем кнопки
  for (let i=0; i <= Array.length-1; ++i) {
    const servicePaginationBtn = document.createElement('button');
          servicePaginationBtn.classList.add('btn-reset', 'pagination-block__button');
          servicePaginationBtn.id = `servicePaginationBtn${i}`;
          servicePagination.append(servicePaginationBtn);
          // событие нажатия кнопки
          servicePaginationBtn.addEventListener('click', function(){
            for (let m=0; m <= Array.length; ++m) {
              let Obj = Array[i];
              serviceItemCart.style.backgroundImage = Obj.background;
              serviceItemIcon.innerHTML = Obj.svg;
              serviceItemTitle.innerHTML = Obj.title;
              serviceItemBtn.id = Obj.id;
              serviceItemBtn.ariaLabel = Obj.ariaLabel;
              console.log(serviceItemBtn.ariaLabel)
              // событие нажатия для конкретной кнопки пагинации
              servicePagination.addEventListener('click', event => {
                servicePaginationBtn.style.backgroundColor = "var(--color-white)";
                if (event.target.id === servicePaginationBtn.id) {
                  document.getElementById(servicePaginationBtn.id).style.backgroundColor = "var(--color-Science-Blue)";
                }
              })
              serviceItemCart.addEventListener('click', function() {
                  console.log(`Раздел находится в разработке`)
              })
            }
          })
  }
    const serviceFirstSlideNumber = document.getElementById('serviceFirstSlideNumber');
          serviceFirstSlideNumber.textContent = "01";
    const serviceLaststSlideNumber = document.getElementById('serviceLaststSlideNumber');
          serviceLaststSlideNumber.textContent = `0${Array.length}`;
          servicePagination.prepend(serviceFirstSlideNumber);
          servicePagination.append(serviceLaststSlideNumber);
}
  getContentService(serviceContentArr)

// for resize
// фнкция получения и управления контентом
function getNavigatePortfolio(Array) {
  let z = 0

  navigationBtnNext.addEventListener('click', function() {
    if (z < Array.length-1) {z++} else {z = 0}
    console.log(z)
    for (let i=0; i <= Array.length; i++) {
      let Obj = Array[z];
      document.getElementById('folderParagraphImg').src = Obj.src;
      folderPortfolioTitle.innerHTML = Obj.title;
      folderPortfolioParagraph1.innerHTML = Obj.paragraph1;
      folderPortfolioParagraph2.innerHTML = Obj.paragraph2;
      folderPortfolioParagraph3.innerHTML = Obj.paragraph3;
      navigationSlideNumber.textContent = z+1;
    }
  })

  navigationBtnPrev.addEventListener('click', function() {
    if (z > 0 ) {z--} else {z = Array.length-1}
    console.log(z)
    for (let i=0; i <= Array.length; i++) {
      let Obj = Array[z];
      document.getElementById('folderParagraphImg').src = Obj.src;
      folderPortfolioTitle.innerHTML = Obj.title;
      folderPortfolioParagraph1.innerHTML = Obj.paragraph1;
      folderPortfolioParagraph2.innerHTML = Obj.paragraph2;
      folderPortfolioParagraph3.innerHTML = Obj.paragraph3;
      navigationSlideNumber.textContent = z+1;
    }
  })
}
  getNavigatePortfolio(portfolioContentArr)

// фнкция получения и управления контентом секции Портфолио
function getContentPortfolio(Array) {

  const portfolioPagination = document.getElementById('portfolioPagination');

  // создаем кнопки
  for (let i=0; i <= Array.length-1; ++i) {
    const portfolioPaginationBtn = document.createElement('button');
          portfolioPaginationBtn.classList.add('btn-reset', 'pagination-block__button');
          portfolioPaginationBtn.id = `portfolioPaginationBtn${i}`;
          portfolioPagination.append(portfolioPaginationBtn);
          // событие нажатия кнопки
          portfolioPaginationBtn.addEventListener('click', function(){
            for (let m=0; m <= Array.length; ++m) {
              let Obj = Array[i];
              // portfolioItemCart.style.backgroundImage = Obj.background;
              document.getElementById('folderParagraphImg').src = Obj.src;
              folderPortfolioTitle.innerHTML = Obj.title;
              folderPortfolioParagraph1.innerHTML = Obj.paragraph1;
              folderPortfolioParagraph2.innerHTML = Obj.paragraph2;
              folderPortfolioParagraph3.innerHTML = Obj.paragraph3;
              // событие нажатия для конкретной кнопки
              portfolioPagination.addEventListener('click', event => {
                portfolioPaginationBtn.style.backgroundColor = "var(--color-white)";
                if (event.target.id === portfolioPaginationBtn.id) {
                  document.getElementById(portfolioPaginationBtn.id).style.backgroundColor = "var(--color-Science-Blue)";
                }
              })
            }
          })
  }
    const portfolioFirstSlideNumber = document.getElementById('portfolioFirstSlideNumber');
          portfolioFirstSlideNumber.textContent = "01";
    const portfolioLaststSlideNumber = document.getElementById('portfolioLaststSlideNumber');
          portfolioLaststSlideNumber.textContent = `0${Array.length}`;
          portfolioPagination.prepend(portfolioFirstSlideNumber);
          portfolioPagination.append(portfolioLaststSlideNumber);

}
  getContentPortfolio(portfolioContentArr)

// функция проверки состояния input
function onInputValue(input, error) {
  input.addEventListener('input', function() {
    input.classList.remove('is-invalid');
    error.textContent = ``;
  });
}
  onInputValue(inputName, errorName);
  onInputValue(inputContact, errorContact);
  onInputValue(inputMessage, errorMessage);

// функция создания модального окна с добавлением сообщений клиентов в архив
function createApplicationModal() {
  body.style.overflow = 'hidden';
  // создание элементов формы
  const modal = document.createElement('div'),
        modalConteiner = document.createElement('div'),
        modalHead = document.createElement('div'),
        modalHeadLogo = document.createElement('div'),
        modalCloseBtn = document.createElement('button'),
        modalFolder = document.createElement('div'),
        modalFolderContent = document.createElement('div'),
        modalFolderDescription = document.createElement('div'),
        modalFolderText = document.createElement('p'),
        modalFolderForm = document.createElement('form'),
        modalFolderHeader = document.createElement('div'),
        modalFolderHeader1 = document.createElement('div'),
        modalFolderTitle = document.createElement('h2'),
        modalFormContent = document.createElement('div'),
        modalFormInputNameWrapper = document.createElement('div'),
        modalInputName = document.createElement('input'),
        modalErrorName = document.createElement('div'),
        modalFormInputContactWrapper = document.createElement('div'),
        modalInputContact = document.createElement('input'),
        modalErrorContact = document.createElement('div'),
        modalFormTextareaWrapper = document.createElement('div'),
        modalTextarea = document.createElement('textarea'),
        modalErrorTextarea = document.createElement('div'),
        modalCheckboxWrapper = document.createElement('div'),
        modalLabel = document.createElement('label'),
        modalInputCheckbox = document.createElement('input'),
        modalSpan = document.createElement('span'),
        modalBtnWrapper = document.createElement('div'),
        modalBtn = document.createElement('button');
        // modalShowErrorMessage = document.createElement('div');

  //  присвоение элементам классов
  modal.classList.add('modal', 'modal-active');
  modalConteiner.classList.add('container','modal__container', 'modal-active');
  modalHead.classList.add('modal__head');
  modalHeadLogo.classList.add('modal__logo');
  modalCloseBtn.classList.add('btn-reset', 'modal__close-btn');
  modalFolder.classList.add('folder-modal');
  modalFolderContent.classList.add('folder-modal__content');
  modalFolderDescription.classList.add('folder-description', 'folder-modal-description'),
  modalFolderText.classList.add('folder-modal__text');
  modalFolderForm.classList.add('folder__form', 'folder-modal__form');
  modalFolderHeader.classList.add('folder-header','folder-modal__header');
  modalFolderHeader1.classList.add('folder-header-1','folder-modal__header-1');
  modalFolderTitle.classList.add('section-title','folder-modal__title');
  modalFormContent.classList.add('form__content');
  modalFormInputNameWrapper.classList.add('modal-form__input-wrapper');
  modalInputName.classList.add('form__input', 'modal-form__input_name');
  modalErrorName.classList.add('error__label', 'modal-error__label-name');
  modalFormInputContactWrapper.classList.add('modal-form__input-wrapper');
  modalInputContact.classList.add('form__input', 'modal-form__input_contact');
  modalErrorContact.classList.add('error__label', 'modal-error__label-contact');
  modalFormTextareaWrapper.classList.add('form__textarea-wrapper');
  modalTextarea.classList.add('form__textarea', 'modal-form__textarea');
  modalErrorTextarea.classList.add('error__label', 'modal-error__label-message');
  modalCheckboxWrapper.classList.add('form__checkbox-wrapper');
  modalLabel.classList.add('form__checkbox_label');
  modalInputCheckbox.classList.add('form__checkbox', 'modal-form__checkbox');
  modalSpan.classList.add('form__checkbox-text', 'modal-form__checkbox-text');
  modalBtnWrapper.classList.add('form__btn-wrapper', 'modal__form__btn-wrapper');
  modalBtn.classList.add('btn-reset', 'button-consultation', 'button-consultation__modal');
  // modalShowErrorMessage.classList.add('modal__form-error');

  modalInputName.id = 'modalInputName';
  modalInputContact.id = 'modalInputContact';
  modalTextarea.id = 'modalTextarea'
  // modalShowErrorMessage.id = 'writeName';

  // добавление атрибута for элементам label
  modalInputName.for = 'InputName'
  modalInputContact.for = 'InputContact'
  modalLabel.for = 'application-form__checkbox'

  //  заполнение контентной части
  modalHeadLogo.innerHTML = svgModalLogo;
  modalCloseBtn.innerHTML = svgModalCloseBtn;
  modalFolderTitle.innerHTML = "оставьте <br> заявку";
  modalFolderText.textContent = 'И наш менеджер свяжется вами в ближайшее время для уточнения деталей';
  modalInputName.placeholder = 'Ваше имя';
  modalInputName.name = 'name'
  modalInputName.type = 'text'
  modalInputContact.placeholder = 'Номер телефона*';
  modalInputContact.name = 'number'
  modalInputContact.type = 'text'
  modalTextarea.placeholder = 'Ваше сообщение'
  modalInputCheckbox.id = 'application-form__checkbox';
  modalInputCheckbox.type = 'checkbox'
  modalBtn.textContent = 'Отправить';
  modalBtn.type = 'submit';
  modalSpan.textContent = 'Нажимая кнопку ОТПРАВИТЬ вы соглашаетесь на обработку ваших данных'

  // добавление элементов
  modalFormInputNameWrapper.append(modalInputName, modalErrorName);
  modalFormInputContactWrapper.append(modalInputContact, modalErrorContact);
  modalFormTextareaWrapper.append(modalTextarea, modalErrorTextarea);
  modalLabel.append(modalInputCheckbox, modalSpan);
  modalCheckboxWrapper.append(modalLabel);
  modalBtnWrapper.append(modalBtn);
  modalFolderForm.append(modalFormInputNameWrapper, modalFormInputContactWrapper, modalFormTextareaWrapper, modalCheckboxWrapper, modalBtnWrapper);
  modalFolderHeader.append(modalFolderHeader1, modalFolderTitle);
  modalFolderDescription.append(modalFolderHeader, modalFolderText)
  modalFolderContent.append(modalFolderDescription, modalFolderForm);
  modalFolder.append(modalFolderContent);
  modalHead.append(modalHeadLogo, modalCloseBtn);
  modalConteiner.append(modalHead, modalFolder);
  modal.append(modalConteiner)
  document.body.append(modal);

  // добавление состояния элементов
  modalBtn.disabled = true;

  modalInputContact.addEventListener('input', function() {
    if (modalInputContact.type == 'text') {
      let phoneNumber = modalInputContact.value.replace(/\D/g, '');
      let phoneNumberPattern = /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/;
      let formattedPhoneNumber = phoneNumber.replace(phoneNumberPattern, '$1 ($2) $3-$4-$5');
      modalInputContact.value = formattedPhoneNumber;
        } else {
          modalInputContact.value = modalInputContact.value;
        }
  });

    onInputValue(modalInputName, modalErrorName);
    onInputValue(modalInputContact, modalErrorContact);
    onInputValue(modalTextarea, modalErrorTextarea);

  // создание контакта и сообщения
  modalFolderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let validationResult = false
// Валидация
// Проверка имени
modalErrorName.textContent = ""
  if (modalInputName.value.trim().length <= 2) {
      modalErrorName.textContent = 'Введите правильное имя!'
      modalInputName.classList.add('is-invalid')
      validationResult = true
  }

  if (!/^[а-яА-ЯёЁ." "]+$/.test(modalInputName.value)) {
      modalErrorName.textContent = 'Цифры и специальные символы недопутсимы'
      modalInputName.classList.add('is-invalid')
      validationResult = true
  }

  if (modalInputName.value.trim() === "") {
      modalErrorName.textContent = 'Введите имя!'
      modalInputName.classList.add('is-invalid')
      validationResult = true
  }

  // Проверка контакта
  modalErrorContact.textContent = ""
  if (modalInputContact.value.trim().length <= 16) {
      modalErrorContact.textContent = 'Введите правильный контактный телефон!'
      modalInputContact.classList.add('is-invalid')
      validationResult = true
  }
  if (modalInputContact.value.trim() === "") {
      modalErrorContact.textContent = 'Введите контактный телефон!'
      modalInputContact.classList.add('is-invalid')
      validationResult = true
  }

  // Проверка сообщения
  modalErrorTextarea.textContent = ""
  if (modalTextarea.value.trim().length <= 4) {
      modalErrorTextarea.textContent = 'Введите правильное сообщение!'
      modalTextarea.classList.add('is-invalid')
      validationResult = true
  }
  if (modalTextarea.value.trim() === "") {
      modalErrorTextarea.textContent = 'Введите сообщение!'
      modalTextarea.classList.add('is-invalid')
      validationResult = true
  }

  // прверка чекбокса
  if (!modalInputCheckbox.checked) {
    validationResult = true
  }

  let clientObj = {
      name: modalInputName.value,
      сontact: modalInputContact.value,
      message: modalTextarea.value,
  }

  if (validationResult === true) {
      modalBtn.disabled = true
  }

  if (validationResult === false){
      clientsArr.push(clientObj);
      console.log(clientsArr)
      alert(`${modalInputName.value}, Ваша заявка успешно отправлена`)
      modalInputName.value = ""
      modalInputName.classList.remove('is-invalid')
      modalInputContact.value = ""
      modalInputContact.classList.remove('is-invalid')
      modalTextarea.value = ""
      modalTextarea.classList.remove('is-invalid')
      modalInputCheckbox.checked = false
      modalBtn.disabled = false
  }

  modalBtn.disabled = false
})

    // событие нажатия на чекбокс
  modalInputCheckbox.addEventListener('click', function() {
    if (modalBtn.disabled == false) {
      modalBtn.disabled = true;
      console.log("кнопка отправки формы не активна")
    } else {
      modalBtn.disabled = false
      console.log("кнопка отправки формы активна")
    }
  });

  // событие нажатия кнопки Х
  modalCloseBtn.addEventListener('click', function() {
    modal.remove()
    body.style.overflow = 'visible';
  })

   // клик вне модального окна
   document.body.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.remove();
      body.style.overflow = 'visible';
    }
  })
};

// преобразование номера телефона в удобный формат
inputContact.addEventListener('input', function() {
  if (inputContact.type == 'text') {
    let phoneNumber = inputContact.value.replace(/\D/g, '');
    let phoneNumberPattern = /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/;
    let formattedPhoneNumber = phoneNumber.replace(phoneNumberPattern, '$1 ($2) $3-$4-$5');
    inputContact.value = formattedPhoneNumber;
      } else {
        inputContact.value = inputContact.value;
      }
});

// присваивание событий
// событие добавления сообщения клиента в архив
addForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let validationResult = false
// Валидация
// Проверка имени
errorName.textContent = ""
  if (inputName.value.trim().length <= 2) {
      errorName.textContent = 'Введите правильное имя!'
      inputName.classList.add('is-invalid')
      validationResult = true
  }

  if (!/^[а-яА-ЯёЁ." "]+$/.test(inputName.value)) {
    console.log(inputName.value)
      errorName.textContent = 'Цифры и специальные символы недопутсимы'
      inputName.classList.add('is-invalid')
      validationResult = true
  }

  if (inputName.value.trim() === "") {
      errorName.textContent = 'Введите имя!'
      inputName.classList.add('is-invalid')
      validationResult = true
  }

  // Проверка контакта
  errorContact.textContent = ""
  if (inputContact.value.trim().length <= 16) {
      errorContact.textContent = 'Введите правильный контактный телефон!'
      inputContact.classList.add('is-invalid')
      validationResult = true
  }
  if (inputContact.value.trim() === "") {
      errorContact.textContent = 'Введите контактный телефон!'
      inputContact.classList.add('is-invalid')
      validationResult = true
  }

  // Проверка сообщения
  errorMessage.textContent = ""
  if (inputMessage.value.trim().length <= 4) {
      errorMessage.textContent = 'Введите правильное сообщение!'
      inputMessage.classList.add('is-invalid')
      validationResult = true
  }
  if (inputMessage.value.trim().length > 499) {
    errorMessage.textContent = 'Допустимое число символов 499!'
    inputMessage.classList.add('is-invalid')
    validationResult = true
}
  if (inputMessage.value.trim() === "") {
      errorMessage.textContent = 'Введите сообщение!'
      inputMessage.classList.add('is-invalid')
      validationResult = true
  }

  // прверка чекбокса
  if (!applicationFormCheckbox.checked) {
    validationResult = true
  }

  let clientObj = {
      name: inputName.value,
      сontact: inputContact.value,
      message: inputMessage,
  }

  if (validationResult === true) {
      formSendBtn.disabled = true
  }

  if (validationResult === false){
      clientsArr.push(clientObj);
      console.log(clientsArr)
      alert(`${inputName.value}, Ваша заявка успешно отправлена`)
      inputName.value = ""
      inputName.classList.remove('is-invalid')
      inputContact.value = ""
      inputContact.classList.remove('is-invalid')
      inputMessage.value = ""
      inputMessage.classList.remove('is-invalid')
      applicationFormCheckbox.checked = false
      formSendBtn.disabled = false
  }
  formSendBtn.disabled = false
})

// событие нажатия на кнопку бургера
burger.addEventListener('click', function() {
  headerNav.classList.toggle('header__nav_hidden')
  body.classList.toggle('overflov-hidden');
})

// событие нажатия на кнопку получить консультацию
btnConsultationHero.addEventListener('click', function() {
  createApplicationModal();
})
// событие нажатия на кнопку раскрытия информации
infoFolgerBtn.addEventListener('click', function(){
  console.log('click')
  folderInfoText.classList.toggle('folder-description-hidden');
  infoFolgerBtn.classList.toggle('button-rotate')
})
// событие нажатия на кнопку раскрытия информации
portfolioFolgerBtn.addEventListener('click', function(){
  folderPortfolioText.classList.toggle('folder-description-hidden');
  portfolioFolgerBtn.classList.toggle('button-rotate')
})

btnUp.addEventListener('click', function() {
  window.scrollTo(0, 0);
})

// получение всех кнопок сервича и присвоенрие им события нажатия
const servBtns = document.querySelectorAll('.service-item__button')
for(let btn of servBtns) {
  btn.addEventListener('click', function(){
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0);
    }
    createApplicationModal()
  })
}


