


//Command1 (Button) 
task.executeCommand.CM_TCNTASUX__6_ = function(entities, executeCommandEventArgs) {
    entities.Transferencia.cuentaOrigen = entities.Cuenta.banco;
    entities.Transferencia.cuentaDestino = entities.CuentaDestino._data[0].banco;
    entities.Transferencia.tipoCuentaO = entities.Cuenta.tipoCuenta;
    entities.Transferencia.tipoCuentaD = entities.CuentaDestino._data[0].tipoCuenta;
    entities.Transferencia.valor = entities.FiltroCuentaDestino.valor;
    
    // console.log(entities.Transferencia);

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};