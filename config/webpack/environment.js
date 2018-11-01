const { environment } = require("@rails/webpacker");
const customConfig = require("./custom.js");
const typescript = require("./loaders/typescript");
const vue = require("./loaders/vue");

environment.config.merge(customConfig);
environment.loaders.append("vue", vue);
environment.loaders.append("typescript", typescript);
module.exports = environment;
