import cv2
import os
import subprocess

# capture image from webcam, change directory to (densecap)pics folder, write image to folder
vidcap = cv2.VideoCapture()
vidcap.open(0)
retval, image = vidcap.retrieve()
vidcap.release()

face_file_name = "haikucam.jpg"
os.chdir('/Users/rollasoul/densecap/imgs/pics')
cv2.imwrite(face_file_name, image)

# start densecap neural network to generate captions (and write them in json-file)
os.chdir('/Users/rollasoul/densecap')
subprocess.call('th run_model.lua -input_dir /Users/rollasoul/densecap/imgs/pics -gpu -1', shell=True)