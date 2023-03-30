/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const widgetBtn = document?.querySelector('.widget');
const widgetModal = document?.querySelector('.widget-modal');
const widgetCloseBtn = document?.querySelector('.widget-modal__close');
if (widgetBtn && widgetModal) {
  const widgetClose = () => {
    widgetModal.classList.remove('widget-modal--active');
  };
  const widgetOpen = () => {
    widgetModal.classList.add('widget-modal--active');
  };
  widgetModal.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('widget-modal')) {
      widgetClose();
    }
  });
  widgetBtn.addEventListener('click', widgetOpen);
  widgetCloseBtn.addEventListener('click', widgetClose);
}
/******/ })()
;
//# sourceMappingURL=main.js.map