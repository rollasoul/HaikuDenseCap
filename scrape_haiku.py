import requests, bs4
import webbrowser

payload = {'text': 'wall behind the man', 'style': '', 'bias': '0', 'samples': '1'}
res = requests.get('http://www.cs.toronto.edu/~graves/handwriting.cgi', params=payload)
print (res.url)

#res = requests.get('http://www.cs.toronto.edu/~graves/handwriting.cgi?text=hello+me+is+the+bot&style=&bias=0.15&samples=3')
res.raise_for_status()
noStarchSoup = bs4.BeautifulSoup(res.text)
type(noStarchSoup)

allimages = []

for imgtag in noStarchSoup.find_all('img'):
     print(imgtag['src'])
     allimages.append(imgtag['src'][6]

#webbrowser.open('src')