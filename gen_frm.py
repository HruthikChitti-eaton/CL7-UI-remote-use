from shutil import copy as copy_file
from subprocess import run 
from os import chdir 

src_file = 'C:/Git/Hruthik_HMI_automtion/psd-fw-ngc/Regulator/CL7/Code/Main/CL7'
working_dir = 'C:/CL7_CreateFirmwareBuild'
dest_file = 'CL7'
bat_file_path = 'CreateDevSignedFRM_AllInOneStep.bat'

frm_path = 'C:\CL7_CreateFirmwareBuild\FirmwareBuild\DevRelease\CL7_BL1.0.2_BU1.1.4_FPGA1.0.0_DEVSIGNEDFW2.7.347_2022_08_11.frm'
pdrive_path = 'D:\CL7_BL1.0.2_BU1.1.4_FPGA1.0.0_DEVSIGNEDFW2.7.347_2022_08_11.frm'

chdir(working_dir)
copy_file(src_file, dest_file)
run(bat_file_path, shell=True)
while (True) :
    try :
        copy_file(frm_path, pdrive_path)
        break
    except Exception as e :
        print("EXCEPTION :",e)
        input("PRESS ENTER TO TRY AGAIN : ")
print("!!! SUCCESS !!!")
