
function getNRLFixtures() {
    return fetch("http://localhost:8000/nrl").then(function(response) {
        return response.json();
    });
}

export default getNRLFixtures;