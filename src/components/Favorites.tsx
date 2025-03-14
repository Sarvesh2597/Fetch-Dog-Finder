import { useEffect, useState } from 'react';
import DogCard from './DogCard';
import Nav from './Nav';
import '../styles/favorites.css';

import Footer from './Footer';


interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const Favorites = () => {
  const [dogList, setDogList] = useState<Dog[]>([]);
  const [showLoader, setShowLoader] = useState(false);
  const [match, setMatch] = useState<Dog | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const myDogIds = JSON.parse(localStorage.getItem('doglist') || '[]').map(
    (dog: { id: any }) => dog.id
  );
  console.log(myDogIds);

  const handleMatch = () => {
    fetch('https://frontend-take-home-service.fetch.com/dogs/match', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(myDogIds),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('Search response data:', data);
        const matchedDogId = data?.match;
        if (matchedDogId) {
          const matchedDogDetails = dogList.find(
            (dog) => dog.id === matchedDogId
          );
          if (matchedDogDetails) {
            setMatch(matchedDogDetails);
            setShowPopup(true);
          } else {
            console.error('No details found for the matched dog');
          }
        } else {
          console.error('No match found');
        }
      })
      .catch((error) => {
        console.error('Error while matching dogs:', error);
      });
  };

  const makeMatch = async () => {
    setShowLoader(true);
    await handleMatch();
    setTimeout(() => {
      setShowLoader(false);
    }, 4000);
  };

  useEffect(() => {
    console.log('match: ', match);
  }, [match]);

  useEffect(() => {
    const storedDogList = localStorage.getItem('doglist');
    if (storedDogList) {
      setDogList(JSON.parse(storedDogList) as Dog[]);
    }
  }, []);

  const removeFromDogList = (id: string) => {
    const updatedDogList = dogList.filter((dog) => dog.id !== id);
    setDogList(updatedDogList);
    localStorage.setItem('doglist', JSON.stringify(updatedDogList));
  };

  return (
    <div>
      <Nav />
      <div className='main'>
        <div className='favorites-container'>
        
          <div className='card-container'>
            {dogList.map((dog) => (
              <DogCard key={dog.id} dog={dog} onRemove={removeFromDogList} />
            ))}
          </div>
          <button className='match-btn' onClick={makeMatch}>
            Find your perfect match!
          </button>
        </div>
        {showPopup && match && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="rotate-card">
              <DogCard key={match.id} dog={match} />
            </div>
          </div>
        )}
        <div className='foot'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Favorites;