import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput, View } from "react-native";
import Button from "./Button";

const UserInput = ({
  inputStyle,
  placeholder,
  secureTextEntry,
  control,
  name,
}) => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className={`${inputStyle} `}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
          />
        )}
        name={name}
      />
    </View>
  );
};

export default UserInput;