import { React, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import ResultImc from "../resultImc/resultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        ></TextInput>

        <Text style={styles.text}>Peso</Text>
        <TextInput
        style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 78.674"
          keyboardType="numeric"
        ></TextInput>
          <TouchableOpacity style={styles.button} onPress={validationImc}>
          <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    backgroundColor: "#d6d6d671",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 900,
  },
  input: {
    height: 40,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10,
    paddingLeft: 10,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffd900ff",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
