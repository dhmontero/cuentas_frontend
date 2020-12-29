
//CuentaDestinoQuery Entity: CuentaDestino
task.executeQuery.Q_CUENITTE_VP60 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaD = executeQueryEventArgs.commons.api.vc.model.FiltroCuentaDestino.cuentaD;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaDestino = true;
};