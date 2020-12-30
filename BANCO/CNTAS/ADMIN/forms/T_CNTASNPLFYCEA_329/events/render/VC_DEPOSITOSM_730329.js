
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: formDeposito
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.api.viewState.hide('G_DEPOSITOOO_826772');
    renderEventArgs.commons.execServer = false;

};