function setTrigger() {
  delTrigger();
	const time = new Date();
  time.setHours(5);
  time.setMinutes(59);
  ScriptApp.newTrigger('main').timeBased().at(time).create();
}

function delTrigger() {
	const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() == 'main') {
      ScriptApp.deleteTrigger(trigger);
    }
  }
}