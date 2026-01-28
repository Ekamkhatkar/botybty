/**
 * Configuration settings for the Razor bot.
 * 
 * This file contains essential settings for bot functionality, 
 * including command prefixes, channel IDs, and API keys.
 * Ensure to fill in the required fields before deploying the bot.
 */
const config = {
  // Color for embedded bot messages
  embed: "#ff7000",
  // Command prefix for bot commands
  prefix: "?",
  // Channel ID for logging errors (Development Server)
  logchannel: "1364463099750649951",
  // Channel ID for reporting bugs (Development Server)
  bugreport: "1364463099750649951",
  // Channel ID for user feedback (Development Server)
  feedback: "1364463099750649951",
  // Channel ID for receiving bot suggestions (Development Server)
  botsuggestions: "1364463099750649951",
  // Your Discord User ID for development purposes
  developerid: "1353944263204798515",
  // Your Discord Bot ID for API interactions
  clientID: "1365982815744954368",
  // API key for image generation (Obtain from https://discord.gg/QprAy5WWWQ)
  imagegenapi: "",
  // API key for Gemini services (Obtain from https://ai.google.dev/)
  gemini_api: "",

  // Spotify API credentials
  // Obtain your Spotify Client ID and Client Secret from the Spotify Developer Portal: 
  // https://developer.spotify.com/dashboard/
  SpotifyClientID: "",
  SpotifyClientSecret: "",

// Lavalink server configuration
  lavalink: {
    name: `Razor Node`,
    url: `88.99.215.154:3012`,
    auth: "discord.gg/W2GheK3F9m",
    secure: false,
  },
  // Emojis for queue status
  emojis: {
    green: "<a:orange:1367019000638214285>",
    orange: "<a:orange:1367019000638214285>",
    red: "<a:red:1367019021081251873>"
  },
};

module.exports = config;