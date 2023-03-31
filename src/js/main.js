import './components/modal'
import showMore from './components/showmore'

showMore('[data-container="1"]', '[data-btn="1"]', {
  cardClass: 'review__card',
  cardTop: 'review__card-top',
  cardLeft: 'review__card-left',
  cardDate: 'review__card-date',
  cardName: 'review__card-name'
})

showMore('[data-container="2"]', '[data-btn="2"]', {
  cardClass: 'widget-modal__card',
  cardTop: 'review__card-top widget-modal__card-top',
  cardLeft: 'review__card-left widget-modal__card-left',
  cardDate: 'widget-modal__card-date',
  cardName: 'widget-modal__card-name'
})
