import React, {useEffect, useState} from 'react'
import TinderCard from "react-tinder-card";
import './QpidCards.css';
import database from './Firebase';

function QpidCards() {
    const [people, setPeople] = useState([]);
    // Jacked if-statement (useEffect)
    useEffect(() => {
        //this will run ONCE when component loads and never again because the dependancy= [] is empty
        //it would run everytime the variable in [] changes
        
        const unsubscribe = database
        .collection('people')
        .onSnapshot((snapshot) => (
            setPeople(snapshot.docs.map((doc) => doc.data()))
        ));

        return () => {
            //cleanup
            unsubscribe();
        }

    }, []);

    return (
        <div>
            <div className= "qpidCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div 
                        style= {{backgroundImage: `url(${person.url})` }}
                        className="card"
                    >                  
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default QpidCards
