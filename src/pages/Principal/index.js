import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Image, View, ButtonContainer } from "./styles";
import { Text } from "react-native";
import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Principal() {
  return (
    <>
       <StatusBar style="theme-dark" />
       <SafeAreaView>
         <Text>Principal</Text>
       </SafeAreaView>   
    </>      
  );
}

