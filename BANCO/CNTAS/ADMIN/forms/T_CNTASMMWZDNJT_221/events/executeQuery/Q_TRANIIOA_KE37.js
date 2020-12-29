
//TransaccionQuery Entity: Transaccion
task.executeQuery.Q_TRANIIOA_KE37 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.vc.model.Cuenta.banco;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Transaccion = true;
};