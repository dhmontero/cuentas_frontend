
//FiltroNroCuentaQuery Entity: FiltroNroCuenta
task.executeQuery.Q_FILTCRAT_SG91 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.nroCuenta = executeQueryEventArgs.commons.api.vc.model.Cuenta.banco;
    executeQueryEventArgs.commons.api.viewState.show('G_DEPOSITOOO_826772');
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.FiltroNroCuenta = true;
};