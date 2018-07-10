import Rox from './RoxInstance';
if (!Rox.containerCache) {
  Rox.containerCache = {
    superSecret: new Rox.Flag(false),
  };
}
export default Rox.containerCache;