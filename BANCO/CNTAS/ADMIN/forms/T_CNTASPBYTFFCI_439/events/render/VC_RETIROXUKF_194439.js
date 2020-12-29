
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formRetiro
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.api.viewState.hide('G_RETIROZOZY_551283');
    renderEventArgs.commons.execServer = false;

};