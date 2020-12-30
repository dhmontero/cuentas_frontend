package com.cobiscorp.cobis.cntas.bli.services.impl;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.cobiscorp.cobis.cwc.context.MapperManager;
import com.cobiscorp.cobis.cwc.kernel.sp.dto.MapperResult;
import com.cobiscorp.cobis.cwc.kernel.sp.impl.ExecutorSP;

import com.cobiscorp.cobis.cntas.model.Cuenta;

import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.bli.util.BLIUtils;
import com.cobiscorp.designer.bli.api.IBLIExecutor;
import com.cobiscorp.designer.exception.DesignerRuntimeException;
import com.cobiscorp.designer.bli.manager.BliManagerException;
import com.cobiscorp.cobis.cwc.server.information.ServerParamUtil;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.ecobis.map.Mapper;
import com.cobiscorp.ecobis.map.dto.Result;
import com.cobiscorp.ecobis.map.enums.SqlType;

@Component
@Service({ IBLIExecutor.class })
@Properties({
  @Property(name = "task.module", value = "CNTAS"),
  @Property(name = "bli.id", value = "BLI5297_bli_insertar_ccorriente")
})
public class BLI5297_bli_insertar_ccorriente implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI5297_bli_insertar_ccorriente.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowCuenta;
      if (row != null && Cuenta.ENTITY_NAME.equals(row.getEntityName())) {
        rowCuenta = row;
      } else {
        rowCuenta = BLIUtils.getDataEntity(dynamicRequest, Cuenta.ENTITY_NAME);
        if (rowCuenta == null) {
          throw new DesignerRuntimeException("No existe entidad " + Cuenta.ENTITY_NAME);
        }
      }

      String wcliente = rowCuenta.get(Cuenta.CLIENTE);
      String wsaldo = rowCuenta.get(Cuenta.SALDO);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " CLIENTE: " + wcliente + " SALDO: " + wsaldo);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "I");
      mapper.addInputParameter("@t_trn", SqlType.INT, "706713");

      if (wcliente != null){
        mapper.addInputParameter("@i_cc_cliente", SqlType.INT, BLIUtils.convertToType(wcliente, String.class));
      }

      if (wsaldo != null){
        mapper.addInputParameter("@i_cc_saldo", SqlType.MONEY, BLIUtils.convertToType(wsaldo, String.class));
      }
      boolean ret = mapper.execute(".cobis.g3_sp_cuenta_corriente");
      int retCode = mapper.returnCode();
      if (ret && (retCode == 0)) {




        if (logger.isDebugEnabled()) {
          logger.logDebug("returnCode: " + retCode);
        }
      } else {
        BliManagerException.handleMapperException(mapper);
      }
    } catch (Exception ex) {
      BliManagerException.handleBliException(ex);
    } finally {
      if (mapper != null)
        mapper.check();
    }
  }

}