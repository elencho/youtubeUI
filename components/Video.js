import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

export default class Video extends Component {
    render() {
        let video = this.props.data;
        return (
            
            <View style={styles.container}>
                
                <Image source={{ uri: video.snippet.thumbnails.medium.url }} style={{ height: 200 }} />
                <View style={styles.description}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/0.jpg' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                    <View style={styles.videoDetails}>
                        <Text style={styles.videoTitle}>{video.snippet.title}</Text>
                        <Text style={styles.videoStat}>{video.snippet.channelTitle}  •  {nFormatter(video.statistics.viewCount)}  •  {date(video.snippet.publishedAt)}</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} color="#999999" />
                    </TouchableOpacity>
                </View>


            </View>
        )


        function date(time) {
            const format = moment(time).format("YYYYMMDD");
            return (moment(format, "YYYYMMDD").fromNow())
        }



        function nFormatter(num, digits) {
            var si = [
                { value: 1, symbol: "" },
                { value: 1E3, symbol: "k" },
                { value: 1E6, symbol: "M" },
                { value: 1E9, symbol: "G" },
                { value: 1E12, symbol: "T" },
                { value: 1E15, symbol: "P" },
                { value: 1E18, symbol: "E" }
            ];
            var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            var i;
            for (i = si.length - 1; i > 0; i--) {
                if (num >= si[i].value) {
                    break;
                }
            }
            return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views';


        }




    }

}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    description: {
        flexDirection: 'row',
        paddingTop: 10

    },
    videoDetails: {
        marginHorizontal: 10,
        flex: 1
    },
    videoTitle: {
        fontSize: 15
    },
    videoStat: {
        color: 'gray'
    }
})