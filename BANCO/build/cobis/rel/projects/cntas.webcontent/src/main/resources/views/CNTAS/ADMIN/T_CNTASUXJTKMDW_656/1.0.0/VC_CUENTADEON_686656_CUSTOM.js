/* variables locales de T_CNTASUXJTKMDW_656*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.formcuentadestino;
    

    //"TaskId": "T_CNTASUXJTKMDW_656"


    	
//CuentaDestinoQuery Entity: CuentaDestino
task.executeQuery.Q_CUENITTE_VP60 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaD = executeQueryEventArgs.commons.api.vc.model.FiltroCuentaDestino.cuentaD;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaDestino = true;
};

	
//Start signature to Callback event to Q_CUENITTE_VP60
task.executeQueryCallback.Q_CUENITTE_VP60 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};




}));
