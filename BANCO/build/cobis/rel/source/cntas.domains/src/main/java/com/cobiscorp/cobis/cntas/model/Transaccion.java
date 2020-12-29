package com.cobiscorp.cobis.cntas.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Transaccion {

	public static final String EN_TRANSACNI_246 = "EN_TRANSACNI_246";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Transaccion";
	
	
	public static final Property<Date> FECHA = new Property<Date>("fecha", Date.class, false);
	
	public static final Property<Integer> IDTRANSACCION = new Property<Integer>("idTransaccion", Integer.class, false);
	
	public static final Property<String> TIPOTRANSACCION = new Property<String>("tipoTransaccion", String.class, false);
	
	public static final Property<String> CUENTA = new Property<String>("cuenta", String.class, false);
	
	public static final Property<String> TIPOCUENTA = new Property<String>("tipoCuenta", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
