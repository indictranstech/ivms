// Copyright (c) 2016, New Indictrans Technologies PVT LTD and contributors
// For license information, please see license.txt

frappe.ui.form.on('Voucher', {
	refresh: function(frm) {
		

	}
});
frappe.ui.form.on("Voucher", "itemised_expenses_add", function(frm,cdt,cdn){
	total=0
        d=locals[cdt][cdn]
        for (var i in d.cost)
        {
        	total=total+i


         }
         frm.set_value("gross_amount",total)
         refresh_field("gross_amount")



});
