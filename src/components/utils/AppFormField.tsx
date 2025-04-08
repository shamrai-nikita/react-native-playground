import React from 'react';
import {StyleSheet} from "react-native";
import {useFormikContext} from "formik";

import AppTextInput from "../text";
import {AppTextInputProps} from "../text/AppTextInput";
import ErrorMessage from "./ErrorMessage";

//TODO: Failed to make it work.
/*
interface AppFormFieldProps<T> extends AppTextInputProps {
    name: keyof T & string;
}

function AppFormField<T>({name, ...otherProps}: AppFormFieldProps<T>) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext<T>();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange}
                onBlur={() => setFieldTouched}
                {...otherProps}
            />
            <ErrorMessage error={errors[name] as string | undefined} visible={touched[name] as boolean}/>
        </>
    );
}

const styles = StyleSheet.create({})

export default AppFormField;*/
