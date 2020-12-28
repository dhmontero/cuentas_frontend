/* variables locales de T_CNTASTHKYYPOH_380*/

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

    
        var task = designerEvents.api.frmcrearcuenta;
    

    //"TaskId": "T_CNTASTHKYYPOH_380"


    	
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNEE_OB83 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.FiltroCedula.cedula;
    executeQueryEventArgs.commons.execServer = true;
    
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};

	
//Start signature to Callback event to Q_CLIETNEE_OB83
task.executeQueryCallback.Q_CLIETNEE_OB83 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};




}));
