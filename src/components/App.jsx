
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoListVideos: exampleVideoData,
      currentPlayerVideo: exampleVideoData[0]
      
    };
  }
  
  videoClick(clickedVideo) {
    // console.log(clickedVideo);
    this.setState({currentPlayerVideo: clickedVideo});
  }
  searchSuccess(data) {
    this.setState({videoListVideos: data});
    this.setState({currentPlayerVideo: data[0]});
    console.log('state', this.state);
  }
  onQuery() {
    console.log('onChange worked');
    this.props.searchYouTube({
      query: document.getElementsByClassName('form-control')[0].value,
      max: 5,
      key: YOUTUBE_API_KEY
    }, this.searchSuccess.bind(this));  
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search queryMethod={this.onQuery.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentPlayerVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoListVideos} method={this.videoClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.props.searchYouTube({
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'Rick Astley',
    }, this.searchSuccess.bind(this));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
