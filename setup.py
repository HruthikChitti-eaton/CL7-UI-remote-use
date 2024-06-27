from setuptools import find_packages, setup

setup(
    name='CL7_Auto',
    packages=find_packages(include=['CL7_auto', 'CL7_auto/static', 'CL7_auto/templates'], exclude=['CL7_auto/__pycache__']),
    version='0.0.1',
    description=
"""
Author  : Hruthik Chitti (Intern 14-5-24 (doj))
Company : Eaton (EEIC Pune)
""",
    author='Hruthik Chitti',
    install_requires = ['pyserial','flask','flask_socketio'],

)