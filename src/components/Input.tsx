import { StyleSheet, TextInput, TextInputProps } from "react-native"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import React from "react"

type Props = {} & TextInputProps

export const Input = ({ ...rest }: Props) => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <TextInput
      style={[
        styles.input, {
          borderRadius: theme.borderRadius.default,
          backgroundColor: theme.background,
          padding: theme.spacing.lg,
        }
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  input: {}
})