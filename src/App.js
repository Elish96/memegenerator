import './App.css';
import React,{useState} from 'react'
import Head from './components/Head';
import Form from './components/Form';
import DisplayImage from './components/DisplayImage'; 
import Troll from './components/Assets/icons/TrollFace.jpg';
import memesData from './components/memesData';


function App() {

    const [memesImage, setMemesImage] = useState({
        firstText:'',
        secondText:'',
        imageUrl:'https://i.imgflip.com/30b1gx.jpg'
    });

    const [allMemesImages,setAllMemeImages]=useState(memesData);

    function memeBtn(){
       const imageArray= allMemesImages.data.memes;
      const getRandomImage = Math.floor(Math.random()*imageArray.length)
      const memeUrlPath = imageArray[getRandomImage].url;
      // console.log(memeUrlPath)

      setMemesImage((prevMeme)=>({
        ...prevMeme,
        imageUrl : memeUrlPath
      }))


    }

  return (
    <div className="App">
      <Head
        image={Troll}
        title='Meme Generator'
        course='React Course - Project 3'
        
      />
      <Form
        Btn={memeBtn}
      />
      <DisplayImage
        showImage={memesImage.imageUrl}
      />
    </div>
  );
}

export default App;
