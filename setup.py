# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
from pip.req import parse_requirements

version = '0.0.1'
requirements = parse_requirements("requirements.txt", session="")

setup(
	name='ivms',
	version=version,
	description='E voucher System for New Indictrans Technologies PVT LTD ',
	author='New Indictrans Technologies PVT LTD',
	author_email='ravindra.l@indictranstech.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=[str(ir.req) for ir in requirements],
	dependency_links=[str(ir._link) for ir in requirements if ir._link]
)
