package com.cobiscorp.cobis.cntas.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Cuenta {

	public static final String EN_2DWTFTYSE_998 = "EN_2DWTFTYSE_998";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Cuenta";
	
	
	public static final Property<String> TIPOCUENTA = new Property<String>("tipoCuenta", String.class, false);
	
	public static final Property<String> FECHACREACION = new Property<String>("fechaCreacion", String.class, false);
	
	public static final Property<String> SALDO = new Property<String>("saldo", String.class, false);
	
	public static final Property<String> BANCO = new Property<String>("banco", String.class, false);
	
	public static final Property<String> FECHAMODIFICACION = new Property<String>("fechaModificacion", String.class, false);
	
	public static final Property<String> CLIENTE = new Property<String>("cliente", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
