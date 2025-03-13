window.AuthService = {
    userPoolId: 'us-east-1_HBR3XpaTX',
    clientId: '4k39avg5kbhk68r58crojnap0e',
    cognitoRegion: 'us-east-1',
    cognitoUser: null,

    async init() {
        console.log("Auth service initialized.");
    },

    async getCurrentUser() {
        return fetch('/api/user')
            .then(response => {
                if (!response.ok) throw new Error('User not logged in');
                return response.json();
            });
    },

    async signOut() {
        return fetch('/api/logout').then(response => {
            if (!response.ok) throw new Error('Logout failed');
        });
    }
};
