from Service.AzureServiceClient import AzureServiceClient
from Model.BlobStorageFile import BlobStorageFile
import os
from Utils.common import *

def updateFixtureNRL(roundBody):

    ## initialise service client and file
    connectionString = os.environ['CONNECTION_STRING']
    serviceClient = AzureServiceClient(connectionString)
    fileName = 'nrlfixtures.pkl'
    downloadFilePath = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Data/nrl', "%s" % fileName)
    file = BlobStorageFile('nrlfixtures', fileName, downloadFilePath)

    ## GET/download existing ladders doc
    serviceClient.downloadFile(file)

    fixtures = loadFromFile(downloadFilePath)

    ## SET corresponding round of dict to ladderBody content
    season = str(roundBody.season)
    roundNum = str(roundBody.roundNum)
    if season in fixtures:
        fixtures[season][roundNum] = roundBody.matches
    else:
        fixtures[season] = {}
        fixtures[season][roundNum] = roundBody.matches

    ## POST/upload the updated file
    saveToFile(downloadFilePath, fixtures)
    serviceClient.uploadFile(file)

    return True