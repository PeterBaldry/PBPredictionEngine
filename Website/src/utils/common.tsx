

export function getShortTeamName(fullTeamName: string): string {
    if (fullTeamName.includes("Sea Eagles")) {
        return "Sea Eagles"
    }
    const teamNames = fullTeamName.split(" ");
    return teamNames[teamNames.length-1];
}

export function getWinPercentFromString(winTeamPercent: string): number {
    const teamNames = winTeamPercent.split(" ");
    const winPercent = teamNames[teamNames.length-1].replace(')', '').replace('(', '').replace('%', '');
    return parseInt(winPercent);
}