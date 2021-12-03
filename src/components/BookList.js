import React from "react";
import Book from "./Book";

const BookList = () => {
  const books = [
    {
      title: " My Little Friend",
      author: "Amelia",
      img: "https://images-na.ssl-images-amazon.com/images/I/91%2B-LN6-NGL._AC_UL200_SR200,200_.jpg",
    },
    {
      title: " Where's Spot",
      author: "Eric Hill",
      img: "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL200_SR200,200_.jpg",
    },
    {
      title: " How to catch Snowman",
      author: "Santa",
      img: "https://images-na.ssl-images-amazon.com/images/I/91%2Bpz9ezWwL._AC_UL200_SR200,200_.jpg",
    },
  ];

  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.title} {...book} />
      ))}
    </section>
  );
};

export default BookList;
