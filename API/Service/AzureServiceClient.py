from azure.storage.blob import BlobServiceClient
from Model.BlobStorageFile import BlobStorageFile

class AzureServiceClient:

    def __init__(self, connectionString: str):
        self.client = BlobServiceClient.from_connection_string(connectionString)

    def uploadFile(self, file: BlobStorageFile):
        blobClient = self.client.get_blob_client(container=file.containerName, blob=file.fileName)

        print("\nUploading to Azure Storage as blob:\n\t" + file.fileName)
        with open(file.localFilePath, "rb") as data:
            blobClient.upload_blob(data, overwrite=True)

    def downloadFile(self, file: BlobStorageFile):
        blobClient = self.client.get_blob_client(container=file.containerName, blob=file.fileName)

        print("\nDownloading blob to \n\t" + file.localFilePath)
        with open(file.localFilePath, "wb") as downloadFile:
            downloadFile.write(blobClient.download_blob().readall())