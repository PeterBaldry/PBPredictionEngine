from pydantic import BaseModel

class Ladder(BaseModel):
    season: int
    roundNum: int
    teams: dict