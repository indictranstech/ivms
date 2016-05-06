// Copyright (c) 2016, New Indictrans Technologies PVT LTD and contributors
// For license information, please see license.txt

frappe.ui.form.on("Voucher", {
    refresh: function(frm) {
        // use the __islocal value of doc, to check if the doc is saved or not
        frm.set_df_property("advance_amount", "read_only", frm.doc.__islocal ? 0 : 1)
        frm.set_df_property("prepaid_amount", "read_only", frm.doc.__islocal ? 0 : 1)
    }
});

cur_frm.fields_dict.manager.get_query = function(doc){
	return {
		query:"ivms.ivms.doctype.voucher.voucher.get_manager_list"
	}
}
cur_frm.fields_dict.accounts_officer.get_query = function(doc){
	return {
		query:"ivms.ivms.doctype.voucher.voucher.get_accounts_officer_list"
	}
}
frappe.ui.form.on("Voucher","manager" ,function(frm){
	return frappe.call({
			method: "ivms.api.get_manager_name",
			args: {
				manager: frm.doc.manager,	
			},
			callback: function(r) {
				if(r.message){
					frm.set_value("manager_name", r.message);
			}	
		});
})
frappe.ui.form.on("Voucher","accounts_officer" ,function(frm){
	return frappe.call({
			method: "ivms.api.get_accounts_officer_name",
			args: {
				accounts_officer: frm.doc.accounts_officer,
			},
			callback: function(r) {
				if(r.message){
					frm.set_value("accounts_officer_name", r.message);
				}
			}
		});
})

