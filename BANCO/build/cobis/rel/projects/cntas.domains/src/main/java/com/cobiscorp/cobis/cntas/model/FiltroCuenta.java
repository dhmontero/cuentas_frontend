package com.cobiscorp.cobis.cntas.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class FiltroCuenta {

	public static final String EN_FILTROCNE_587 = "EN_FILTROCNE_587";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "FiltroCuenta";
	
	
	public static final Property<String> CUENTA = new Property<String>("cuenta", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
