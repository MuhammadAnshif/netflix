import YouTube from 'react-youtube';



export default function VideoPlayer({ videoId }) {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <YouTube videoId={videoId} opts={opts} />
    );
  }