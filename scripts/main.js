const sound_name = "base_under_attack";
const base_attack_sound = loadSound(sound_name);

//Debug Dialog
Events.on(ClientLoadEvent, () => {
  const myDialog = new BaseDialog("Better Sounds loaded");
  myDialog.addCloseButton();
  //TODO: Check how cont can be added to another row
  myDialog.cont.add("Testing Info:");
  myDialog.cont.row();
  myDialog.cont.add("Custom Sound:" + base_attack_sound.toString());
  myDialog.cont.row();
  myDialog.cont.add("Builtin Sound: " + Sounds.respawning.toString());
  //100% Volume, standart speed, no pan, no loop
  base_attack_sound.play(1, 1, 0, false);
  myDialog.show();
});

var played = false;
Events.run(Trigger.teamCoreDamage, () => {
  if (!played) {
    base_attack_sound.play(1, 1, 0, false);
    played = true;
    Time.run(5*Time.toSeconds, () => (played = false));
  }
});
