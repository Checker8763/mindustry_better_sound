// from bottom of scripting wiki  page 3
// https://mindustrygame.github.io/wiki/modding/3-scripting/
soundCache = {};
function cachedLoadSound(path) {
  cached = soundCache[path]
  // return cached or newly loaded file
  return (cached ?  cached:(soundCache[path] = loadSound(path)))
}

Events.on(Trigger.teamCoreDamage, (_) => {
  const mySound = cachedLoadSound("base_under_attack");
  // engine will spawn this sound at this location (X,Y)
  mySound.at(1, 1);
});
