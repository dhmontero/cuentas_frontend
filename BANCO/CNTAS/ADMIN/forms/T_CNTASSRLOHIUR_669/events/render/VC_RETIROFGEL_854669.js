
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formRetiro
task.render = function (entities, renderEventArgs){
    
    renderEventArgs.commons.api.viewState.hide('G_RETIROERUY_762863');
    renderEventArgs.commons.execServer = false;

};