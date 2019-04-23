Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _default = (pattern) =>
  /(\[ext\])|(\[name\])|(\[path\])|(\[folder\])|(\[emoji(?::(\d+))?\])|(\[(?:([^:\]]+):)?(?:hash|contenthash)(?::([a-z]+\d*))?(?::(\d+))?\])|(\[\d+\])/.test(
    pattern
  );

exports.default = _default;
