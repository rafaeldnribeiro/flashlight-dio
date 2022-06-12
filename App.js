import React, { useEffect, useState } from "react";

import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";

const App = () => {
  const [toggle, setToogle] = useState(false);

  const imagelightON = require("./assets/icons/eco-light.png");
  const imagelightOff = require("./assets/icons/eco-light-off.png");
  const logoDioWhite = require("./assets/icons/logo-dio-white.png");
  const logoDio = require("./assets/icons/logo-dio.png");

  const handleChangeToggle = () => setToogle((oldToggle) => !oldToggle);

  useEffect(() => {
    // Liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    /**
     * Quando o celular for chacoalhado, mudaremos o toogle
     */
    const subscription = RNShake.addListener(() => {
      setToogle((oldToggle) => !oldToggle);
    });

    //Essa func vai ser chamada quando o components
    //For ser desmontado

    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={toggle ? imagelightON : imagelightOff}
        />
        <Image style={style.dioLogo} source={toggle ? logoDio : logoDioWhite} />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 250,
    height: 250,
  },
});
