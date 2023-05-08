from Service.AzureServiceClient import AzureServiceClient
from Model.BlobStorageFile import BlobStorageFile
import os
from Utils.common import *

def updateLadderNRL(ladderBody):

    ## initialise service client and file
    connectionString = os.environ['CONNECTION_STRING']
    serviceClient = AzureServiceClient(connectionString)
    fileName = 'nrlladders.pkl'
    downloadFilePath = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'Data/nrl', "%s" % fileName)
    file = BlobStorageFile('nrlfixtures', fileName, downloadFilePath)

    ## GET/download existing ladders doc
    serviceClient.downloadFile(file)

    ladders = loadFromFile(downloadFilePath)

    ## SET corresponding round of dict to ladderBody content
    season = str(ladderBody.season)
    roundNum = str(ladderBody.roundNum)
    if season in ladders:
        ladders[season][roundNum] = ladderBody.teams
    else:
        ladders[season] = {}
        ladders[season][roundNum] = ladderBody.teams

    ## POST/upload the updated file
    saveToFile(downloadFilePath, ladders)
    serviceClient.uploadFile(file)

    return True

