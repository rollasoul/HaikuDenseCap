import urllib.parse
import urllib.request

url = 'http://www.cs.toronto.edu/~graves/handwriting.cgi'
values = {'text' : 'hello me is a cat'}

data = urllib.parse.urlencode(values)
data = data.encode('ascii') # data should be bytes
req = urllib.request.Request(url, data)
with urllib.request.urlopen(req) as response:
   the_page = response.read()