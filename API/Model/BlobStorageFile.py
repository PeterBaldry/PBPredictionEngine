class BlobStorageFile:

    def __init__(self, containerName: str, fileName: str, localFilePath: str):
        self.containerName = containerName
        self.fileName = fileName
        self.localFilePath = localFilePath