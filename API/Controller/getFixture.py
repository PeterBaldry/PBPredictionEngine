from Service.AzureServiceClient import AzureServiceClient
from Model.BlobStorageFile import BlobStorageFile
import os
from Utils.common import *

def getFixtureNRL(season, roundNum=None):

    ## initialise service client and file
    connectionString = os.environ['CONNECTION_STRING']
    serviceClient = AzureServiceClient(connectionString)
    fileName = 'nrlfixtures.pkl'
    downloadFilePath = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Data/nrl', "%s" % fileName)
    file = BlobStorageFile('nrlfixtures', fileName, downloadFilePath)

    ## GET/download existing ladders doc
    serviceClient.downloadFile(file)

    fixtures = loadFromFile(downloadFilePath)

    seasonStr = str(season)
    roundStr = str(roundNum)

    if seasonStr in fixtures:
        season = fixtures[seasonStr]
        if not roundNum:
            return season
        else:
            if roundStr in season:
                return season[roundStr]
            else:
                return False
    
    return fixtures