

//Entity: Transaccion
//Transaccion. (Button) View: formModalRetiro
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONQQHRRVB_496307 = function(  entities, executeCommandEventArgs ) {
    entities.Transaccion.nroCuentaOrigen = entities.FiltroNroCuenta.nroCuenta;
    if(entities.FiltroNroCuenta.tipoCuenta === 'CUENTA AHORROS'){
        entities.Transaccion.tipoCuentaOrigen = 'A';
    }else{
        entities.Transaccion.tipoCuentaOrigen = 'C';
    }

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Transaccion = true;

};