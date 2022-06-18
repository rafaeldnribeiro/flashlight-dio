<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);
=======
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
>>>>>>> 02b3d7b4ba6939725d9e645f791767bae9806ceb

  useEffect(() => {
    // Liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    /**
<<<<<<< HEAD
     * Quando o celular for chacoalhado, mudaremos o toggle
     */
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    // Essa func vai ser chamada quando o componets
    // For ser desmontado
=======
     * Quando o celular for chacoalhado, mudaremos o toogle
     */
    const subscription = RNShake.addListener(() => {
      setToogle((oldToggle) => !oldToggle);
    });

    //Essa func vai ser chamada quando o components
    //For ser desmontado

>>>>>>> 02b3d7b4ba6939725d9e645f791767bae9806ceb
    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
<<<<<<< HEAD
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={style.dioLogo}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
=======
          source={toggle ? imagelightON : imagelightOff}
        />
        <Image style={style.dioLogo} source={toggle ? logoDio : logoDioWhite} />
>>>>>>> 02b3d7b4ba6939725d9e645f791767bae9806ceb
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
=======
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
>>>>>>> 02b3d7b4ba6939725d9e645f791767bae9806ceb
    width: 150,
    height: 150,
  },
  lightingOff: {
<<<<<<< HEAD
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
=======
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
>>>>>>> 02b3d7b4ba6939725d9e645f791767bae9806ceb
    width: 150,
    height: 150,
  },
  dioLogo: {
<<<<<<< HEAD
    resizeMode: 'contain',
    alignSelf: 'center',
=======
    resizeMode: "contain",
    alignSelf: "center",
>>>>>>> 02b3d7b4ba6939725d9e645f791767bae9806ceb
    width: 250,
    height: 250,
  },
});
