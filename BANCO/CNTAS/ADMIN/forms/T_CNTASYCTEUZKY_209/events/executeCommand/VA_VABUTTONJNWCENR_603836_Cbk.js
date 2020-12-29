
//Start signature to Callback event to VA_VABUTTONJNWCENR_603836
task.executeCommandCallback.VA_VABUTTONJNWCENR_603836 = function(entities, executeCommandCallbackEventArgs) {
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_NX65_PWF93');
    let nav = executeCommandCallbackEventArgs.commons.api.navigation;
    nav.closeModal({});
};
