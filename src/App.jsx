import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let imgArray = imageData()
  return(
      <>
        <h1 className='h1'>Kalvium Gallery</h1>
          <div className="grid">
            {/* <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" />
            <img src={imgArray[0].img} alt="" /> */}
            {
              imgArray.map(elem =>{
                return(

                  <img src={elem.img}/>
                )
              })
            }
          </div>
      </>

  )
}

export default App;
