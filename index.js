const { getOptions } = require("loader-utils");
const { words } = require("lodash");

module.exports = function (source, map, meta) {
  const options = getOptions(this);
  const speed = options && options.speed ? options.speed : 230;

  const callback = this.async();

  const text = meta.text;

  const count = words(text).length;
  const timeToRead = Math.round(count / speed) || 1;

  const attributes = {
    ...meta.attributes,
    timeToRead,
  };

  const newMeta = {
    ...meta,
    text,
    attributes,
  };
  callback(null, source, map, newMeta);
};
