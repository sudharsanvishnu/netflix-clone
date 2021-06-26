import { Audio, Video } from "expo-av";
import { View, Text } from 'react-native';
import { Episode } from '../../types';

interface VideoPlayerProps {
    epsiode: Episode;
}
const VideoPlayer = (props: VideoPlayerProps) => {
     const { episode } = props;
    
     const handleVideoRef = (component) => {
          const playbackObject = component;
     }
     return (
            <Video
               ref = {handleVideoRef}
             />
    )
}

export default VideoPlayer;