const { ConfigSchema } = require("../schema/config.schema");
const appConfig = require("./config");

class Config {
  #config;

  constructor(config) {
    this.#config = config;
    this.#validate();
  }

  #validate() {
    const { value, error } = ConfigSchema.validate(this.#config);

    if (error) {
      throw new Error(`ValidationError: ${error.message}`);
    }

    this.#config = value;
  }

  get(key) {
    return key ? this.#config[key] : this.#config;
  }
}

exports.config = new Config(appConfig);
