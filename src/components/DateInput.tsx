import React, { useState} from "react";
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { appTheme } from "../themes/appTheme";

interface Props {
  iconName: keyof typeof FontAwesome.glyphMap;
  onChange: (date: Date | null) => void;
}
export const  DateInput = ({ iconName, onChange } : Props) => {

  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  
  const handleDateChange = ( event: DateTimePickerEvent, selectedDate?: Date | null) => {
    if (selectedDate) {
      setDate(selectedDate);
      onChange(selectedDate);
    }
    setShowPicker(false);
  };

  return (
    <TouchableOpacity
    style={{
      ...appTheme.inputContainer,
    }}
    onPress={() => setShowPicker(!showPicker)}
    >
            {
        showPicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
          />
        )
      }
      <LinearGradient
        colors={['#ffffff', '#3b5998']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
        style={appTheme.inputGradient}
      />
      <FontAwesome
        style={appTheme.icon}
        name={iconName}
        size={20}
        color='white'
      />
      <Text 
      style={{
        ...appTheme.gradientInput,
        textAlignVertical:'center'
      }}
      >
        {
          date ? date.toLocaleDateString() : 'Fecha de nacimiento' 
        }
      </Text>
    </TouchableOpacity>
  );
}