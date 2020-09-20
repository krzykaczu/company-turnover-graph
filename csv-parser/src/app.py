from flask import Flask
import csv
import json

server = Flask(__name__)

@server.route("/")
def parser():
    with open('2018.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=',', fieldnames=("id", "status", "issueDate", "warehouse", "client", "city", "net", "gross"))
        jsonObj = json.dumps([row for row in reader])
        return json.dumps(eval(jsonObj))

if __name__ == "__main__":
   server.run(host='0.0.0.0')