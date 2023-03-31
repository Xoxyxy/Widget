import {cards} from './cards'

const showMore = (containerEl, btnEl, classes) => {
  const container = document?.querySelector(containerEl)
  const btn = document?.querySelector(btnEl)

  let counter = 0

  const render = ({avatar, date, name, service, comment}, {cardClass, cardTop, cardLeft, cardDate, cardName}) => {
    const card = document.createElement('div')
    card.classList.add('review__card', cardClass)

    card.innerHTML = `
      <div class="${cardTop}">
            <div class="${cardLeft}">
              <img loading="lazy"
                   src="${avatar}"
                   class="review__card-avatar" width="60" height="60" alt="Аватарка">
              <div class="review__card-info">
                <div class="${cardDate}">${date}</div>
                <div class="${cardName}">${name}</div>
              </div>
            </div>
            <div class="review__rating-stars">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                <path
                  d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
                  fill="#ffcc00"></path>
              </svg>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                <path
                  d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
                  fill="#ffcc00"></path>
              </svg>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                <path
                  d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
                  fill="#ffcc00"></path>
              </svg>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                <path
                  d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
                  fill="#ffcc00"></path>
              </svg>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                <path
                  d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
                  fill="#ffcc00"></path>
              </svg>
            </div>
          </div>
          <div class="review__card-body">
            <div class="review__card-title">
              Сделка состоялась <span>${service}</span>
            </div>
            <div class="review__card-comment">
              ${comment}
            </div>
            <a href="https://www.avito.ru/user/e992656133c4c90e6080f448de406631/profile?id=2201271038" class="review__card-link" target="_blank">
              Отзыв Avito
            </a>
          </div>
    `

    container.appendChild(card)
  }

  btn.addEventListener('click', event => {
    cards[counter].forEach(card => {
      render(card, classes)
    })
    counter++
    if (counter === cards.length) {
      event.target.remove()
    }
  })
}

export default showMore
