(function(window) {
  window["env"] = window["env"] || {};

  // BackEnd Environment variables
  window["env"]["fineractApiUrls"] = 'https://api.vuna.io';
  window["env"]["fineractApiUrl"] = 'https://api.vuna.io';

  window["env"]["apiProvider"] = '';
  window["env"]["apiVersion"]  = '';

  window["env"]["fineractPlatformTenantId"] = 'default';
  window["env"]["fineractPlatformTenantIds"] = 'default';

  // Language Environment variables
  window["env"]["defaultLanguage"] = '';
  window["env"]["supportedLanguages"] = '';

  window['env']['preloadClients'] = '';

  // Char delimiter to Export CSV options: ',' ';' '|' ' '
  window['env']['defaultCharDelimiter'] = '';

  // Display or not the BackEnd Info
  window['env']['displayBackEndInfo'] = '';

  // Time in seconds for Notifications, default 60 seconds
  window['env']['waitTimeForNotifications'] = '';

  // Time in seconds for COB Catch-Up, default 30 seconds
  window['env']['waitTimeForCOBCatchUp'] = '';
})(this);
