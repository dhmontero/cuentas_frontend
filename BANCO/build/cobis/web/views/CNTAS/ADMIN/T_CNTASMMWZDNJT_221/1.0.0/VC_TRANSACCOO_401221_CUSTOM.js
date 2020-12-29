/* variables locales de T_CNTASMMWZDNJT_221*/

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

    
        var task = designerEvents.api.formconsultatransaccion;
    

    //"TaskId": "T_CNTASMMWZDNJT_221"


    	
//TransaccionQuery Entity: Transaccion
task.executeQuery.Q_TRANIIOA_KE37 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.vc.model.Cuenta.banco;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Transaccion = true;
};

	
//Start signature to Callback event to Q_TRANIIOA_KE37
task.executeQueryCallback.Q_TRANIIOA_KE37 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};




}));
