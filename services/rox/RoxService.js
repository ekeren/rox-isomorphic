const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);
let _rox;
let _options = { platform : "SSR" } ;
if (canUseDOM) {
  _rox = require('rox-browser');
  _options['configurationFetchedHandler'] = () => console.log('should be disabled')
} else {
  _rox = require('rox-node');
  _rox.setContext({server: true});
  _options['configurationFetchedHandler'] = fetcherResults => console.log(fetcherResults)
}


export const Rox = _rox;

export const setup = async function (appKey, containers, options) {
  if (!_rox.containers) { // create containers for the first time
    _rox.containers = {};
  }
  for (let k of Object.keys(containers)) {
    if (!_rox.containers[k]) { // prevent resigrating twice
      _rox.register(k, containers[k]);
      _rox.containers[k] = containers[k];
    }
  }
  if (!_rox.hasStarted) {
    _rox.hasStarted = true;
    return _rox.setup(appKey,  Object.assign({}, _options, options));
  }
  return;
};
