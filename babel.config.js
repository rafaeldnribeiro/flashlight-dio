<<<<<<< HEAD
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
>>>>>>> 02b3d7b4ba6939725d9e645f791767bae9806ceb
};
