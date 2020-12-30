/*
 * Archivo: T_CNTASPNFEFZNV_404_FormEvent.java
 * Fecha: 30/12/2020 9:34:12
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

package com.cobiscorp.cobis.cntas.customevents.form;

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
import com.cobiscorp.designer.api.builder.FormEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Formulario
 *
 * T_CNTASPNFEFZNV_404_FormEvent - frmInsertarCuenta
 *
 */
@Component
@Service({ FormEventBuilder.class })
@Properties({ @Property(name = "task.module", value = "CNTAS"),
             @Property(name = "task.submodule", value = "ADMIN"),
             @Property(name = "task.id", value = "T_CNTASPNFEFZNV_404"),
             @Property(name = "task.version", value = "1.0.0"),
             @Property(name = "eventId", value = "CECM_010CM_TCNTASPN_A89_453") })
public class T_CNTASPNFEFZNV_404_FormEventCECM_010CM_TCNTASPN_A89_453 extends FormEventBuilder
 implements IExecuteCommand
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(T_CNTASPNFEFZNV_404_FormEventCECM_010CM_TCNTASPN_A89_453.class);
    
	@Reference(name="iExecuteCommandCM_TCNTASPN_A89",referenceInterface =IExecuteCommand.class,bind = "setiExecuteCommandCM_TCNTASPN_A89",unbind = "unsetiExecuteCommandCM_TCNTASPN_A89",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(task.module=CNTAS)(task.submodule=ADMIN)(task.id=T_CNTASPNFEFZNV_404)(task.version=1.0.0)(task.controlId=CM_TCNTASPN_A89))")
	private IExecuteCommand iExecuteCommandCM_TCNTASPN_A89;

	public void setiExecuteCommandCM_TCNTASPN_A89(IExecuteCommand iExecuteCommandCM_TCNTASPN_A89) {
		this.iExecuteCommandCM_TCNTASPN_A89 = iExecuteCommandCM_TCNTASPN_A89;
	}

	public void unsetiExecuteCommandCM_TCNTASPN_A89(IExecuteCommand iExecuteCommandCM_TCNTASPN_A89) {
		this.iExecuteCommandCM_TCNTASPN_A89 = iExecuteCommandCM_TCNTASPN_A89;
	}

        	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		try {
			iExecuteCommandCM_TCNTASPN_A89.executeCommand(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addExecuteCommandEvent("CM_TCNTASPN_A89", this);
	}

}

