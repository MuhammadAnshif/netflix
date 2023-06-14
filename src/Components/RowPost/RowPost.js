import React, { useEffect, useState } from 'react';
import './RowPost.css';
import { imageUrl, url } from '../../constants/Constant';
import axios from '../../axios'
import VideoPlayer from '../youtube';
import { API_KEY } from '../../constants/Constant';

function RowPost(props) {
  const [posters, setPosters] = useState([]);
  const [videoId, setVideoId] = useState('');
  const [ShowPlayer,setShowPlayer]=useState(true)
  const [CloseButton,setShowCloseButton]=useState(false)
  let value;
  
  useEffect(() => {
    axios
      .get(url[props.type])
      .then((response) => {
        console.log(response.data);
        setPosters(response.data.results);
      })
      .catch((e) => alert(e));
  }, [props.type]);
  
  if (props.type === 'Popular') {
    value = 'Popular On Netflix';
  } else if (props.type === 'Trending') {
    value = 'Trending On Netflix';
  } else if (props.type === 'Shows') {
    value = 'Tv Shows';
  } else if (props.type === 'Blockbuster') {
    value = 'Blockbuster&Action Movies';
  } else {
    value = 'Netflix Originals';
  }
  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setVideoId(response.data.results[0].key);
          setShowPlayer(true);
          setTimeout(() => {
            setShowCloseButton(true);
          }, 2000); // closeButton after 2 sec
        } else {
          axios.get(`/tv/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((newResponse) => {
              if (newResponse.data.results.length !== 0) {
                setVideoId(newResponse.data.results[0].key);
                setShowPlayer(true);
                setTimeout(() => {
                  setShowCloseButton(true);
                }, 2000); // closeButton after 2 sec
              } else {
                console.log("Video not available");
              }
            })
            .catch((error) => {
              console.log("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  const handleClose=()=>{
   setShowPlayer(false);
   setShowCloseButton(false);
  }
  
  return (
    <div className='row'>
      <h2>{value}</h2>
      <div className='posters'>
      {posters.map((obj) => (
  <img
    className="poster"
    onClick={() => handleMovie(obj.id)}
    alt="poster"
    src={`${imageUrl}${obj.backdrop_path}`}
  />
))}
      </div>
      <div style={{display:'flex'}}>
      {ShowPlayer&&videoId && <VideoPlayer videoId={videoId} />}
      <div>
      {CloseButton && (
             <button className='close-button2' onClick={() => handleClose()}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="34" height="34" className="close-icon2">
               <line x1="18" y1="6" x2="6" y2="18" />
               <line x1="6" y1="6" x2="18" y2="18" />
             </svg>
           </button>
           
            )}
            </div>
            </div>
    </div>
  );
}

export default RowPost;