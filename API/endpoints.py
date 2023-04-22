from fastapi import FastAPI, HTTPException
from Controller.getFixture import getFixtureNRL
from Controller.updateLadder import updateLadderNRL
from Controller.updateFixture import updateFixtureNRL
from Model.Ladder import Ladder
from Model.Round import Round
import uvicorn

app = FastAPI()

@app.get("/health")
def health():
    return {
        "CurrentHealth": "Healthy"
    }

@app.get("/{sport}/upcoming")
def upcomingMatches(sport: str = "nrl", numMatches: int = 10):
    #TODO: Currently mocked. Needs integration with DB
    if (numMatches > 10):
        return {
            "Message": "Too many matches"
        }
    else:
        return {
            "seasons": {
                "2023": {
                    "1": [
                        {
                            "team1": "Brisbane Broncos",
                            "team2": "Gold Coast Titans"
                        }
                    ]
                }
            }
        }

@app.put("/{sport}/ladder")
def updateLadder(ladderBody: Ladder, sport: str = "nrl"):
    
    try:
        updateLadderNRL(ladderBody)
    except:
        raise HTTPException(status_code=500, detail="Update failed")

    return {}

@app.put("/{sport}/fixture")
def updateFixture(fixtureBody: Round, sport: str = "nrl"):
    
    try:
        updateFixtureNRL(fixtureBody)
    except:
        raise HTTPException(status_code=500, detail="Update failed")

    return {}

@app.get("/{sport}")
def fixtures(sport: str = "nrl", season: int = None, roundNum: int = None):
    try:
        return getFixtureNRL(season, roundNum)
    except:
        raise HTTPException(status_code=500, detail="Fixture retrieval failed")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)