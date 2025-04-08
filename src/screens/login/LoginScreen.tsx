import React from 'react';
import {Image, StyleSheet} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";

import {ErrorMessage, Screen} from "../../components/utils";
import AppTextInput from "../../components/text";
import AppButton from "../../components/buttons";


interface LoginScreenProps {
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")

})

function LoginScreen({}: LoginScreenProps) {
    return (
        <Screen style={{marginHorizontal: 10}}>
            <Image
                style={styles.logo}
                source={require('../../../assets/Wix-Logo-PNG2.png')}
            />

            <Formik initialValues={{email: '', password: ''}}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        {/*        <AppFormField icon={'email'}
                                      name={'email'}
                                      placeholder={"Email"}
                                      autoCapitalize={"none"}
                                      autoCorrect={false}
                                      keyboardType={"email-address"}
                                      textContentType={"emailAddress"}
                        />*/} //TODO: Failed to make it work.
                        <AppTextInput icon={'email'}
                                      placeholder={"Email"}
                                      autoCapitalize={"none"}
                                      autoCorrect={false}
                                      keyboardType={"email-address"}
                                      textContentType={"emailAddress"}
                                      onChangeText={handleChange("email")}
                                      onBlur={() => setFieldTouched("email")}
                        />
                        <ErrorMessage error={errors.email} visible={touched.email}></ErrorMessage>*/
                        <AppTextInput icon={'lock'}
                                      placeholder={"Password"}
                                      autoCapitalize={"none"}
                                      autoCorrect={false}
                                      keyboardType={"default"}
                                      textContentType={"password"}
                                      secureTextEntry={true}
                                      onChangeText={handleChange("password")}
                                      onBlur={() => setFieldTouched("password")}
                        />
                        <ErrorMessage error={errors.password} visible={touched.password}></ErrorMessage>
                        <AppButton title={"Login"} onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 80,
        width: 140,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;