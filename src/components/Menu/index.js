import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Toast from "react-native-simple-toast"

import {
    Avatar, 
    TipoRecompensa,
    ContenedorMenu,
    DivisorMenu, 
    EsquerdaDaMesmaLinha,
    Espacador
} from "../../assets/styles";
import avatar from "../../assets/imgs/avatar.png";
import { LoginOptionsMenu } from "../../components/Login";
import empresasEstatica from "../../assets/dicionarios/recompensas.json";

export default class Menu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            atualizar: true, 
            filtrar: props.filtragem
        }
    }

    mostrarEmpresa = (empresa) => {
        const { filtrar } = this.state;

        return(
            <TouchableOpacity onPress={() => {
                filtrar(empresa);
            }}>
                <DivisorMenu />
                <EsquerdaDaMesmaLinha>
                    <Avatar source={avatar} />
                    <TipoRecompensa>{empresa.name}</TipoRecompensa>
                </EsquerdaDaMesmaLinha>
            </TouchableOpacity>
        );
    }

    onLogin = (usuario) => {
        this.setState({
            atualizar: true
        }, () => {
            Toast.show("Você foi logado com sucesso com sua conta " + usuario.signer,
            Toast.LONG);
        })
    }

    onLogout = (signer) => {
        this.setState({
            atualizar: true
        }, () => {
            Toast.show("Você foi deslogado com sucesso de sua conta " + signer);
        })
    }

    render = () => {
        const empresas = empresasEstatica.empresas;

        return(
            <SafeAreaInsetsContext.Consumer>
                {insets => 
                    <ScrollView style={{ paddingTop: insets.top }}>
                        <LoginOptionsMenu onLogin={ this.onLogin } onLogout={ this.onLogout }/>
                        <ContenedorMenu>
                            {empresas.map((empresa) => this.mostrarEmpresa(empresa))}
                        </ContenedorMenu>
                    </ScrollView>
                }
            </SafeAreaInsetsContext.Consumer>
        );
    }

}