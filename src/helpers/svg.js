module.exports = function (name, width, height) {
  return `<svg class="svg-icon ${name}Icon" width="${width}" height="${height}"><use xlink:href="/assets/svg/sprite.svg#${name}"></use></svg>`;
};
