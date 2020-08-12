const trigger = document.getElementById('menu-trigger');
const open = document.getElementById('menu-open');
const close = document.getElementById('menu-close');
const content = document.getElementById('menu-content');
const navTriggers = document.getElementsByClassName('js-trigger');

const moveTo = new MoveTo();

trigger.addEventListener('click', function () {
  open.classList.toggle('hidden');
  close.classList.toggle('hidden');
  // content
  content.classList.toggle('hidden');
  content.classList.toggle('flex');
});

for (const trigger of navTriggers) {
  moveTo.registerTrigger(trigger);
}

iFrameResize({ heightCalculationMethod: 'lowestElement', maxHeight: innerHeight }, '#app');
