const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);
let Rox;
if (canUseDOM) {
  Rox = require('rox-browser');
} else {
  Rox = require('rox-node');
}
export default Rox;
