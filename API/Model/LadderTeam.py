from pydantic import BaseModel

class TeamLadder(BaseModel):
    teamName: str
    rank: int
    pointsFor: int
    pointsAgainst: int   