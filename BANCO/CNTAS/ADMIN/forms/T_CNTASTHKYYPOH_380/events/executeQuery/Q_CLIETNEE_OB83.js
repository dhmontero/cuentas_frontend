
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNEE_OB83 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.FiltroCedula.cedula;
    executeQueryEventArgs.commons.execServer = true;
    
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};