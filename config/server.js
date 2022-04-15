module.exports = ({ env }) => ({
  host: env("https://pauline-gorlier.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
