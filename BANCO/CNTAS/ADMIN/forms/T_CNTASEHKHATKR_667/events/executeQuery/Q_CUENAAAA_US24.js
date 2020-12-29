
//TransferenciaQuery Entity: Cuenta
task.executeQuery.Q_CUENAAAA_US24 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuenta = executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.cuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cuenta = true;
};