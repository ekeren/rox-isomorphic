import Rox from './RoxInstance';
export default function (container) {
  if (!Rox.hasStarted ) {
    Rox.hasStarted = true;
    Rox.register('SSR', container);
    Rox.setup('5b44c8be1ee71c0f26927abd', {
      platform: 'Isomorphic',
      configurationFetchedHandler: fetcherResults => console.log(fetcherResults),
      configuration: typeof window !== 'undefined' ? window.rollout_conf : undefined
      
    });
  }
};