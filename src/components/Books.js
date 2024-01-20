import axios from "axios";
import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      );
      setBooks(res.data.results.books);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <h1 className="font-bold text-white text-center text-4xl py-5 lg:text-6xl">
        Bestsellers
      </h1>
      <section className="grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookItem bookItem={book} key={book.title} />
        ))}
      </section>
    </>
  );
}

export default Books;
