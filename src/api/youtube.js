import axios from 'axios';


const KEY = 'AIzaSyA3U5tXtIIOfF5G6gs4twos2APSwROwX1A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 6,
    key: KEY
  }
});