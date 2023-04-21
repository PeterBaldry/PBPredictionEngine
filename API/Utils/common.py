import pickle

def loadFromFile(filePath):
    with open(filePath, 'rb') as f:
        return pickle.load(f)

def saveToFile(filePath, dictionary):
    with open(filePath, 'wb+') as f:
        pickle.dump(dictionary, f, protocol=4)