import json

def get_question():
    f = open('dataStore.json')
    data = json.load(f)
    return data['questions']['easy'][0]