/*
 * Archivo: Q_CLIETNEE_OB83_QueryEvent.java
 * Fecha: 29-dic-2020 18:24:13
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

package com.cobiscorp.cobis.cntas.customevents.query;

import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.QueryEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Query
 *
 * Q_CLIETNEE_OB83_QueryEvent - ClienteQuery
 *
 */
@Component
@Service({QueryEventBuilder.class})
@Properties(value={
		@Property(name = "query.id", value = "Q_CLIETNEE_OB83"),
		@Property(name = "query.version", value = "1.0.0")
})
public class Q_CLIETNEE_OB83_QueryEvent extends QueryEventBuilder
 implements IExecuteQuery
{

	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(Q_CLIETNEE_OB83_QueryEvent.class);
	
	@Reference(name="iExecuteQueryQ_CLIETNEE_OB83",referenceInterface =IExecuteQuery.class,bind = "setiExecuteQueryQ_CLIETNEE_OB83",unbind = "unsetiExecuteQueryQ_CLIETNEE_OB83",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(query.version=1.0.0)(query.id=Q_CLIETNEE_OB83))")
	private IExecuteQuery iExecuteQueryQ_CLIETNEE_OB83;

	public void setiExecuteQueryQ_CLIETNEE_OB83(IExecuteQuery iExecuteQueryQ_CLIETNEE_OB83) {
		this.iExecuteQueryQ_CLIETNEE_OB83 = iExecuteQueryQ_CLIETNEE_OB83;
	}

	public void unsetiExecuteQueryQ_CLIETNEE_OB83(IExecuteQuery iExecuteQueryQ_CLIETNEE_OB83) {
		this.iExecuteQueryQ_CLIETNEE_OB83 = iExecuteQueryQ_CLIETNEE_OB83;
	}

	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		List<?> lst = null;
		try {
			lst = iExecuteQueryQ_CLIETNEE_OB83.executeDataEvent(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return lst;
	}


	@Override
	public void configure() {
	    this.addQueryEvent("Q_CLIETNEE_OB83", this);
	}

}

