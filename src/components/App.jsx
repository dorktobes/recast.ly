
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
    this.setState.bind(this, {videoListVideos: data});
    this.setState.bind(this, {currentPlayerVideo: data[0]});
    console.log(this.state);
  }
   
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
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
    this.props.ajax({
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'Rick Astley',
    }, this.searchSuccess.bind(this));
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
