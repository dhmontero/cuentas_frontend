

//Entity: Transaccion
//Transaccion. (Button) View: formModalDeposito
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONRXILAJY_559814 = function(  entities, executeCommandEventArgs ) {
    entities.Transaccion.nroCuentaOrigen = entities.FiltroNroCuenta.nroCuenta;
    if(entities.FiltroNroCuenta.tipoCuenta === 'CUENTA AHORROS'){
        entities.Transaccion.tipoCuenta = 'A';
    }else{
        entities.Transaccion.tipoCuenta = 'C';
    }
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Transaccion = true;

};