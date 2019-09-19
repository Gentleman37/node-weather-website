const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/e5c2e6d311a7e93bc77a6be7c37b1350/" +
    latitude +
    "," +
    longitude +
    "?lang=ko&units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather servie!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ". 최고기온 " +
          body.daily.data[0].temperatureHigh +
          "°C, 최저기온 " +
          body.daily.data[0].temperatureLow +
          "°C, 강수확률 " +
          body.daily.data[0].precipProbability * 100 +
          "%"
      );
    }
  });
};

module.exports = forecast;
