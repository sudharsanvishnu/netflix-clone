import * as React from 'react';
import { Text, View } from '../../components/Themed';
import movie from '../../assets/data/movie';
import styles from './styles';
import { MaterialIcons, Entypo, AntDesign , MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Pressable, Image, FlatList } from 'react-native';
import EpisodeItems from '../../components/EpisodeItems';
import {Picker} from '@react-native-picker/picker';
import VideoPlayer  from '../../components/VideoPlayer';


const firstSeason = movie.seasons.items[0]
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {
    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.item[0]);
    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
    <View>
        <VideoPlayer episode = {currentEpisode} />
        <FlatList
         data = {firstSeason.episodes.items}
         renderItem={({ item }) => <EpisodeItems episode={item} />}
         style={{ marginBottom: 250}}
         ListHeaderComponent={(
            <View style= {styles.pads}>
         <Text style= {styles.title}>{movie.title}</Text>
           <View style= {{flexDirection: 'row'}}>
            <Text style = {styles.match}>98% match</Text>
            <Text style = {styles.year}>{movie.year}</Text>
            <View style = {styles.ageContainer}>
                <Text style = {styles.age}>12+</Text>
            </View>
            <Text style = {styles.year}>{movie.numberOfSeasons} Seasons</Text>
            <MaterialIcons name="hd" size={24} color="black" />
           </View>
           {/* play button */}
           <Pressable onPress= {() => {console.warn('play')}} style={styles.playButton}>
               <Text style={styles.playButtonText}>
                   <Entypo name="controller-play" size={15} color="black" />
                   Play
                </Text>
           </Pressable>
           {/* download button */}
           <Pressable onPress = {() => {console.warn('download')}} style={styles.downloadButton}>
               <Text style={styles.downloadButtonText}>
               <AntDesign name="download" size={15} color="white" />
               {' '}
               Download
               </Text>
           </Pressable>
           <Text style={{marginVertical: 10}}>{movie.plot}</Text>
           <Text style={styles.year}>cast : {movie.cast}</Text>
           <Text style={styles.year}>creator: {movie.creator}</Text>

            {/* {row with buttos} */}
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                  <AntDesign name='plus' size={24} color={'black'}/>
                  <Text style={{color: 'darkgrey', marginTop: 5}}>Mylist</Text>
              </View>
              <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                  <AntDesign name="like2" size={24} color="black" />
                  <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
              </View>
              <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                <MaterialCommunityIcons name="share" size={24} color="black" />
                  <Text style={{color: 'darkgrey', marginTop: 5}}>share</Text>
              </View>
            </View>
               {/* horizontal
               showsHorizontalScrollIndicator={false}
               showsVerticalScrollIndicator={false} */}
            {/* <Picker 
                    selectedValue={'a'} 
                    onValueChange={(itemValue, itemIndex) => {}}>
                    {seasonNames.map(seasonName => (
                        <Picker.Item label={seasonName} value={seasonName} key= {seasonName}/>
                    ))} 
            </Picker> */}
        </View>
         )}
        />
    </View>
)
};

export default MovieDetailsScreen; 