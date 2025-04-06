import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

interface Props {
  width: number;
  height: number;
  play: boolean;
  videoId: string;
  text: string;
}

export const VideoCard = ({width, height, play, videoId, text}:Props) => {
  return (
    <View style={styles.videoContainer}>
      <YoutubePlayer
        width={width}
        height={height}
        play={play}
        videoId={videoId}
      />
      <Text style={styles.titleBox}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 'auto',
    margin: 20,
    borderRadius: 25,
    borderColor: "rgb(192, 191, 191)",
    borderWidth: 0.5,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 25,
  },
  titleBox: {
    fontFamily: "sans-serif",
    fontSize: 18,
    color: "#ffc167",
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: "center",
  },
})