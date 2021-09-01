import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardImage, CardContent } from 'react-native-cards';
import Icon from 'react-native-vector-icons/AntDesign';

import {
    Avatar,
    TipoRecompensa,
    NomeProduto,
    DescricaoProduto, 
    EsquerdaDaMesmaLinha, 
    PrecoProduto,
    PontoProduto,
    Likes 
} from '../../assets/styles';
import avatar from "../../assets/imgs/avatar.png";
import produto from "../../assets/imgs/dragonic.png";

export default class FeedCard extends React.Component {

    constructor(props) { 
        super(props);

        this.state = {
            feed: this.props.feed,
            navegador: this.props.navegador
        }
    }

    render = () => {
        const { feed, navegador } = this.state;

        return (
            <TouchableOpacity onPress={
                () => {
                    navegador.navigate("Detalhes", { feedId: feed._id })
                }
            }>
                <Card>
                    <CardImage source={produto}/>
                    <CardContent>
                        <EsquerdaDaMesmaLinha>
                            <Avatar source={avatar}/>
                            <TipoRecompensa>{feed.company.name}</TipoRecompensa>
                        </EsquerdaDaMesmaLinha>
                    </CardContent>
                    <CardContent>
                        <NomeProduto>{feed.product.name}</NomeProduto>
                    </CardContent>
                    <CardContent>
                        <DescricaoProduto>{feed.product.description}</DescricaoProduto>
                    </CardContent>
                    <CardContent>
                        <PontoProduto>{feed.product.points + " Dragon Coins"}</PontoProduto>
                    </CardContent>
                    <CardContent>
                        <EsquerdaDaMesmaLinha>
                            <PrecoProduto>{"R$" + feed.product.price}  </PrecoProduto>
                            <Icon name="heart" size={18} color={"#ff0000"}>
                                <Likes> {feed.likes}</Likes>
                            </Icon>
                        </EsquerdaDaMesmaLinha>
                    </CardContent>
                </Card>
            </TouchableOpacity>
        );
    }

}