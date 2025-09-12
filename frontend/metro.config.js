// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Some users found that explicitly adding 'mjs' resolved their issue,
// though the default config should already include it.
config.resolver.sourceExts.push('mjs');

module.exports = config;