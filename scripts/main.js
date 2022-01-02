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
  // TODO: get player position
  mySound.at(1, 1);
  //Debug toast to add something visually
  // cause the sound maybe not in close proximity to player
  Vars.ui.hudfrag.showToast("Core Attacked ?!?!??!?!?");
});
