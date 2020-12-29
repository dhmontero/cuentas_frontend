//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formtransferencia = designerEvents.api.formtransferencia || designer.dsgEvents();

function VC_TRANSFERAC_120667(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_TRANSFERAC_120667_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_TRANSFERAC_120667_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "CNTAS",
            subModuleId: "ADMIN",
            taskId: "T_CNTASEHKHATKR_667",
            taskVersion: "1.0.0",
            viewContainerId: "VC_TRANSFERAC_120667",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/CNTAS/ADMIN/T_CNTASEHKHATKR_667",
        designerEvents.api.formtransferencia,
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
                vcName: 'VC_TRANSFERAC_120667'
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
                    taskId: 'T_CNTASEHKHATKR_667',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Cuenta: "Cuenta",
                    FiltroCuenta: "FiltroCuenta"
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
                    FiltroCuenta: {
                        cuenta: 'AT27_CUENTAGM587',
                        _pks: [],
                        _entityId: 'EN_FILTROCNE_587',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_CUENAAAA_US24 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_CUENAAAA_US24 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_CUENAAAA_US24_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_CUENAAAA_US24_filters;
                    parametersAux = {
                        banco: filters.banco
                    };
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_2DWTFTYSE_998',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_CUENAAAA_US24',
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
            $scope.vc.queries.Q_CUENAAAA_US24_filters = {};
            var defaultValues = {
                Cuenta: {},
                FiltroCuenta: {}
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
                $scope.vc.execute("temporarySave", VC_TRANSFERAC_120667, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_TRANSFERAC_120667, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_TRANSFERAC_120667, data, function() {});
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
            $scope.vc.viewState.VC_TRANSFERAC_120667 = {
                style: []
            };
            //ViewState - Group: Group2706
            $scope.vc.createViewState({
                id: "G_TRANSFERCN_589554",
                hasId: true,
                componentStyle: [],
                label: 'Group2706',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VASIMPLELABELLL_367554",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_CUENTAONI_74515",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            $scope.vc.model.FiltroCuenta = {
                cuenta: $scope.vc.channelDefaultValues("FiltroCuenta", "cuenta")
            };
            //ViewState - Group: Group1921
            $scope.vc.createViewState({
                id: "G_TRANSFERER_432554",
                hasId: true,
                componentStyle: [],
                label: 'Group1921',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: FiltroCuenta, Attribute: cuenta
            $scope.vc.createViewState({
                id: "VA_CUENTALSWLCBXAN_290554",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_NOCUENTAA_90338",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONHGNUWSC_708554",
                componentStyle: [],
                imageId: "fa fa-search",
                label: "CNTAS.LBL_CNTAS_BUSCARUYH_74684",
                queryId: 'Q_CUENAAAA_US24',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group1623
            $scope.vc.createViewState({
                id: "G_TRANSFERRI_553554",
                hasId: true,
                componentStyle: [],
                label: 'Group1623',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Cuenta = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    cliente: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cuenta", "cliente", ''),
                        validation: {
                            clienteRequired: function(input) {
                                return dsgRequiredFunction(input, "cliente");
                            }
                        }
                    },
                    banco: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cuenta", "banco", '')
                    },
                    saldo: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cuenta", "saldo", '')
                    },
                    fechaCreacion: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cuenta", "fechaCreacion", '')
                    },
                    fechaModificacion: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cuenta", "fechaModificacion", '')
                    },
                    attribute6202: {
                        type: "string",
                        editable: true
                    }
                }
            });
            $scope.vc.model.Cuenta = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_CUENAAAA_US24';
                            var queryRequest = $scope.vc.getRequestQuery_Q_CUENAAAA_US24();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_MN24_MNM48',
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
                    model: $scope.vc.types.Cuenta
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_MN24_MNM48").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_CUENAAAA_US24 = $scope.vc.model.Cuenta;
            $scope.vc.trackers.Cuenta = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Cuenta);
            $scope.vc.model.Cuenta.bind('change', function(e) {
                $scope.vc.trackers.Cuenta.track(e);
            });
            $scope.vc.grids.QV_MN24_MNM48 = {};
            $scope.vc.grids.QV_MN24_MNM48.queryId = 'Q_CUENAAAA_US24';
            $scope.vc.viewState.QV_MN24_MNM48 = {
                style: []
            };
            $scope.vc.viewState.QV_MN24_MNM48.column = {};
            $scope.vc.grids.QV_MN24_MNM48.editable = {
                mode: 'inline'
            };
            $scope.vc.grids.QV_MN24_MNM48.events = {
                customCreate: function(e, entity) {
                    var dialogParameters = {
                        nameEntityGrid: entity,
                        rowData: new $scope.vc.types.Cuenta(),
                        rowIndex: -1,
                        isNew: true,
                        hasBeforeOpenDialogEvent: false,
                        hasAfterCloseDialogEvent: false,
                        isModal: true,
                        moduleId: "CNTAS",
                        subModuleId: "ADMIN",
                        taskId: "T_CNTASUXJTKMDW_656",
                        taskVersion: "1.0.0",
                        viewContainerId: 'VC_CUENTADEON_686656',
                        title: 'CNTAS.LBL_CNTAS_TRANSFERR_30445',
                        size: 'md'
                    };
                    $scope.vc.beforeOpenGridDialog("QV_MN24_MNM48", dialogParameters);
                },
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
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    index = $scope.vc.getCommandCellData(grid.element).index();
                    if (index != -1) {
                        $scope.vc.changeGridColumnWidth('QV_MN24_MNM48', index, "0px");
                    }
                    $scope.vc.gridDataBound("QV_MN24_MNM48", false, grid);
                    $scope.vc.hideShowColumns("QV_MN24_MNM48", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_MN24_MNM48.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_MN24_MNM48.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_MN24_MNM48.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_MN24_MNM48 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_MN24_MNM48 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_MN24_MNM48.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_MN24_MNM48.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_MN24_MNM48.column.cliente = {
                title: 'cliente',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 32,
                componentId: 'VA_TEXTINPUTBOXVUL_666554',
                element: []
            };
            $scope.vc.viewState.QV_MN24_MNM48.column.banco = {
                title: 'banco',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXLBO_956554',
                element: []
            };
            $scope.vc.viewState.QV_MN24_MNM48.column.saldo = {
                title: 'saldo',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXSIF_316554',
                element: []
            };
            $scope.vc.viewState.QV_MN24_MNM48.column.fechaCreacion = {
                title: 'fechaCreacion',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXQRY_765554',
                element: []
            };
            $scope.vc.viewState.QV_MN24_MNM48.column.fechaModificacion = {
                title: 'fechaModificacion',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXNUN_690554',
                element: []
            };
            $scope.vc.viewState.QV_MN24_MNM48.column.attribute6202 = {
                title: 'attribute6202',
                titleArgs: {},
                tooltip: '',
                enabled: true,
                hidden: false,
                readOnly: false,
                decimals: 0,
                style: [],
                element: []
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_MN24_MNM48.columns.push({
                    field: 'cliente',
                    title: '{{vc.viewState.QV_MN24_MNM48.column.cliente.title|translate:vc.viewState.QV_MN24_MNM48.column.cliente.titleArgs}}',
                    width: $scope.vc.viewState.QV_MN24_MNM48.column.cliente.width,
                    format: $scope.vc.viewState.QV_MN24_MNM48.column.cliente.format,
                    template: "<span ng-class='vc.viewState.QV_MN24_MNM48.column.cliente.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.cliente, \"QV_MN24_MNM48\", \"cliente\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_MN24_MNM48.column.cliente.style",
                        "title": "{{vc.viewState.QV_MN24_MNM48.column.cliente.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_MN24_MNM48.column.cliente.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_MN24_MNM48.columns.push({
                    field: 'banco',
                    title: '{{vc.viewState.QV_MN24_MNM48.column.banco.title|translate:vc.viewState.QV_MN24_MNM48.column.banco.titleArgs}}',
                    width: $scope.vc.viewState.QV_MN24_MNM48.column.banco.width,
                    format: $scope.vc.viewState.QV_MN24_MNM48.column.banco.format,
                    template: "<span ng-class='vc.viewState.QV_MN24_MNM48.column.banco.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.banco, \"QV_MN24_MNM48\", \"banco\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_MN24_MNM48.column.banco.style",
                        "title": "{{vc.viewState.QV_MN24_MNM48.column.banco.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_MN24_MNM48.column.banco.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_MN24_MNM48.columns.push({
                    field: 'saldo',
                    title: '{{vc.viewState.QV_MN24_MNM48.column.saldo.title|translate:vc.viewState.QV_MN24_MNM48.column.saldo.titleArgs}}',
                    width: $scope.vc.viewState.QV_MN24_MNM48.column.saldo.width,
                    format: $scope.vc.viewState.QV_MN24_MNM48.column.saldo.format,
                    template: "<span ng-class='vc.viewState.QV_MN24_MNM48.column.saldo.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.saldo, \"QV_MN24_MNM48\", \"saldo\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_MN24_MNM48.column.saldo.style",
                        "title": "{{vc.viewState.QV_MN24_MNM48.column.saldo.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_MN24_MNM48.column.saldo.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_MN24_MNM48.columns.push({
                    field: 'fechaCreacion',
                    title: '{{vc.viewState.QV_MN24_MNM48.column.fechaCreacion.title|translate:vc.viewState.QV_MN24_MNM48.column.fechaCreacion.titleArgs}}',
                    width: $scope.vc.viewState.QV_MN24_MNM48.column.fechaCreacion.width,
                    format: $scope.vc.viewState.QV_MN24_MNM48.column.fechaCreacion.format,
                    template: "<span ng-class='vc.viewState.QV_MN24_MNM48.column.fechaCreacion.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.fechaCreacion, \"QV_MN24_MNM48\", \"fechaCreacion\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_MN24_MNM48.column.fechaCreacion.style",
                        "title": "{{vc.viewState.QV_MN24_MNM48.column.fechaCreacion.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_MN24_MNM48.column.fechaCreacion.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_MN24_MNM48.columns.push({
                    field: 'fechaModificacion',
                    title: '{{vc.viewState.QV_MN24_MNM48.column.fechaModificacion.title|translate:vc.viewState.QV_MN24_MNM48.column.fechaModificacion.titleArgs}}',
                    width: $scope.vc.viewState.QV_MN24_MNM48.column.fechaModificacion.width,
                    format: $scope.vc.viewState.QV_MN24_MNM48.column.fechaModificacion.format,
                    template: "<span ng-class='vc.viewState.QV_MN24_MNM48.column.fechaModificacion.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.fechaModificacion, \"QV_MN24_MNM48\", \"fechaModificacion\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_MN24_MNM48.column.fechaModificacion.style",
                        "title": "{{vc.viewState.QV_MN24_MNM48.column.fechaModificacion.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_MN24_MNM48.column.fechaModificacion.hidden
                });
            }
            $scope.vc.viewState.QV_MN24_MNM48.column.cmdEdition = {};
            $scope.vc.viewState.QV_MN24_MNM48.column.cmdEdition.hidden = false;
            $scope.vc.grids.QV_MN24_MNM48.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: {
                    template: "<span class='cb-commands'></span>"
                },
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: $scope.vc.viewState.QV_MN24_MNM48.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_MN24_MNM48.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_MN24_MNM48.toolbar = [{
                "name": "create",
                "entity": "Cuenta",
                "text": "",
                "template": "<button id = 'QV_MN24_MNM48_CUSTOM_CREATE' class = 'btn btn-default cb-grid-button' " + "ng-if = 'vc.viewState.QV_MN24_MNM48.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_TRANSFERRI_553554.disabled?true:false' " + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" " + "data-ng-click = 'vc.grids.QV_MN24_MNM48.events.customCreate($event, \"#:entity#\")'> " + "<span class = 'fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_CNTASEHKHATKR_667_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_CNTASEHKHATKR_667_CANCEL",
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
                $scope.vc.render('VC_TRANSFERAC_120667');
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
    var cobisMainModule = cobis.createModule("VC_TRANSFERAC_120667", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "CNTAS"]);
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
        $routeProvider.when("/VC_TRANSFERAC_120667", {
            templateUrl: "VC_TRANSFERAC_120667_FORM.html",
            controller: "VC_TRANSFERAC_120667_CTRL",
            label: "formTransferencia",
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
                return "/VC_TRANSFERAC_120667?" + $.param(search);
            }
        });
        VC_TRANSFERAC_120667(cobisMainModule);
    }]);
} else {
    VC_TRANSFERAC_120667(cobisMainModule);
}