import React from 'react';
import movie from '../../assets/data/movie';
import { Image} from  'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { AntDesign} from '@expo/vector-icons';
import { Episode } from '../../types';

interface EpisodeItemsProps {
    episode: Episode
}
const EpisodeItems = (props: EpisodeItemsProps) => {
    const {episode} = props;
   return (
       <View style={{margin : 10}}>
           <View style={styles.row}>
            <Image style={styles.image} source={{ uri: episode.poster}} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{episode.title}</Text>
                <Text style={styles.duration}>{episode.duration}</Text>
            </View>

            <AntDesign name='download' size={24} color='black'/>
           </View>

           <Text style={styles.plot}>{episode.plot}</Text>
       </View>
   )
};

export default EpisodeItems;

