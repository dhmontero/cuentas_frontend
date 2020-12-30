package com.cobiscorp.cobis.cntas.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class FiltroCedula {

	public static final String EN_FILTROCAD_498 = "EN_FILTROCAD_498";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "FiltroCedula";
	
	
	public static final Property<String> CEDULA = new Property<String>("cedula", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
