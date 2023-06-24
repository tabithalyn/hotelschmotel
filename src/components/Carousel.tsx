import { Slide } from 'react-slideshow-image';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '300px',
  overflow: 'hidden'
}
const slideImages = [
  {
    url: "src/assets/images/hotel-reception.jpg"
  },
  {
    url: "src/assets/images/default1.jpg"
  },
  {
    url: "src/assets/images/hotel-hallway.jpeg"
  },
  {
    url: "src/assets/images/hotel-room-1.jpg"
  },
  {
    url: "src/assets/images/dining-room.png"
  },
];

const Carousel = () => {

    return (
      <div className="w-full flex justify-center p-7">
        <div className="w-1/3 p-2 border-2 border-red-950 border-solid">
          <Slide>
          {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, "backgroundImage": `url(${slideImage.url})` }}>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      </div>
    );
};

export default Carousel;