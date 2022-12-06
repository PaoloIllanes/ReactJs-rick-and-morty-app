import React, {Fragment, useEffect, useState} from "react";
import Navbar from './components/Navbar.js'
import Characters from './components/Characters.js'
import Pagination from './components/Pagination.js'



function App() {
    const [characters,setCharacters]= useState([])
    const [info, setInfo] = useState([]);
    const initialUrl="https://rickandmortyapi.com/api/character";

    const fetchCharacters= (url) => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setCharacters(data.results);
                setInfo(data.info);

            })
            .catch(error => console.log(error))
    };

    const onPrevious = () =>{

        fetchCharacters(info.prev);

    }
    const onNext = () =>{

        fetchCharacters(info.next);

    }

    useEffect(()=>{

        fetchCharacters(initialUrl);

    },[])

  return (
    <Fragment>
      <Navbar brand="Rick and Morty App"/>
      <div className="container mt-5">
          <Pagination
              prev={info.prev}
              next={info.next}
              onNext={onNext}
              onPrevious={onPrevious}/>
            <Characters characters={characters}/>
          <Pagination
              prev={info.prev}
              next={info.next}
              onNext={onNext}
              onPrevious={onPrevious}/>
      </div>
    </Fragment>
  );
}

export default App;
