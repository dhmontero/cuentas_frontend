/*
 * Archivo: TransferenciaQuery_Q_CUENAAAA_US24.java
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.cntas.customevents.impl.query.executequery;

import java.util.List;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteQuery;
import com.cobiscorp.designer.api.customization.arguments.IExecuteQueryEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;
import com.cobiscorp.designer.bli.api.IBLIExecutor;

@Component
@Service({ IExecuteQuery.class })
@Properties(value={
		@Property(name = "query.id", value = "Q_CUENAAAA_US24"),
		@Property(name = "query.version", value = "1.0.0")})

public class TransferenciaQuery_Q_CUENAAAA_US24 implements IExecuteQuery {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(TransferenciaQuery_Q_CUENAAAA_US24.class);

	@Reference(bind = "setBLI8860_bli_consultarorigen", unbind = "unsetBLI8860_bli_consultarorigen", cardinality = ReferenceCardinality.MANDATORY_UNARY, target = "(bli.id=BLI8860_bli_consultarorigen)")
	private IBLIExecutor bLI8860_bli_consultarorigen;
	
	public void setBLI8860_bli_consultarorigen(com.cobiscorp.designer.bli.api.IBLIExecutor bLI8860_bli_consultarorigen) {
		this.bLI8860_bli_consultarorigen = bLI8860_bli_consultarorigen;
	}
	
	public void unsetBLI8860_bli_consultarorigen(com.cobiscorp.designer.bli.api.IBLIExecutor bLI8860_bli_consultarorigen) {
		this.bLI8860_bli_consultarorigen = null;
	}
	
	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeDataEvent in TransferenciaQuery_Q_CUENAAAA_US24");
			}
			
			this.bLI8860_bli_consultarorigen.execute(arg0);
			
			if (arg0.getEntityList("Cuenta") != null)
		        return arg0.getEntityList("Cuenta").getDataList();
			
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return null;
	}

}

