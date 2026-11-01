// [name, description, code, output]
const L = [
{n:"math",d:"Numbers, rounding, powers and constants.",f:[
["math.sqrt(x)","Square root of a number.","import math\nprint(math.sqrt(16))","4.0"],
["math.ceil(x) / math.floor(x)","Round up or down to the nearest whole number.","import math\nprint(math.ceil(4.2), math.floor(4.8))","5 4"],
["math.factorial(n)","Multiply every whole number from 1 up to n.","import math\nprint(math.factorial(5))","120"],
["math.gcd(a, b)","Greatest common divisor of two integers.","import math\nprint(math.gcd(12, 18))","6"],
["math.pi","The constant pi, plus math.e and math.inf.","import math\nprint(round(math.pi, 4))","3.1416"]]},
{n:"random",d:"Random numbers and choices.",f:[
["random.randint(a, b)","Random integer from a to b, both included.","import random\nprint(random.randint(1, 10))","7   # varies"],
["random.choice(seq)","Pick one item from a list.","import random\nprint(random.choice([\"red\", \"green\", \"blue\"]))","green   # varies"],
["random.shuffle(list)","Shuffle a list in place.","import random\nnums = [1, 2, 3, 4]\nrandom.shuffle(nums)\nprint(nums)","[3, 1, 4, 2]   # varies"],
["random.sample(seq, k)","Pick k unique items.","import random\nprint(random.sample(range(1, 50), 6))","[12, 3, 41, 27, 8, 19]   # varies"],
["random.seed(n)","Make random results repeatable.","import random\nrandom.seed(42)\nprint(random.random())","0.6394267984578837"]]},
{n:"datetime",d:"Dates, times and time differences.",f:[
["datetime.now()","Current local date and time.","from datetime import datetime\nprint(datetime.now())","2026-11-01 14:30:12.481920   # varies"],
["timedelta(days=n)","Add or subtract a span of time.","from datetime import date, timedelta\nprint(date(2026, 11, 1) + timedelta(days=30))","2026-12-01"],
["strftime(format)","Turn a date into formatted text.","from datetime import datetime\nprint(datetime(2026, 11, 1).strftime(\"%d %B %Y\"))","01 November 2026"],
["strptime(text, format)","Parse text into a datetime.","from datetime import datetime\nprint(datetime.strptime(\"2026-11-01\", \"%Y-%m-%d\"))","2026-11-01 00:00:00"]]},
{n:"os",d:"Files, folders and environment variables.",f:[
["os.getcwd()","Folder your script is running from.","import os\nprint(os.getcwd())","/home/you/project   # varies"],
["os.listdir(path)","Names of everything inside a folder.","import os\nprint(os.listdir(\".\"))","['main.py', 'data.csv']   # varies"],
["os.path.join(a, b)","Build a file path that works on any system.","import os\nprint(os.path.join(\"data\", \"file.txt\"))","data/file.txt"],
["os.path.exists(path)","Check whether a file or folder exists.","import os\nprint(os.path.exists(\"missing.txt\"))","False"],
["os.environ.get(name)","Read an environment variable safely.","import os\nprint(os.environ.get(\"HOME\", \"not set\"))","/home/you   # varies"]]},
{n:"sys",d:"Interpreter details and command-line arguments.",f:[
["sys.argv","List of command-line arguments.","import sys\n# run: python app.py hello\nprint(sys.argv)","['app.py', 'hello']"],
["sys.version","Your Python version as text.","import sys\nprint(sys.version_info[:2])","(3, 12)   # varies"],
["sys.exit(code)","Stop the program with an exit code.","import sys\nsys.exit(0)","(program ends)"]]},
{n:"json",d:"Read and write JSON data.",f:[
["json.dumps(obj)","Convert a Python object to a JSON string.","import json\nprint(json.dumps({\"name\": \"Ada\", \"age\": 36}))","{\"name\": \"Ada\", \"age\": 36}"],
["json.loads(text)","Convert a JSON string to a Python object.","import json\ndata = json.loads('{\"ok\": true}')\nprint(data[\"ok\"])","True"],
["json.dump(obj, file)","Write JSON straight to a file.","import json\nwith open(\"out.json\", \"w\") as f:\n    json.dump([1, 2, 3], f, indent=2)","(creates out.json)"],
["json.load(file)","Read JSON from a file.","import json\nwith open(\"out.json\") as f:\n    print(json.load(f))","[1, 2, 3]"]]},
{n:"re",d:"Pattern matching with regular expressions.",f:[
["re.search(pattern, text)","Find the first match anywhere in the text.","import re\nm = re.search(r\"\\d+\", \"Order 4821 shipped\")\nprint(m.group())","4821"],
["re.findall(pattern, text)","Return every match as a list.","import re\nprint(re.findall(r\"[A-Z]\\w+\", \"Ada met Linus in Oslo\"))","['Ada', 'Linus', 'Oslo']"],
["re.sub(pattern, new, text)","Replace matches with new text.","import re\nprint(re.sub(r\"\\s+\", \" \", \"too    many   spaces\"))","too many spaces"],
["re.compile(pattern)","Reuse a pattern many times.","import re\nemail = re.compile(r\"\\w+@\\w+\\.\\w+\")\nprint(bool(email.match(\"me@site.com\")))","True"]]},
{n:"collections",d:"Specialised containers beyond list and dict.",f:[
["Counter(iterable)","Count how often each item appears.","from collections import Counter\nprint(Counter(\"banana\").most_common(2))","[('a', 3), ('n', 2)]"],
["defaultdict(type)","A dict that creates missing keys for you.","from collections import defaultdict\ngroups = defaultdict(list)\ngroups[\"fruit\"].append(\"apple\")\nprint(dict(groups))","{'fruit': ['apple']}"],
["deque(iterable)","A fast queue you can grow from both ends.","from collections import deque\nq = deque([1, 2, 3])\nq.appendleft(0)\nprint(q)","deque([0, 1, 2, 3])"],
["namedtuple(name, fields)","A tuple whose items have names.","from collections import namedtuple\nPoint = namedtuple(\"Point\", \"x y\")\np = Point(3, 4)\nprint(p.x, p.y)","3 4"]]},
{n:"itertools",d:"Loops, combinations and iterator tools.",f:[
["permutations(items)","Every ordering of the items.","from itertools import permutations\nprint(list(permutations([1, 2, 3], 2)))","[(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]"],
["combinations(items, r)","Every group of r items, order ignored.","from itertools import combinations\nprint(list(combinations(\"abc\", 2)))","[('a', 'b'), ('a', 'c'), ('b', 'c')]"],
["product(a, b)","Every pairing across lists.","from itertools import product\nprint(list(product([1, 2], \"ab\")))","[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]"],
["chain(a, b)","Walk several lists as one.","from itertools import chain\nprint(list(chain([1, 2], [3, 4])))","[1, 2, 3, 4]"]]},
{n:"functools",d:"Tools for working with functions.",f:[
["reduce(func, items)","Fold a list into a single value.","from functools import reduce\nprint(reduce(lambda a, b: a * b, [1, 2, 3, 4]))","24"],
["lru_cache","Remember results so repeat calls are instant.","from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    return n if n < 2 else fib(n - 1) + fib(n - 2)\n\nprint(fib(50))","12586269025"],
["partial(func, *args)","Fix some arguments of a function ahead of time.","from functools import partial\ndouble = partial(pow, exp=2)\nprint(double(5))","25"]]},
{n:"statistics",d:"Averages and spread for number lists.",f:[
["statistics.mean(data)","The average.","import statistics\nprint(statistics.mean([2, 4, 6, 8]))","5"],
["statistics.median(data)","The middle value.","import statistics\nprint(statistics.median([1, 3, 9]))","3"],
["statistics.mode(data)","The most common value.","import statistics\nprint(statistics.mode([1, 2, 2, 3]))","2"],
["statistics.stdev(data)","How spread out the values are.","import statistics\nprint(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))","2.14"]]},
{n:"pathlib",d:"Work with file paths as objects.",f:[
["Path(path)","Create a path object and join with /.","from pathlib import Path\np = Path(\"data\") / \"notes.txt\"\nprint(p)","data/notes.txt"],
["Path.write_text / read_text","Save and load a whole text file.","from pathlib import Path\nPath(\"hi.txt\").write_text(\"hello\")\nprint(Path(\"hi.txt\").read_text())","hello"],
["Path.glob(pattern)","Find files that match a pattern.","from pathlib import Path\nprint([f.name for f in Path(\".\").glob(\"*.py\")])","['main.py']   # varies"],
["Path.suffix / stem","Split a file name into parts.","from pathlib import Path\np = Path(\"report.final.pdf\")\nprint(p.stem, p.suffix)","report.final .pdf"]]},
{n:"csv",d:"Read and write spreadsheet-style files.",f:[
["csv.writer(file)","Write rows to a CSV file.","import csv\nwith open('people.csv', 'w', newline='') as f:\n    csv.writer(f).writerows([['name', 'age'], ['Ada', 36]])","(creates people.csv)"],
["csv.reader(file)","Read a CSV file row by row.","import csv\nwith open('people.csv') as f:\n    for row in csv.reader(f):\n        print(row)","['name', 'age']\n['Ada', '36']"],
["csv.DictReader(file)","Read rows as dictionaries using the header.","import csv\nwith open('people.csv') as f:\n    print(next(csv.DictReader(f)))","{'name': 'Ada', 'age': '36'}"]]},
{n:"time",d:"Timestamps, pauses and timing code.",f:[
["time.time()","Seconds since 1 January 1970.","import time\nprint(time.time())","1793543412.5   # varies"],
["time.sleep(seconds)","Pause the program.","import time\ntime.sleep(1.5)\nprint('done')","done   # after 1.5 seconds"],
["time.perf_counter()","Measure how long code takes.","import time\nstart = time.perf_counter()\nsum(range(1_000_000))\nprint(round(time.perf_counter() - start, 3))","0.021   # varies"]]},
{n:"logging",d:"Log messages instead of using print.",f:[
["logging.basicConfig()","Set the level and format once.","import logging\nlogging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')\nlogging.info('Started')","INFO: Started"],
["logging.warning / error","Levels: debug, info, warning, error, critical.","import logging\nlogging.warning('Disk almost full')\nlogging.error('Could not save file')","WARNING:root:Disk almost full\nERROR:root:Could not save file"],
["logging.getLogger(name)","A named logger for each module.","import logging\nlog = logging.getLogger(__name__)\nlog.setLevel(logging.DEBUG)","(logger ready to use)"]]},
{n:"argparse",d:"Build command-line tools.",f:[
["ArgumentParser()","Define the options your script accepts.","import argparse\np = argparse.ArgumentParser(description='Greeter')\np.add_argument('name')\np.add_argument('--shout', action='store_true')\nargs = p.parse_args(['Ada', '--shout'])\nprint(args.name, args.shout)","Ada True"],
["add_argument(type, default)","Set the type, default and help text.","import argparse\np = argparse.ArgumentParser()\np.add_argument('--count', type=int, default=3, help='how many')\nprint(p.parse_args([]).count)","3"]]},
{n:"sqlite3",d:"A built-in database stored in one file.",f:[
["sqlite3.connect(path)","Open or create a database.","import sqlite3\ncon = sqlite3.connect(':memory:')\ncon.execute('CREATE TABLE users (name TEXT, age INT)')","(table created in memory)"],
["execute(sql, params)","Insert rows safely with ? placeholders.","import sqlite3\ncon = sqlite3.connect(':memory:')\ncon.execute('CREATE TABLE users (name TEXT, age INT)')\ncon.execute('INSERT INTO users VALUES (?, ?)', ('Ada', 36))\ncon.commit()","(row saved)"],
["fetchall()","Read all rows from a query.","import sqlite3\ncon = sqlite3.connect(':memory:')\ncon.execute('CREATE TABLE t (n INT)')\ncon.executemany('INSERT INTO t VALUES (?)', [(1,), (2,)])\nprint(con.execute('SELECT n FROM t').fetchall())","[(1,), (2,)]"]]},
{n:"typing",d:"Type hints that describe your code.",f:[
["Optional[T]","A value that may also be None.","from typing import Optional\n\ndef find(names: list[str], key: str) -> Optional[int]:\n    return names.index(key) if key in names else None\n\nprint(find(['a', 'b'], 'b'))","1"],
["int | str","A value that can be one of several types.","def show(x: int | str) -> str:\n    return str(x)\n\nprint(show(5))","5"],
["TypedDict","Type the keys of a dictionary.","from typing import TypedDict\n\nclass User(TypedDict):\n    name: str\n    age: int\n\nu: User = {'name': 'Ada', 'age': 36}\nprint(u['name'])","Ada"]]},
{n:"dataclasses",d:"Classes without the boilerplate.",f:[
["@dataclass","Generates __init__ and __repr__ for you.","from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int = 0\n\nprint(Point(3))","Point(x=3, y=0)"],
["field(default_factory)","Safe defaults for lists and dicts.","from dataclasses import dataclass, field\n\n@dataclass\nclass Team:\n    members: list = field(default_factory=list)\n\nprint(Team().members)","[]"],
["asdict(obj)","Convert an instance to a dictionary.","from dataclasses import dataclass, asdict\n\n@dataclass\nclass P:\n    x: int\n\nprint(asdict(P(1)))","{'x': 1}"]]},
{n:"shutil",d:"Copy, move and delete files and folders.",f:[
["shutil.copy(src, dst)","Copy a file.","import shutil\nshutil.copy('a.txt', 'backup.txt')","(file copied)"],
["shutil.move(src, dst)","Move or rename a file or folder.","import shutil\nshutil.move('backup.txt', 'archive/backup.txt')","(file moved)"],
["shutil.rmtree(path)","Delete a folder and everything in it.","import shutil\nshutil.rmtree('old_folder')","(folder deleted, so be careful)"]]},
{n:"subprocess",d:"Run other programs from Python.",f:[
["subprocess.run(cmd)","Run a command and capture its output.","import subprocess\nr = subprocess.run(['echo', 'hi'], capture_output=True, text=True)\nprint(r.stdout.strip(), r.returncode)","hi 0"],
["run(check=True)","Raise an error if the command fails.","import subprocess\nsubprocess.run(['ls', 'nope'], check=True)","CalledProcessError   # non-zero exit"]]},
{n:"urllib",d:"Basic web requests with no install.",f:[
["urllib.request.urlopen(url)","Fetch a web page.","from urllib.request import urlopen\nwith urlopen('https://example.com') as r:\n    print(r.status)","200"],
["urllib.parse.urlparse(url)","Split a URL into parts.","from urllib.parse import urlparse\nu = urlparse('https://site.com/a?x=1')\nprint(u.netloc, u.path)","site.com /a"],
["urllib.parse.urlencode(dict)","Build a query string.","from urllib.parse import urlencode\nprint(urlencode({'q': 'python', 'page': 2}))","q=python&page=2"]]},
{n:"string",d:"Character sets and text templates.",f:[
["string.ascii_lowercase / digits","Ready-made character sets.","import string\nprint(string.ascii_lowercase[:5], string.digits)","abcde 0123456789"],
["string.Template","Fill in $placeholders.","from string import Template\nprint(Template('Hi $name').substitute(name='Ada'))","Hi Ada"]]},
{n:"copy",d:"Shallow and deep copies.",f:[
["copy.copy(x)","Shallow copy: inner objects are shared.","import copy\na = [[1], [2]]\nb = copy.copy(a)\nb[0].append(9)\nprint(a)","[[1, 9], [2]]"],
["copy.deepcopy(x)","Deep copy: nothing is shared.","import copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nb[0].append(9)\nprint(a)","[[1], [2]]"]]},
{n:"heapq",d:"Priority queues.",f:[
["heappush / heappop","The smallest item always comes out first.","import heapq\nh = []\nfor n in [5, 1, 3]:\n    heapq.heappush(h, n)\nprint(heapq.heappop(h))","1"],
["heapq.nlargest(n, items)","The n biggest values.","import heapq\nprint(heapq.nlargest(2, [4, 9, 1, 7]))","[9, 7]"]]},
{n:"bisect",d:"Fast searching in sorted lists.",f:[
["bisect.bisect_left(list, x)","Find where x belongs in a sorted list.","import bisect\nprint(bisect.bisect_left([10, 20, 30], 25))","2"],
["bisect.insort(list, x)","Insert while keeping the list sorted.","import bisect\nnums = [10, 30]\nbisect.insort(nums, 20)\nprint(nums)","[10, 20, 30]"]]},
{n:"threading",d:"Run work in the background.",f:[
["threading.Thread","Run a function in its own thread.","import threading\nt = threading.Thread(target=print, args=('hello from thread',))\nt.start()\nt.join()","hello from thread"],
["threading.Lock","Stop threads clashing over shared data.","import threading\nlock = threading.Lock()\ncount = 0\n\ndef add():\n    global count\n    with lock:\n        count += 1\n\nadd()\nprint(count)","1"]]},
{n:"asyncio",d:"Run many waiting tasks at once.",f:[
["asyncio.run(coro)","Run an async function.","import asyncio\n\nasync def hi():\n    await asyncio.sleep(0.1)\n    return 'done'\n\nprint(asyncio.run(hi()))","done"],
["asyncio.gather(*tasks)","Run several tasks together.","import asyncio\n\nasync def job(n):\n    await asyncio.sleep(0.1)\n    return n * 2\n\nasync def main():\n    print(await asyncio.gather(job(1), job(2), job(3)))\n\nasyncio.run(main())","[2, 4, 6]"]]},
{n:"unittest",d:"Built-in testing.",f:[
["unittest.TestCase","Write and run tests.","import unittest\n\nclass T(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1 + 1, 2)\n\nif __name__ == '__main__':\n    unittest.main()","Ran 1 test ... OK"],
["assertRaises","Check that code raises an error.","import unittest\n\nclass T(unittest.TestCase):\n    def test_zero(self):\n        with self.assertRaises(ZeroDivisionError):\n            1 / 0","(test passes)"]]},
{n:"requests",p:"pip install requests",d:"Call web APIs.",f:[
["requests.get(url)","Fetch data from a URL.","import requests\nr = requests.get('https://api.github.com')\nprint(r.status_code)","200"],
["response.json()","Parse a JSON response.","import requests\ndata = requests.get('https://api.github.com').json()\nprint(type(data))","<class 'dict'>"],
["requests.post(url, json=...)","Send data to a server.","import requests\nr = requests.post('https://httpbin.org/post', json={'name': 'Ada'})\nprint(r.json()['json'])","{'name': 'Ada'}"]]},
{n:"numpy",p:"pip install numpy",d:"Fast number arrays.",f:[
["np.array(list)","Create an array and do maths on all of it.","import numpy as np\na = np.array([1, 2, 3])\nprint(a * 2)","[2 4 6]"],
["np.linspace(a, b, n)","n evenly spaced numbers.","import numpy as np\nprint(np.linspace(0, 1, 5))","[0.   0.25 0.5  0.75 1.  ]"],
["arr.reshape(rows, cols)","Change the shape of an array.","import numpy as np\nprint(np.arange(6).reshape(2, 3))","[[0 1 2]\n [3 4 5]]"],
["arr.sum(axis) / arr.mean()","Totals and averages.","import numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a.sum(axis=0), a.mean())","[4 6] 2.5"]]},
{n:"pandas",p:"pip install pandas",d:"Work with tables of data.",f:[
["pd.DataFrame(dict)","Make a table from a dictionary.","import pandas as pd\ndf = pd.DataFrame({'name': ['Ada', 'Bob'], 'age': [36, 29]})\nprint(df)","   name  age\n0   Ada   36\n1   Bob   29"],
["pd.read_csv(path)","Load a CSV file into a table.","import pandas as pd\ndf = pd.read_csv('people.csv')\nprint(df.head())","(first 5 rows)"],
["df[df['col'] > x]","Pick rows by a condition.","import pandas as pd\ndf = pd.DataFrame({'age': [36, 29, 41]})\nprint(df[df['age'] > 30])","   age\n0   36\n2   41"],
["df.groupby(col)","Summarise values by category.","import pandas as pd\ndf = pd.DataFrame({'team': ['a', 'a', 'b'], 'pts': [1, 2, 5]})\nprint(df.groupby('team')['pts'].sum())","team\na    3\nb    5\nName: pts, dtype: int64"]]},
{n:"matplotlib",p:"pip install matplotlib",d:"Charts and graphs.",f:[
["plt.plot(x, y)","Draw a line chart.","import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 9])\nplt.show()","(opens a line chart)"],
["plt.bar(names, values)","Draw a bar chart.","import matplotlib.pyplot as plt\nplt.bar(['A', 'B', 'C'], [5, 3, 8])\nplt.title('Scores')\nplt.show()","(opens a bar chart)"],
["plt.savefig(path)","Save a chart as an image.","import matplotlib.pyplot as plt\nplt.plot([1, 2, 3])\nplt.savefig('chart.png', dpi=150)","(creates chart.png)"]]},
{n:"beautifulsoup4",p:"pip install beautifulsoup4",d:"Read and scrape HTML pages.",f:[
["BeautifulSoup(html, parser)","Parse HTML into something searchable.","from bs4 import BeautifulSoup\nsoup = BeautifulSoup('<h1>Hello</h1>', 'html.parser')\nprint(soup.h1.text)","Hello"],
["soup.find_all(tag)","Find every matching tag.","from bs4 import BeautifulSoup\nsoup = BeautifulSoup('<li>One</li><li>Two</li>', 'html.parser')\nprint([li.text for li in soup.find_all('li')])","['One', 'Two']"],
["soup.select_one(css)","Find an element with a CSS selector.","from bs4 import BeautifulSoup\nsoup = BeautifulSoup('<div><p>Hi</p></div>', 'html.parser')\nprint(soup.select_one('div p').text)","Hi"]]},
{n:"flask",p:"pip install flask",d:"Build small web apps.",f:[
["@app.route(path)","A tiny web app with one page.","from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello, web!'\n\napp.run()","Running on http://127.0.0.1:5000"],
["jsonify(...)","Return JSON, with values taken from the URL.","from flask import Flask, jsonify\napp = Flask(__name__)\n\n@app.route('/user/<name>')\ndef user(name):\n    return jsonify(hello=name)","GET /user/ada returns JSON with hello set to ada"]]},
{n:"fastapi",p:"pip install fastapi uvicorn",d:"Build fast APIs with automatic docs.",f:[
["FastAPI()","An API with interactive docs built in.","from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/')\ndef root():\n    return {'message': 'hello'}\n\n# run: uvicorn main:app --reload","Docs at http://127.0.0.1:8000/docs"],
["Typed path and query values","Values are checked and converted for you.","from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/items/{item_id}')\ndef item(item_id: int, q: str = ''):\n    return {'id': item_id, 'q': q}","GET /items/5?q=hi returns id 5 and q hi"]]},
{n:"pytest",p:"pip install pytest",d:"Simple, powerful testing.",f:[
["assert in test functions","Name functions test_ and use plain assert.","# test_math.py\ndef test_add():\n    assert 1 + 1 == 2\n\n# run: pytest","1 passed"],
["@pytest.mark.parametrize","Run one test with many inputs.","import pytest\n\n@pytest.mark.parametrize('a, b', [(1, 2), (2, 4)])\ndef test_double(a, b):\n    assert a * 2 == b","2 passed"]]},
{n:"pillow",p:"pip install pillow",d:"Open, edit and save images.",f:[
["Image.open(path)","Open an image and read its size.","from PIL import Image\nimg = Image.open('photo.jpg')\nprint(img.size)","(1920, 1080)   # varies"],
["img.resize(size).save(path)","Resize and save a copy.","from PIL import Image\nimg = Image.open('photo.jpg')\nimg.resize((200, 200)).save('small.png')","(creates small.png)"]]}
];
