module.exports = {
  "globalExtends": ["github>jnewland/.github"],
  "logLevel": "debug",
  "onboarding": true,
  "requireConfig": false,
  "printConfig": true,
  "repositories": [],
  "allowedPostUpgradeCommands": [
    "./script/sync-components",
    "make"
  ],
}
