//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formconsultatransaccion = designerEvents.api.formconsultatransaccion || designer.dsgEvents();

function VC_TRANSACCOO_401221(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_TRANSACCOO_401221_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_TRANSACCOO_401221_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "CNTAS",
            subModuleId: "ADMIN",
            taskId: "T_CNTASMMWZDNJT_221",
            taskVersion: "1.0.0",
            viewContainerId: "VC_TRANSACCOO_401221",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/CNTAS/ADMIN/T_CNTASMMWZDNJT_221",
        designerEvents.api.formconsultatransaccion,
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
                vcName: 'VC_TRANSACCOO_401221'
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
                    taskId: 'T_CNTASMMWZDNJT_221',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Cuenta: "Cuenta",
                    Transaccion: "Transaccion"
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
                    Transaccion: {
                        fecha: 'AT37_FECHAMFT246',
                        idTransaccion: 'AT44_IDTRANOO246',
                        tipoTransaccion: 'AT71_TIPOTRCA246',
                        cuenta: 'AT78_CUENTAWF246',
                        tipoCuenta: 'AT97_TIPOCUTN246',
                        _pks: [],
                        _entityId: 'EN_TRANSACNI_246',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_TRANIIOA_KE37 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_TRANIIOA_KE37 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_TRANIIOA_KE37_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_TRANIIOA_KE37_filters;
                    parametersAux = {
                        cuenta: filters.cuenta
                    };
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_TRANSACNI_246',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_TRANIIOA_KE37',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {
                        if ($.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            //No tiene relaciones con otra entidad
                            this.parameters = {};
                        } else if (!$.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            this.parameters['cuenta'] = this.filters.cuenta;
                        }
                    }
                }
            };
            $scope.vc.queries.Q_TRANIIOA_KE37_filters = {};
            var defaultValues = {
                Cuenta: {},
                Transaccion: {}
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
                $scope.vc.execute("temporarySave", VC_TRANSACCOO_401221, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_TRANSACCOO_401221, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_TRANSACCOO_401221, data, function() {});
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
            $scope.vc.viewState.VC_TRANSACCOO_401221 = {
                style: []
            };
            $scope.vc.model.Cuenta = {
                fechaCreacion: $scope.vc.channelDefaultValues("Cuenta", "fechaCreacion"),
                attribute6202: $scope.vc.channelDefaultValues("Cuenta", "attribute6202"),
                saldo: $scope.vc.channelDefaultValues("Cuenta", "saldo"),
                banco: $scope.vc.channelDefaultValues("Cuenta", "banco"),
                fechaModificacion: $scope.vc.channelDefaultValues("Cuenta", "fechaModificacion"),
                cliente: $scope.vc.channelDefaultValues("Cuenta", "cliente")
            };
            //ViewState - Group: Group1676
            $scope.vc.createViewState({
                id: "G_TRANSACNIC_559736",
                hasId: true,
                componentStyle: [],
                label: 'Group1676',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cuenta, Attribute: banco
            $scope.vc.createViewState({
                id: "VA_BANCOGTEIMUZUFY_798736",
                componentStyle: [],
                labelImageId: "",
                label: "CNTAS.LBL_CNTAS_NOCUENTAA_84657",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONZKBTVON_767736",
                componentStyle: [],
                imageId: "fa fa-search",
                label: "CNTAS.LBL_CNTAS_BUSCARUYH_74684",
                queryId: 'Q_TRANIIOA_KE37',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group2259
            $scope.vc.createViewState({
                id: "G_TRANSACICO_120736",
                hasId: true,
                componentStyle: [],
                label: 'Group2259',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Transaccion = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    idTransaccion: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Transaccion", "idTransaccion", 0)
                    },
                    fecha: {
                        type: "date",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Transaccion", "fecha", new Date())
                    },
                    cuenta: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Transaccion", "cuenta", '')
                    },
                    tipoTransaccion: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Transaccion", "tipoTransaccion", '')
                    },
                    tipoCuenta: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Transaccion", "tipoCuenta", '')
                    }
                }
            });
            $scope.vc.model.Transaccion = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_TRANIIOA_KE37';
                            var queryRequest = $scope.vc.getRequestQuery_Q_TRANIIOA_KE37();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_AV37_VTU36',
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
                    model: $scope.vc.types.Transaccion
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_AV37_VTU36").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_TRANIIOA_KE37 = $scope.vc.model.Transaccion;
            $scope.vc.trackers.Transaccion = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Transaccion);
            $scope.vc.model.Transaccion.bind('change', function(e) {
                $scope.vc.trackers.Transaccion.track(e);
            });
            $scope.vc.grids.QV_AV37_VTU36 = {};
            $scope.vc.grids.QV_AV37_VTU36.queryId = 'Q_TRANIIOA_KE37';
            $scope.vc.viewState.QV_AV37_VTU36 = {
                style: []
            };
            $scope.vc.viewState.QV_AV37_VTU36.column = {};
            $scope.vc.grids.QV_AV37_VTU36.editable = false;
            $scope.vc.grids.QV_AV37_VTU36.events = {
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
                    $scope.vc.trackers.Transaccion.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_AV37_VTU36.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_AV37_VTU36", false, grid);
                    $scope.vc.hideShowColumns("QV_AV37_VTU36", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_AV37_VTU36.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_AV37_VTU36.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_AV37_VTU36.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_AV37_VTU36 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_AV37_VTU36 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_AV37_VTU36.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_AV37_VTU36.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_AV37_VTU36.column.idTransaccion = {
                title: 'idTransaccion',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n0",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXECZ_691736',
                element: []
            };
            $scope.vc.grids.QV_AV37_VTU36.AT44_IDTRANOO246 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AV37_VTU36.column.idTransaccion.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXECZ_691736",
                        'data-validation-code': "{{vc.viewState.QV_AV37_VTU36.column.idTransaccion.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_AV37_VTU36.column.idTransaccion.format",
                        'k-decimals': "vc.viewState.QV_AV37_VTU36.column.idTransaccion.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AV37_VTU36.column.idTransaccion.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AV37_VTU36.column.fecha = {
                title: 'fecha',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "d",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_DATEFIELDTMEJNY_757736',
                element: []
            };
            $scope.vc.grids.QV_AV37_VTU36.AT37_FECHAMFT246 = {
                control: function(container, options) {
                    var textInput = $('<input />', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AV37_VTU36.column.fecha.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_DATEFIELDTMEJNY_757736",
                        'kendo-ext-date-picker': "",
                        'placeholder': "{{dateFormatPlaceholder}}",
                        'date-format': "{{dateFormat}}",
                        'date-input': true,
                        'k-options': "vc.getDateOptions(vc.viewState.QV_AV37_VTU36, 'fecha')",
                        'data-validation-code': "{{vc.viewState.QV_AV37_VTU36.column.fecha.validationCode}}",
                        'ng-class': "vc.viewState.QV_AV37_VTU36.column.fecha.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AV37_VTU36.column.cuenta = {
                title: 'cuenta',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXVBH_161736',
                element: []
            };
            $scope.vc.grids.QV_AV37_VTU36.AT78_CUENTAWF246 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AV37_VTU36.column.cuenta.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXVBH_161736",
                        'data-validation-code': "{{vc.viewState.QV_AV37_VTU36.column.cuenta.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AV37_VTU36.column.cuenta.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AV37_VTU36.column.tipoTransaccion = {
                title: 'tipoTransaccion',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXDUL_882736',
                element: []
            };
            $scope.vc.grids.QV_AV37_VTU36.AT71_TIPOTRCA246 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXDUL_882736",
                        'data-validation-code': "{{vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_AV37_VTU36.column.tipoCuenta = {
                title: 'tipoCuenta',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXLAU_801736',
                element: []
            };
            $scope.vc.grids.QV_AV37_VTU36.AT97_TIPOCUTN246 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_AV37_VTU36.column.tipoCuenta.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXLAU_801736",
                        'data-validation-code': "{{vc.viewState.QV_AV37_VTU36.column.tipoCuenta.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_AV37_VTU36.column.tipoCuenta.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AV37_VTU36.columns.push({
                    field: 'idTransaccion',
                    title: '{{vc.viewState.QV_AV37_VTU36.column.idTransaccion.title|translate:vc.viewState.QV_AV37_VTU36.column.idTransaccion.titleArgs}}',
                    width: $scope.vc.viewState.QV_AV37_VTU36.column.idTransaccion.width,
                    format: $scope.vc.viewState.QV_AV37_VTU36.column.idTransaccion.format,
                    editor: $scope.vc.grids.QV_AV37_VTU36.AT44_IDTRANOO246.control,
                    template: "<span ng-class='vc.viewState.QV_AV37_VTU36.column.idTransaccion.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.idTransaccion, \"QV_AV37_VTU36\", \"idTransaccion\"):kendo.toString(#=idTransaccion#, vc.viewState.QV_AV37_VTU36.column.idTransaccion.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_AV37_VTU36.column.idTransaccion.style",
                        "title": "{{vc.viewState.QV_AV37_VTU36.column.idTransaccion.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AV37_VTU36.column.idTransaccion.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AV37_VTU36.columns.push({
                    field: 'fecha',
                    title: '{{vc.viewState.QV_AV37_VTU36.column.fecha.title|translate:vc.viewState.QV_AV37_VTU36.column.fecha.titleArgs}}',
                    width: $scope.vc.viewState.QV_AV37_VTU36.column.fecha.width,
                    format: $scope.vc.viewState.QV_AV37_VTU36.column.fecha.format,
                    editor: $scope.vc.grids.QV_AV37_VTU36.AT37_FECHAMFT246.control,
                    template: "<span ng-class='vc.viewState.QV_AV37_VTU36.column.fecha.element[dataItem.dsgnrId].style'>#=((fecha !== null) ? kendo.toString(fecha, 'd') : '')#</span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AV37_VTU36.column.fecha.style",
                        "title": "{{vc.viewState.QV_AV37_VTU36.column.fecha.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AV37_VTU36.column.fecha.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AV37_VTU36.columns.push({
                    field: 'cuenta',
                    title: '{{vc.viewState.QV_AV37_VTU36.column.cuenta.title|translate:vc.viewState.QV_AV37_VTU36.column.cuenta.titleArgs}}',
                    width: $scope.vc.viewState.QV_AV37_VTU36.column.cuenta.width,
                    format: $scope.vc.viewState.QV_AV37_VTU36.column.cuenta.format,
                    editor: $scope.vc.grids.QV_AV37_VTU36.AT78_CUENTAWF246.control,
                    template: "<span ng-class='vc.viewState.QV_AV37_VTU36.column.cuenta.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.cuenta, \"QV_AV37_VTU36\", \"cuenta\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AV37_VTU36.column.cuenta.style",
                        "title": "{{vc.viewState.QV_AV37_VTU36.column.cuenta.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AV37_VTU36.column.cuenta.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AV37_VTU36.columns.push({
                    field: 'tipoTransaccion',
                    title: '{{vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.title|translate:vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.titleArgs}}',
                    width: $scope.vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.width,
                    format: $scope.vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.format,
                    editor: $scope.vc.grids.QV_AV37_VTU36.AT71_TIPOTRCA246.control,
                    template: "<span ng-class='vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.tipoTransaccion, \"QV_AV37_VTU36\", \"tipoTransaccion\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.style",
                        "title": "{{vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AV37_VTU36.column.tipoTransaccion.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_AV37_VTU36.columns.push({
                    field: 'tipoCuenta',
                    title: '{{vc.viewState.QV_AV37_VTU36.column.tipoCuenta.title|translate:vc.viewState.QV_AV37_VTU36.column.tipoCuenta.titleArgs}}',
                    width: $scope.vc.viewState.QV_AV37_VTU36.column.tipoCuenta.width,
                    format: $scope.vc.viewState.QV_AV37_VTU36.column.tipoCuenta.format,
                    editor: $scope.vc.grids.QV_AV37_VTU36.AT97_TIPOCUTN246.control,
                    template: "<span ng-class='vc.viewState.QV_AV37_VTU36.column.tipoCuenta.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.tipoCuenta, \"QV_AV37_VTU36\", \"tipoCuenta\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_AV37_VTU36.column.tipoCuenta.style",
                        "title": "{{vc.viewState.QV_AV37_VTU36.column.tipoCuenta.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_AV37_VTU36.column.tipoCuenta.hidden
                });
            }
            $scope.vc.viewState.QV_AV37_VTU36.toolbar = {}
            $scope.vc.grids.QV_AV37_VTU36.toolbar = [];
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_CNTASMMWZDNJT_221_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_CNTASMMWZDNJT_221_CANCEL",
                componentStyle: [],
                label: 'Cancel',
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
                $scope.vc.render('VC_TRANSACCOO_401221');
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
    var cobisMainModule = cobis.createModule("VC_TRANSACCOO_401221", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "CNTAS"]);
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
        $routeProvider.when("/VC_TRANSACCOO_401221", {
            templateUrl: "VC_TRANSACCOO_401221_FORM.html",
            controller: "VC_TRANSACCOO_401221_CTRL",
            label: "formConsultaTransaccion",
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
                return "/VC_TRANSACCOO_401221?" + $.param(search);
            }
        });
        VC_TRANSACCOO_401221(cobisMainModule);
    }]);
} else {
    VC_TRANSACCOO_401221(cobisMainModule);
}