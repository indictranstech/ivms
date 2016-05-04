// Copyright (c) 2016, New Indictrans Technologies PVT LTD and contributors
// For license information, please see license.txt

frappe.ui.form.on("Voucher", {
    refresh: function(frm) {
        // use the __islocal value of doc, to check if the doc is saved or not
        frm.set_df_property("advance_amount", "read_only", frm.doc.__islocal ? 0 : 1)
        frm.set_df_property("prepaid_amount", "read_only", frm.doc.__islocal ? 0 : 1)
    }
});
