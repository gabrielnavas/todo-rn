import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import React from "react"

type Props = {
  text?: string
  icon?: React.JSX.Element
} & TouchableOpacityProps

export const Button = ({ text, icon, ...rest }: Props) => {

  const { theme } = React.useContext(ThemeContext) as ThemeContextType

  return (
    <TouchableOpacity
      style={[
        styles.container, {
        backgroundColor: theme.background
      }]}
      {...rest}>
      {text && (
        <Text style={[
          styles.text,
        ]}>{text}</Text>
      )}
      {icon && (
        icon
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  }
})