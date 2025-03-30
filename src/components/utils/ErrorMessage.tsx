import React from 'react';
import {StyleSheet, Platform, SafeAreaView, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from "../appText";
import {FormikErrors} from "formik";

interface ErrorMessageProps {
    error?: string;
    visible?: boolean;
}

function ErrorMessage({error, visible}: ErrorMessageProps) {
    if (!visible || !error) return null;

    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    }
})

export default ErrorMessage;