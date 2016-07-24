import requests, bs4
import webbrowser
import base64
import shutil
from urlparse import urljoin

payload = {'text': '', 'style': '../data/trainset_diff_no_start_all_labels.nc,1082+554', 'bias': '0.45', 'samples': '1'}
test = "the dog"
payload['text'] = test
print payload
res = requests.get('http://www.cs.toronto.edu/~graves/handwriting.cgi', params=payload)
print (res.url)

res.raise_for_status()
noStarchSoup = bs4.BeautifulSoup(res.text)
type(noStarchSoup)

allimages = []

for imgtag in noStarchSoup.find_all('img'):
     #print(imgtag['src'])
	allimages.append(imgtag['src'])

allimages = allimages[6]
nuallimages = []

for i in range (23, len(allimages)):
	nuallimages.append(allimages[i])

nuallimages = ''.join(nuallimages)

print nuallimages

fh = open("imageToSave.png", "wb")
fh.write(nuallimages.decode('base64'))
fh.close()

#webbrowser.open(nuallimages)