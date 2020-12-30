/* variables locales de T_CNTASEHKHATKR_667*/

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

    
        var task = designerEvents.api.formtransferencia;
    

    //"TaskId": "T_CNTASEHKHATKR_667"


    	
//TransferenciaQuery Entity: Cuenta
task.executeQuery.Q_CUENAAAA_US24 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuenta = executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.cuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cuenta = true;
};

	
//Start signature to Callback event to Q_CUENAAAA_US24
task.executeQueryCallback.Q_CUENAAAA_US24 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};




}));
