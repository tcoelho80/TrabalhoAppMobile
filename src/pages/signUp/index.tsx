import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from "react-native";

import MyTextInput from '../../components/mytext';
import { snService } from '../../services/sn.service';
import { TypeRoutes } from '../../routes';

import styles from './styles';
import { User } from '../../entities';

export default function SignUp() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();

    React.useEffect(() => {
        navigation.setOptions({ title: 'Novo Usuário' });
    }, []);

    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [userPassword, setPassword] = React.useState('');
    const [confirmar, setConfirmar] = React.useState('');
    

    async function save() {
        if (!name || !address || !age || !email || !userPassword || !confirmar) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
        if (userPassword !== confirmar) {
            alert('A senha não confere!');
            return;
        }
        
        const user: User = {
            address,
            age,
            email: email.toLowerCase(),
            name,
            userPassword
        };
        
        const savedUser = await snService.createUser(user);
        try {
            if (savedUser != null){
                navigation.goBack();     
            }else{
                alert('Usuário já cadastrado!');
            }
            
        } catch (error) {
            console.error('Erro ao criar um novo usuário: ', error);
            alert('Ocorreu um erro não esperado!');
        }
        
    }

    async function convertNumber(params:string) {
      setAge(Number(params))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadstro de Usuários</Text>

            <MyTextInput title="Address:" value={address} onChangeText={setAddress} />

            <MyTextInput title="Age:" value={age.toString()} onChangeText={convertNumber} />

            <MyTextInput title="Name:" value={name} onChangeText={setName} />
            
            <MyTextInput title="Email:" value={email} onChangeText={setEmail} />

            <MyTextInput title="Password:" value={userPassword} onChangeText={setPassword} secureTextEntry />
            <MyTextInput title="Confirm Password:" value={confirmar} onChangeText={setConfirmar} secureTextEntry />

            <Button title="Cadastrar" onPress={save} />
        </View>
    );
}