import Rox from './RoxInstance';
if (!Rox.containerCache) {
  Rox.containerCache = {
    flagOne: new Rox.Flag(false),
    flagTwo: new Rox.Flag(false),
    flagThree: new Rox.Flag(false)
  };
}
export default Rox.containerCache;