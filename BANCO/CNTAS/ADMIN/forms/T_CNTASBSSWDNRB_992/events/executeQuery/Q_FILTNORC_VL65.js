
//FiltroNroCuentaQuery Entity: FiltroNroCuenta
task.executeQuery.Q_FILTNORC_VL65 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.nroCuenta = executeQueryEventArgs.commons.api.vc.model.Cuenta.banco;
    executeQueryEventArgs.commons.api.viewState.show('G_DEPOSITOOO_279722');
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.FiltroNroCuenta = true;
};