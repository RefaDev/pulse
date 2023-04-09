/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
  tabsHandler,
  catalogItemHandler,
  buyItemsHandler,
} from './modules'

/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//Validation
import JustValidate from 'just-validate'
import Inputmask from '../../node_modules/inputmask/lib/inputmask'

const selector = document.querySelectorAll('#phone')
const im = new Inputmask('+7(999)999-99-99')
im.mask(selector)

const validator = new JustValidate('#form')
const validator2 = new JustValidate('#form2')
const validator3 = new JustValidate('#form3')

validator
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 буквы',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимум 15 букв',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Введите почту',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат почты',
    },
  ])
  .addField('#phone', [
    {
      validator: (value) => {
        const phone = selector[0].value.replace(/[+()_-]/g, '')

        return Boolean(phone && phone.length > 0)
      },
      errorMessage: 'Введите телефон',
    },
    {
      validator: (value) => {
        const phone = selector[0].value.replace(/[+()_-]/g, '')

        return Boolean(phone && phone.length === 11)
      },
      errorMessage: 'Введите телефон полностью',
    },
  ])
validator2
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 буквы',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимум 15 букв',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Введите почту',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат почты',
    },
  ])
  .addField('#phone', [
    {
      validator: (value) => {
        const phone = selector[1].value.replace(/[+()_-]/g, '')

        return Boolean(phone && phone.length > 0)
      },
      errorMessage: 'Введите телефон',
    },
    {
      validator: (value) => {
        const phone = selector[1].value.replace(/[+()_-]/g, '')

        return Boolean(phone && phone.length === 11)
      },
      errorMessage: 'Введите телефон полностью',
    },
  ])
validator3
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 буквы',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Максимум 15 букв',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Введите почту',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат почты',
    },
  ])
  .addField('#phone', [
    {
      validator: (value) => {
        const phone = selector[2].value.replace(/[+()_-]/g, '')

        return Boolean(phone && phone.length > 0)
      },
      errorMessage: 'Введите телефон',
    },
    {
      validator: (value) => {
        const phone = selector[2].value.replace(/[+()_-]/g, '')

        return Boolean(phone && phone.length === 11)
      },
      errorMessage: 'Введите телефон полностью',
    },
  ])
//Validation

//отправка формы
const sendForm = document.querySelector('#form')
sendForm.addEventListener('submit', submitForm)
async function submitForm(event) {
  event.preventDefault() // отключаем перезагрузку/перенаправление страницы
  try {
    // Формируем запрос
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target),
    })
		console.log(response);
    // проверяем, что ответ есть
    if (!response.ok) throw `Ошибка при обращении к серверу: ${response.status}`
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      throw 'Ошибка обработки. Ответ не JSON'
    }
    // обрабатываем запрос
    const json = await response.json()
    if (json.result === 'success') {
      // в случае успеха
      alert(json.info)
    } else {
      // в случае ошибки
      console.log(json)
      throw json.info
    }
  } catch (error) {
    // обработка ошибки
    alert(error)
  }
}
//отправка формы

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
addTouchClass()
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-popup="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
togglePopupWindows()
// =======================================================================================================
//переключение табов
tabsHandler()
//переключение карточки по клику на подробнее
catalogItemHandler()
// modal
buyItemsHandler()
