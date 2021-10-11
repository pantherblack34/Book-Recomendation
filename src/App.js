import React, { useState } from "react";
import "./styles.css";

const bookObject = {
  FICTION: [
    { name: "SHERLOCK HOLMES", rating: "4.2/5" },
    { name: "CHRONICLES OF NARNIA", rating: "4.3/5" }
  ],
  MYSTERY: [
    { name: "MURDER ON THE ORIENT EXPRESS", rating: "4.3/5" },
    { name: "Da VINCI CODE", rating: "3.9/5" }
  ],
  ACTION: [
    { name: "THE THREE MUSKETEERS", rating: "4.1/5" },
    { name: "PERCY JACKSON AND THE OLYMPIAN", rating: "4.5/5" }
  ],
  COMEDY: [
    { name: "BORN A CRIME", rating: "4.6/5" },
    { name: "THE DIARY OF NOBODY", rating: "3.7/5" }
  ]
};
//changing objects into arrays and using the key values to map it.
const greatBooks = Object.keys(bookObject);

export default function App() {
  //initializing the screen for the viewer to see what is recommended.
  const [books, setBooks] = useState("COMEDY");

  //using  the function to call the event to be happen
  function bookHandler(bookTeller) {
    //updating the view when ever the event is triggered.
    setBooks(bookTeller);
  }

  return (
    <div className="App">
      <h1>GREAT BOOKS</h1>
      <p>Select any genre to select the recommended books.</p>
      <div key={books}>
        {
          /*creating array from object and mapping each 
        element in the array to create buttons*/
          greatBooks.map((bookTeller) => (
            <button
              onClick={() => bookHandler(bookTeller)}
              style={{
                width: "150px",
                fontSize: "1.5rem",
                fontWeight: "500",
                padding: "0.5rem 1rem",
                margin: "1rem",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "#059669",
                color: "black"
              }}
              key={bookTeller}
            >
              {bookTeller}
            </button>
          ))
        }
      </div>
      <div>
        {
          //displaying the list of books
          bookObject[books].map((book) => (
            <div
              style={{
                border: "3px solid  #059669",
                borderRadius: "5px",
                textAlign: "center",
                maxWidth: "300px",
                padding: "0.5rem 1rem",
                margin: "1rem"
              }}
            >
              <h2>{book.name}</h2>
              <h2>{book.rating}</h2>
            </div>
          ))
        }
      </div>
    </div>
  );
}
