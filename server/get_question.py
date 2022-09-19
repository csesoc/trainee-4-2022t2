import json

def get_question(difficulty):
    f = open('dataStore.json')
    data = json.load(f)
    if (difficulty == "easy"):
        return data['questions']['easy'][0] 
    elif (difficulty == "medium"):
        return data['questions']['medium'][0]
    else:
        return data['questions']['hard'][0]
    