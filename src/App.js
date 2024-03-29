import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import ButtonBar from './components/button_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyAcbYAPar_9Yj6CaJHGMA35TGsA1Ww54uM';

class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
          videos: [],
          selectedVideo: null
      };

      this.videoSearch('music');
  }

  videoSearch(term) {
      YTSearch({key: API_KEY, term: `educational video children ${term}`}, (videos) => {
          this.setState({
              videos: videos,
              selectedVideo: videos[0]
          });
      });
  }
  render () {
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
      return (
          <div>
              <ButtonBar onSearchTermChange={videoSearch}/>
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
                  videos={this.state.videos} />
          </div>
      );
  }
}

export default App;
