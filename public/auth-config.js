// Cognito configuration
const authConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_HBR3XpaTX',
    userPoolWebClientId: 'o3p0n43e4s8c66medioapfkq5',
    oauth: {
      domain: 'us-east-1yeflr48wo.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'profile', 'openid'],
      redirectSignIn: window.location.origin,
      redirectSignOut: window.location.origin,
      responseType: 'code'
    }
  }
};

// Make it available globally
window.authConfig = authConfig;
