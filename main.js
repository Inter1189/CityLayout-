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
    icon: 'url("./img/cp-service-item-svg-image-1.svg")',
    background: 'url("./img/cp-service-item-background-image-1.png")',
    id: "1",
    ariaLabel: "получение консультации по реставрации лакокрасочного покрытия",
  },
  { title: 'Профессиональная <br> окраска <br> на объекте',
    icon: 'url("./img/cp-service-item-svg-image-2.svg")',
    background: 'url("./img/cp-service-item-background-image-2.png")',
    id: "2",
    ariaLabel: "получение консультации по профессиональной окраске на объекте",
  },
  { title: 'Профессиональная <br> окраска <br> экстерьера',
    icon: 'url("./img/cp-service-item-svg-image-3.svg")',
    background: 'url("./img/cp-service-item-background-image-3.png")',
    id: "3",
    ariaLabel: "получение консультации по профессиональной окраске экстерьера",
  },
  { title: 'Профессиональная <br> окраска ограждений <br> и витражей',
    icon: 'url("./img/cp-service-item-svg-image-4.svg")',
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
      heroImageContent = document.getElementById('heroImageContent'),
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
              heroImageContent.style.backgroundImage = Obj.img;
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
              serviceItemIcon.style.backgroundImage = Obj.icon;
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
  modalErrorName.classList.add('error-label', 'modal-error__label-name');
  modalFormInputContactWrapper.classList.add('modal-form__input-wrapper');
  modalInputContact.classList.add('form__input', 'modal-form__input_contact');
  modalErrorContact.classList.add('error-label', 'modal-error__label-contact');
  modalFormTextareaWrapper.classList.add('form__textarea-wrapper');
  modalTextarea.classList.add('form__textarea', 'modal-form__textarea');
  modalErrorTextarea.classList.add('error-label', 'modal-error__label-message');
  modalCheckboxWrapper.classList.add('form__checkbox-wrapper');
  modalLabel.classList.add('form__checkbox-label');
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

// получение всех кнопок сервиса и присвоенрие им события нажатия
const servBtns = document.querySelectorAll('.service-item__button')
for(let btn of servBtns) {
  btn.addEventListener('click', function(){
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0);
    }
    createApplicationModal()
  })
}


