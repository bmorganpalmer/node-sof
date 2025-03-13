window.AuthService = {
    userPoolId: 'us-east-1_HBR3XpaTX',
    clientId: '4k39avg5kbhk68r58crojnap0e',
    cognitoRegion: 'us-east-1',
    cognitoUser: null,

    async init() {
        console.log("Auth service initialized.");
    },

    async getCurrentUser() {
        return new Promise((resolve, reject) => {
            const user = localStorage.getItem('cognitoUser'); // Simulating session storage
            if (user) {
                resolve(JSON.parse(user)); 
            } else {
                reject('User is not logged in');
            }
        });
    },

    async signOut() {
        return new Promise((resolve) => {
            localStorage.removeItem('cognitoUser'); // Simulating logout
            resolve();
        });
    }
};
