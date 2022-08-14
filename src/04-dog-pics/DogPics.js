import React from "react";

const getDogPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const dog = await response.json();
  return dog.message;
}

export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [dogPic, setDogPic] = React.useState('')
  React.useEffect(() => {
    getDogPic().then(pic => setDogPic(pic))
  }, []);

  return (
    <div className='dog-pics'>
      {/* <img src='https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg' /> */}
      <img src={dogPic} alt="dog pic" />
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
