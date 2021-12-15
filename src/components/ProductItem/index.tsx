import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Product } from '../../entities';



type Props = { product: Product }

export default function ProductItem({ product }: Props) {
    return (
        <View style={styles.container}>
            <Text >ID: {product.id}</Text>
            <View >
                <Text >Produto: {product.name}</Text>
                <Text >Valor: {product.price}</Text>
                <Text >Quantidade: {product.amount}</Text>
                 <View style={styles.container}>
                  <Text >ID: {product.factory.id}</Text>
                  <Text >Fabricate: {product.factory.name}</Text>
                 </View>

            </View>
        </View>
    );
}