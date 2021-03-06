chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true};
    },
    {
        urls: [
            "*://*.estadao.com.br/paywall/*",

            "*://paywall.folha.uol.com.br/*",

            "*://*.globo.com/plataforma/js/*/minificados/paywall/controla-acesso.js",

            "*://*.gazetadopovo.com.br/conta/public/js/connect_api.js*",
            "*://*.gazetadopovo.com.br/conta/going/api/paywall/*",

            "*://zh.clicrbs.com.br/it/js/paid-content-config.js*",

            "*://correio.rac.com.br/includes/js/novo_cp/fivewall.js*"
        ],
        types: ["script"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true}
    },
    {
        urls: [
            "http://dc.clicrbs.com.br/jornal-2015/jsp/paywall.jspx*"
        ],
        types: ["xmlhttprequest"]
    },
    ["blocking"]
);
