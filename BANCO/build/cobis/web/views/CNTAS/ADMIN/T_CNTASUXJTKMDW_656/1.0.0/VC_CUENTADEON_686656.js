//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formcuentadestino = designerEvents.api.formcuentadestino || designer.dsgEvents();

function VC_CUENTADEON_686656(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_CUENTADEON_686656_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_CUENTADEON_686656_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "CNTAS",
            subModuleId: "ADMIN",
            taskId: "T_CNTASUXJTKMDW_656",
            taskVersion: "1.0.0",
            viewContainerId: "VC_CUENTADEON_686656",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/CNTAS/ADMIN/T_CNTASUXJTKMDW_656",
        designerEvents.api.formcuentadestino,
        $scope.rowData);
        $scope.kendo = kendo;
        //Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
        $scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
        if (preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL)) {
            $scope.currencySymbol = preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL);
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT)) {
            $scope.dateFormat = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT);
        } else {
            $scope.dateFormat = 'yyyy/MM/dd';
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER)) {
            $scope.dateFormatPlaceholder = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER);
        } else {
            $scope.dateFormatPlaceholder = $scope.dateFormat;
        }
        $scope.vc.routeProvider = cobisMainModule.routeProvider;
        if (!$scope.vc.loaded) {
            var page = {
                hasTemporaryDataSupport: false,
                hasInitDataSupport: false,
                hasChangeInitDataSupport: false,
                hasSearchRenderEvent: false,
                ejecTemporaryData: false,
                ejecInitData: false,
                ejecChangeInitData: false,
                ejecSearchRenderEvent: false,
                hasTemporaryData: false,
                hasInitData: false,
                hasChangeInitData: false,
                hasCRUDSupport: false,
                vcName: 'VC_CUENTADEON_686656'
            };
            if (typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined') {
                $scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
                $scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
            } else {
                //CobisPattern no definido en framework de Designer como constante. Actualizar Framework
                $scope.vc.cobisPattern = 0;
                $scope.vc.isConsolidateView = false;
            }
            if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
                $scope.vc.pk = $scope.queryParameters.pk;
                $scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
            } else {
                $scope.vc.pk = $location.search().pk;
                $scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
            }
            $scope.vc.args.pk = $scope.vc.pk;
            $scope.vc.args.mode = $scope.vc.mode;
            if (cobis.userContext.getValue(cobis.constant.USER_NAME)) {
                $scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
            } else {
                $scope.vc.args.user = "UserOutContainer";
            }
            $scope.vc.customDialogParameters = $scope.customDialogParameters;
            $scope.vc.args.channel = $location.search().channel;
            $scope.vc.metadata = {
                taskPk: {
                    moduleId: 'CNTAS',
                    subModuleId: 'ADMIN',
                    taskId: 'T_CNTASUXJTKMDW_656',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Cuenta: "Cuenta",
                    CuentaDestino: "CuentaDestino",
                    FiltroCuentaDestino: "FiltroCuentaDestino"
                },
                entities: {
                    Cuenta: {
                        fechaCreacion: 'AT61_FECHACEE998',
                        attribute6202: 'AT6203_6202LOIL998',
                        saldo: 'AT87_SALDOWDJ998',
                        banco: 'AT95_BANCOSHW998',
                        fechaModificacion: 'AT96_FECHAMII998',
                        cliente: 'AT97_CLIENTEE998',
                        _pks: [],
                        _entityId: 'EN_2DWTFTYSE_998',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    CuentaDestino: {
                        cliente: 'AT11_CLIENTEE522',
                        saldo: 'AT28_SALDOKWQ522',
                        banco: 'AT52_BANCODZN522',
                        fechaCreacion: 'AT52_FECHACNC522',
                        fechaModificacion: 'AT61_FECHAMAO522',
                        _pks: [],
                        _entityId: 'EN_CUENTADSE_522',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    FiltroCuentaDestino: {
                        cuentaD: 'AT84_CUENTADD372',
                        _pks: [],
                        _entityId: 'EN_FILTROCUE_372',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_CUENITTE_VP60 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_CUENITTE_VP60 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_CUENITTE_VP60_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_CUENITTE_VP60_filters;
                    parametersAux = {
                        banco: filters.banco
                    };
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_CUENTADSE_522',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_CUENITTE_VP60',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {
                        if ($.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            //No tiene relaciones con otra entidad
                            this.parameters = {};
                        } else if (!$.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            this.parameters['banco'] = this.filters.banco;
                        }
                    }
                }
            };
            $scope.vc.queries.Q_CUENITTE_VP60_filters = {};
            var defaultValues = {
                Cuenta: {},
                CuentaDestino: {},
                FiltroCuentaDestino: {}
            };
            $scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist) {
                var channel = $scope.vc.args.channel;
                for (var en in defaultValues) {
                    if (defaultValues.hasOwnProperty(en) && en === entityName) {
                        for (var att in defaultValues[en]) {
                            if (defaultValues[en].hasOwnProperty(att) && att === attributeName) {
                                for (var ch in defaultValues[en][att]) {
                                    if (defaultValues[en][att].hasOwnProperty(ch) && ch === channel) {
                                        return defaultValues[en][att][ch];
                                    }
                                }
                            }
                        }
                    }
                }
                if (typeof valueIfNotExist !== "undefined") {
                    return valueIfNotExist;
                } else {
                    return null;
                }
            };
            $scope.vc.temporarySave = function() {
                var modelo = $scope.vc.cleanData($scope.vc.model);
                var data = {
                    model: modelo,
                    trackers: $scope.vc.trackers,
                    temporaryStorePK: $scope.vc.metadata.taskPk
                };
                $scope.vc.execute("temporarySave", VC_CUENTADEON_686656, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_CUENTADEON_686656, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_CUENTADEON_686656, data, function() {});
                            $scope.vc.crud.addTrackers($scope.vc.model);
                        }
                        page.hasTemporaryData = result;
                        page.ejecTemporaryData = response.success;
                        return page;
                    });
                } else {
                    page.ejecTemporaryData = false;
                    page.hasTemporaryData = false;
                    return page;
                }
            };
            $scope.vc.viewState.keyDown = function(e) {
                dsgnrUtils.container.validateOnEnter(e, $scope.vc);
            };
            $scope.vc.viewState.VC_CUENTADEON_686656 = {
                style: []
            };
            //ViewState - Group: Group1218
            $scope.vc.createViewState({
                id: "G_CUENTADOSI_849794",
                hasId: true,
                componentStyle: [],
                label: 'Group1218',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VASIMPLELABELLL_858794",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_CUENTADTT_17895",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            $scope.vc.model.FiltroCuentaDestino = {
                cuentaD: $scope.vc.channelDefaultValues("FiltroCuentaDestino", "cuentaD")
            };
            //ViewState - Group: Group2770
            $scope.vc.createViewState({
                id: "G_CUENTADNES_740794",
                hasId: true,
                componentStyle: [],
                label: 'Group2770',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: FiltroCuentaDestino, Attribute: cuentaD
            $scope.vc.createViewState({
                id: "VA_CUENTADMGVBDHZW_384794",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_NOCUENTAA_90338",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONDASSXAJ_564794",
                componentStyle: [],
                imageId: "fa fa-search",
                label: "CNTAS.LBL_CNTAS_BUSCARUYH_74684",
                queryId: 'Q_CUENITTE_VP60',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group2455
            $scope.vc.createViewState({
                id: "G_CUENTADNOS_257794",
                hasId: true,
                componentStyle: [],
                label: 'Group2455',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.CuentaDestino = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    banco: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("CuentaDestino", "banco", '')
                    },
                    fechaCreacion: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("CuentaDestino", "fechaCreacion", '')
                    },
                    fechaModificacion: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("CuentaDestino", "fechaModificacion", '')
                    },
                    cliente: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("CuentaDestino", "cliente", ''),
                        validation: {
                            clienteRequired: function(input) {
                                return dsgRequiredFunction(input, "cliente");
                            }
                        }
                    },
                    saldo: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("CuentaDestino", "saldo", 0)
                    }
                }
            });
            $scope.vc.model.CuentaDestino = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_CUENITTE_VP60';
                            var queryRequest = $scope.vc.getRequestQuery_Q_CUENITTE_VP60();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_AR60_BTV68',
                                    queryRequest,
                                    queryRequest.mainEntityPk.entityId,
                                    true,

                                    function(response) {
                                        if (response.success) {
                                            var result = response.data['RESULT' + queryId];
                                            if (angular.isUndefined(result)) {
                                                result = [];
                                            }
                                            if (angular.isDefined(result) && angular.isArray(result)) {
                                                options.success(result);
                                            } else {
                                                options.success([]);
                                            }
                                        } else {
                                            options.error([]);
                                        }
                                    }, (function() {
                                        var queryOptions = options.data;
                                        var queryView = {
                                            'allowPaging': false,
                                            'pageSize': 0
                                        };

                                        function config(queryOptions, queryView) {
                                            var result = undefined;
                                            if (queryView.allowPaging === true) {
                                                result = {};
                                                if (angular.isDefined(queryOptions.appendRecords) && queryOptions.appendRecords === true) {
                                                    result.appendRecords = true;
                                                }
                                                result.pageSize = queryView.pageSize;
                                            }
                                            return result;
                                        }
                                        return config(queryOptions, queryView);
                                    }()));
                                }
                            }
                        }
                        if (promise === false) {
                            options.error({
                                xhr: {}
                            });
                        }
                    },
                    create: function(options) {
                        var model = options.data;
                        model.dsgnrId = designer.utils.uuid();
                        options.success(model);
                    },
                    update: function(options) {
                        var model = options.data;
                        options.success(model);
                    },
                    destroy: function(options) {
                        var model = options.data;
                        options.success(model);
                    }
                },
                schema: {
                    model: $scope.vc.types.CuentaDestino
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_AR60_BTV68").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_CUENITTE_VP60 = $scope.vc.model.CuentaDestino;
            $scope.vc.trackers.CuentaDestino = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.CuentaDestino);
            $scope.vc.model.CuentaDestino.bind('change', function(e) {
                $scope.vc.trackers.CuentaDestino.track(e);
            });
            $scope.vc.grids.QV_AR60_BTV68 = {};
            $scope.vc.grids.QV_AR60_BTV68.queryId = 'Q_CUENITTE_VP60';
            $scope.vc.viewState.QV_AR60_BTV68 = {
                style: []
            };
            $scope.vc.viewState.QV_AR60_BTV68.column = {};
            $scope.vc.grids.QV_AR60_BTV68.editable = false;
            $scope.vc.grids.QV_AR60_BTV68.events = {
                customRowClick: function(e, controlId, entity, idGrid, commandName) {
                    var grid = $scope.vc.getElementGrid(idGrid);
                    var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                    var args = {
                        rowData: dataItem,
                        rowIndex: grid.dataSource.indexOf(dataItem),
                        nameEntityGrid: entity,
                        refreshData: false,
                        stopPropagation: false,
                        commandName: commandName
                    };
                    $scope.vc.executeGridRowCommand(controlId, args);
                    if (args.refreshData) {
                        grid.refresh();
                    }
                    if (args.stopPropagation) {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }
                },
                cancel: function(e) {
                    $scope.vc.trackers.CuentaDestino.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_AR60_BTV68.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_AR60_BTV68", false, grid);
                    $scope.vc.hideShowColumns("QV_AR60_BTV68", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_AR60_BTV68.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_AR60_BTV68.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_AR60_BTV68.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_AR60_BTV68 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_AR60_BTV68 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_AR60_BTV68.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_AR60_BTV68.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_AR60_BTV68.column.banco = {
                title: 'banco',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXRXU_885794',
                element: []
            };
            $scope.vc.grids.QV_AR60_BTV68.AT52_BANCODZN522 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AR60_BTV68.column.banco.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXRXU_885794",
                        'data-validation-code': "{{vc.viewState.QV_AR60_BTV68.column.banco.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AR60_BTV68.column.banco.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AR60_BTV68.column.fechaCreacion = {
                title: 'fechaCreacion',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXOLS_130794',
                element: []
            };
            $scope.vc.grids.QV_AR60_BTV68.AT52_FECHACNC522 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AR60_BTV68.column.fechaCreacion.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXOLS_130794",
                        'data-validation-code': "{{vc.viewState.QV_AR60_BTV68.column.fechaCreacion.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AR60_BTV68.column.fechaCreacion.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AR60_BTV68.column.fechaModificacion = {
                title: 'fechaModificacion',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXBMQ_214794',
                element: []
            };
            $scope.vc.grids.QV_AR60_BTV68.AT61_FECHAMAO522 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AR60_BTV68.column.fechaModificacion.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXBMQ_214794",
                        'data-validation-code': "{{vc.viewState.QV_AR60_BTV68.column.fechaModificacion.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AR60_BTV68.column.fechaModificacion.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AR60_BTV68.column.cliente = {
                title: 'cliente',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 32,
                componentId: 'VA_TEXTINPUTBOXTNV_365794',
                element: []
            };
            $scope.vc.grids.QV_AR60_BTV68.AT11_CLIENTEE522 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AR60_BTV68.column.cliente.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXTNV_365794",
                        'required': '',
                        'data-required-msg': 'cliente' + ' ' + $filter('translate')('DSGNR.SYS_DSGNR_MSGREQURF_00032'),
                        'data-validation-code': "{{vc.viewState.QV_AR60_BTV68.column.cliente.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'maxlength': 30,
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AR60_BTV68.column.cliente.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AR60_BTV68.column.saldo = {
                title: 'saldo',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXMGD_845794',
                element: []
            };
            $scope.vc.grids.QV_AR60_BTV68.AT28_SALDOKWQ522 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AR60_BTV68.column.saldo.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXMGD_845794",
                        'data-validation-code': "{{vc.viewState.QV_AR60_BTV68.column.saldo.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_AR60_BTV68.column.saldo.format",
                        'k-decimals': "vc.viewState.QV_AR60_BTV68.column.saldo.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AR60_BTV68.column.saldo.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AR60_BTV68.columns.push({
                    field: 'banco',
                    title: '{{vc.viewState.QV_AR60_BTV68.column.banco.title|translate:vc.viewState.QV_AR60_BTV68.column.banco.titleArgs}}',
                    width: $scope.vc.viewState.QV_AR60_BTV68.column.banco.width,
                    format: $scope.vc.viewState.QV_AR60_BTV68.column.banco.format,
                    editor: $scope.vc.grids.QV_AR60_BTV68.AT52_BANCODZN522.control,
                    template: "<span ng-class='vc.viewState.QV_AR60_BTV68.column.banco.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.banco, \"QV_AR60_BTV68\", \"banco\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AR60_BTV68.column.banco.style",
                        "title": "{{vc.viewState.QV_AR60_BTV68.column.banco.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AR60_BTV68.column.banco.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AR60_BTV68.columns.push({
                    field: 'fechaCreacion',
                    title: '{{vc.viewState.QV_AR60_BTV68.column.fechaCreacion.title|translate:vc.viewState.QV_AR60_BTV68.column.fechaCreacion.titleArgs}}',
                    width: $scope.vc.viewState.QV_AR60_BTV68.column.fechaCreacion.width,
                    format: $scope.vc.viewState.QV_AR60_BTV68.column.fechaCreacion.format,
                    editor: $scope.vc.grids.QV_AR60_BTV68.AT52_FECHACNC522.control,
                    template: "<span ng-class='vc.viewState.QV_AR60_BTV68.column.fechaCreacion.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.fechaCreacion, \"QV_AR60_BTV68\", \"fechaCreacion\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AR60_BTV68.column.fechaCreacion.style",
                        "title": "{{vc.viewState.QV_AR60_BTV68.column.fechaCreacion.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AR60_BTV68.column.fechaCreacion.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AR60_BTV68.columns.push({
                    field: 'fechaModificacion',
                    title: '{{vc.viewState.QV_AR60_BTV68.column.fechaModificacion.title|translate:vc.viewState.QV_AR60_BTV68.column.fechaModificacion.titleArgs}}',
                    width: $scope.vc.viewState.QV_AR60_BTV68.column.fechaModificacion.width,
                    format: $scope.vc.viewState.QV_AR60_BTV68.column.fechaModificacion.format,
                    editor: $scope.vc.grids.QV_AR60_BTV68.AT61_FECHAMAO522.control,
                    template: "<span ng-class='vc.viewState.QV_AR60_BTV68.column.fechaModificacion.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.fechaModificacion, \"QV_AR60_BTV68\", \"fechaModificacion\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AR60_BTV68.column.fechaModificacion.style",
                        "title": "{{vc.viewState.QV_AR60_BTV68.column.fechaModificacion.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AR60_BTV68.column.fechaModificacion.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AR60_BTV68.columns.push({
                    field: 'cliente',
                    title: '{{vc.viewState.QV_AR60_BTV68.column.cliente.title|translate:vc.viewState.QV_AR60_BTV68.column.cliente.titleArgs}}',
                    width: $scope.vc.viewState.QV_AR60_BTV68.column.cliente.width,
                    format: $scope.vc.viewState.QV_AR60_BTV68.column.cliente.format,
                    editor: $scope.vc.grids.QV_AR60_BTV68.AT11_CLIENTEE522.control,
                    template: "<span ng-class='vc.viewState.QV_AR60_BTV68.column.cliente.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.cliente, \"QV_AR60_BTV68\", \"cliente\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AR60_BTV68.column.cliente.style",
                        "title": "{{vc.viewState.QV_AR60_BTV68.column.cliente.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AR60_BTV68.column.cliente.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AR60_BTV68.columns.push({
                    field: 'saldo',
                    title: '{{vc.viewState.QV_AR60_BTV68.column.saldo.title|translate:vc.viewState.QV_AR60_BTV68.column.saldo.titleArgs}}',
                    width: $scope.vc.viewState.QV_AR60_BTV68.column.saldo.width,
                    format: $scope.vc.viewState.QV_AR60_BTV68.column.saldo.format,
                    editor: $scope.vc.grids.QV_AR60_BTV68.AT28_SALDOKWQ522.control,
                    template: "<span ng-class='vc.viewState.QV_AR60_BTV68.column.saldo.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.saldo, \"QV_AR60_BTV68\", \"saldo\"):kendo.toString(#=saldo#, vc.viewState.QV_AR60_BTV68.column.saldo.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_AR60_BTV68.column.saldo.style",
                        "title": "{{vc.viewState.QV_AR60_BTV68.column.saldo.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AR60_BTV68.column.saldo.hidden
                });
            }
            $scope.vc.viewState.QV_AR60_BTV68.toolbar = {}
            $scope.vc.grids.QV_AR60_BTV68.toolbar = [];
            $scope.vc.model.Cuenta = {
                fechaCreacion: $scope.vc.channelDefaultValues("Cuenta", "fechaCreacion"),
                attribute6202: $scope.vc.channelDefaultValues("Cuenta", "attribute6202"),
                saldo: $scope.vc.channelDefaultValues("Cuenta", "saldo"),
                banco: $scope.vc.channelDefaultValues("Cuenta", "banco"),
                fechaModificacion: $scope.vc.channelDefaultValues("Cuenta", "fechaModificacion"),
                cliente: $scope.vc.channelDefaultValues("Cuenta", "cliente")
            };
            //ViewState - Group: Group2643
            $scope.vc.createViewState({
                id: "G_CUENTADNSS_314794",
                hasId: true,
                componentStyle: [],
                label: 'Group2643',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cuenta, Attribute: saldo
            $scope.vc.createViewState({
                id: "VA_SALDOYUMXUAWSLG_669794",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_VALORATRE_89141",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_CNTASUXJTKMDW_656_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_CNTASUXJTKMDW_656_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Command1
            $scope.vc.createViewState({
                id: "CM_TCNTASUX__6_",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_TARANSFRR_28094",
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            if ($scope.vc.parentVc) {
                $scope.vc.afterOpenGridDialog();
            }
        }
        $scope.isInvalid = function(form, field) {
            if (!field) {
                return false;
            }
            var submitted = $scope.vc.submitted[form.$name];
            return ((submitted || field.$dirty) && field.$invalid);
        };
        $scope._initPage_CRUDExecuteQueryEntities = function(page) {
            if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                if (page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else if (page.hasCRUDSupport) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else {
                    return page;
                }
            } else {
                return page;
            }
        };
        $scope._initPage_InitializeTrackers = function(page) {
            $scope.vc.addChangeEvents($scope);
            $scope.vc.crud.addTrackers($scope.vc.model);
            return page;
        };
        $scope._initPage_ChangeInitData = function(page) {
            return $scope.vc.changeInitData(page, $scope.vc);
        };
        $scope._initPage_ProcessRender = function(page) {
            if (page.hasSearchRenderEvent) {
                $scope.vc.render('VC_CUENTADEON_686656');
            }
            return page;
        };
        if ($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude) {
            //para ventanas modales se usa ng-include con onload
            $scope.runLifeCycle = function() {
                var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                if (threadLifeCycle) {
                    if (!$scope.isDesignerInclude) {
                        cobis.showMessageWindow.loading(true, "none");
                    }
                    $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                    cobis.showMessageWindow.loading(false);
                }
            };
        } else {
            //con ngView no funciona el $document.ready se cambia por $viewContentLoaded
            $scope.$on('$viewContentLoaded', function() {
                if ($scope.vc.loaded) {
                    //Si se esta regresando de otra pantalla
                    $scope.vc.addAfterInitDataFlags($scope);
                    $scope.vc.addChangeEvents($scope);
                    if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
                        $scope.vc.onCloseModalEvent();
                    }
                    if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
                        $scope.vc.afterCloseGridDialog();
                    }
                    cobis.showMessageWindow.loading(false);
                } else {
                    //Si es la primera vez que se ejecuta la pantalla
                    var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                    if (threadLifeCycle) {
                        $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                        cobis.showMessageWindow.loading(false);
                    }
                }
            });
        }
    }]);
}
if (typeof cobisMainModule === "undefined") {
    var cobisMainModule = cobis.createModule("VC_CUENTADEON_686656", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "CNTAS"]);
    cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",

    function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
        $locationProvider.html5Mode(true);
        cobisMainModule.controllerProvider = $controllerProvider;
        cobisMainModule.compileProvider = $compileProvider;
        cobisMainModule.routeProvider = $routeProvider;
        cobisMainModule.filterProvider = $filterProvider;
        cobisMainModule.provide = $provide;
        var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
        $routeProvider.when("/VC_CUENTADEON_686656", {
            templateUrl: "VC_CUENTADEON_686656_FORM.html",
            controller: "VC_CUENTADEON_686656_CTRL",
            label: "formCuentaDestino",
            resolve: {
                i18n: function($translatePartialLoader, $translate) {
                    cobis.showMessageWindow.customLoading(true);
                    $translatePartialLoader.addPart('DSGNR');
                    $translatePartialLoader.addPart('CNTAS');
                    return $translate.use(cobis.userContext.getValue(cobis.constant.CULTURE)).then(function() {
                        return $translate.refresh().then(function() {
                            cobis.showMessageWindow.customLoading(false);
                        });
                    });
                }
            }
        }).otherwise({
            redirectTo: function(routeParams, path, search) {
                return "/VC_CUENTADEON_686656?" + $.param(search);
            }
        });
        VC_CUENTADEON_686656(cobisMainModule);
    }]);
} else {
    VC_CUENTADEON_686656(cobisMainModule);
}