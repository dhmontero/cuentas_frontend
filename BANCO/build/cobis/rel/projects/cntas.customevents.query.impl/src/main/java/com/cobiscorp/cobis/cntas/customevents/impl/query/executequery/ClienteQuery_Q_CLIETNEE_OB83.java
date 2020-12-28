/*
 * Archivo: ClienteQuery_Q_CLIETNEE_OB83.java
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
		@Property(name = "query.id", value = "Q_CLIETNEE_OB83"),
		@Property(name = "query.version", value = "1.0.0")})

public class ClienteQuery_Q_CLIETNEE_OB83 implements IExecuteQuery {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(ClienteQuery_Q_CLIETNEE_OB83.class);
	
	@Reference(bind = "setBLI4929_bli_cons_cliente", unbind = "unsetBLI4929_bli_cons_cliente", cardinality = ReferenceCardinality.MANDATORY_UNARY, target = "(bli.id=BLI4929_bli_cons_cliente)")
	private IBLIExecutor bLI4929_bli_cons_cliente;
	public void setBLI4929_bli_cons_cliente(final IBLIExecutor bLI4929_bli_cons_cliente) {
        this.bLI4929_bli_cons_cliente = bLI4929_bli_cons_cliente;
    }
    
    public void unsetBLI4929_bli_cons_cliente(final IBLIExecutor bLI4929_bli_cons_cliente) {
        this.bLI4929_bli_cons_cliente = null;
    }
    
	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeDataEvent in ClienteQuery_Q_CLIETNEE_OB83");
			}
			this.bLI4929_bli_cons_cliente.execute(arg0);
			if (arg0.getEntityList("Cliente") != null)
				return arg0.getEntityList("Cliente").getDataList();
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return null;
	}

}

