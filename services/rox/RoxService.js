import Rox from './RoxInstance';
export default function (container) {
  if (!Rox.hasStarted ) {
    Rox.hasStarted = true;
    Rox.register('SSR', container);
    Rox.setup('5b43b92e1ee71c0f269279d6', {
      platform: 'Isomorphic'
    });
  }
};