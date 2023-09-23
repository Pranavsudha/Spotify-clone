import { FlatList, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { tracks } from '../../../assets/data/tracks';


export default function Home() {
  return (
    <View style={styles.container}>
     <FlatList data={tracks} renderItem={({item})=>
     <Text style={styles.text}>{item.artists[0].id}</Text>
    }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"white",
    fontSize:20
  }
 
});
