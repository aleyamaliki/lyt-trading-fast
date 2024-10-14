
const requiredEnv = (key, defaultValue = undefined) => {
    const value = process.env[key] || defaultValue;
    if (value === undefined) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
};

const SystemConfig = {
    apiBaseUrl: requiredEnv('REACT_APP_API_BASE_URL', 'https://data.solanatracker.io'),
    apiKey: requiredEnv('REACT_APP_API_KEY', ''),
    environment: process.env.NODE_ENV || 'development',
    appName: process.env.REACT_APP_APP_NAME || 'YeetBot',
    debugMode: process.env.REACT_APP_DEBUG_MODE === 'true',
};
  
export default SystemConfig;