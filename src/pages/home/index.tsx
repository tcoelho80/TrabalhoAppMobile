import React from 'react';
import {View,FlatList } from 'react-native';
import { snService } from '../../services/sn.service';
import {  Product } from '../../entities';
import ProductItem from '../../components/ProductItem';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

export default function Home() {

    const [product, setProduct] = React.useState<Product[]>();
    const [ refreshing, setRefreshing ] = React.useState(false);

    React.useEffect(() => {
        carregar();
    }, []);

    function carregar(){
        setRefreshing(true);
     snService.getProduct().then(prod =>{
         if(prod)
         setProduct(prod);
     });

    }
    
   
    return (
        
        <View style={styles.container}>
            <StatusBar style="auto" />
            <FlatList
               data={product}
               refreshing={refreshing}
               renderItem={({ item }) => <ProductItem product={item} />}
               keyExtractor={item => item.id ? item.id.toString() : ''}
            />
        </View>
    );

}