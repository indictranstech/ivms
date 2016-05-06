from __future__ import unicode_literals
import frappe

@frappe.whitelist()
def get_manager_name(manager):
	manager=frappe.get_doc("User",manager)
	return manager.full_name 

@frappe.whitelist()
def get_accounts_officer_name(accounts_officer):
	accounts_officer=frappe.get_doc("User",accounts_officer)
	return accounts_officer.full_name
