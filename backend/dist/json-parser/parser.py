import csv
import json


with open('2018.csv', newline='') as csvfile:
    # out = {}
    # out['data'] = []
    reader = csv.DictReader(csvfile, delimiter=',', fieldnames=("id", "status", "issueDate", "warehouse", "client", "city", "net", "gross"))
    jsonObj = json.dumps([row for row in reader])
    # out['data'] = eval(jsonObj)

    with open('db.js', 'w') as outfile:
        outfile.write("export const invoices = ")
        json.dump(eval(jsonObj), outfile)
