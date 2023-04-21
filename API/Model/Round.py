from pydantic import BaseModel

class Round(BaseModel):
    season: int
    roundNum: int
    matches: list