# -*- coding: utf-8 -*-
# Copyright (c) 2015, New Indictrans Technologies PVT LTD and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Voucher(Document):
	pass

#  added by arpit for agent can see his data only
# def get_permission_query_conditions(user):
# 	if not user: user = frappe.session.user
# 	if not user == "Administrator":
# 	return """(`tabAgent`.user = '{0}')""".format(user)
# # end of code
