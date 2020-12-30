package com.cobiscorp.cobis.cntas.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class FiltroCuentaDestino {

	public static final String EN_FILTROCUE_372 = "EN_FILTROCUE_372";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "FiltroCuentaDestino";
	
	
	public static final Property<String> CUENTAD = new Property<String>("cuentaD", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
