import React from "react";
import BuyLink from "./BuyLink";
function BookItem({ bookItem }) {
  const {
    age_group,
    author,
    book_image,
    description,
    title,
    buy_links,
    primary_isbn10,
    publisher,
    rank,
  } = bookItem;
  return (
    <article key={rank} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
      <div>
        <img src={book_image} alt={title} className="block mx-auto w-1/2" />
      </div>
      <div>
        <h3 className="font-bold my-2 text-2xl">{title}</h3>
        <p className="mb-4">{description}</p>
        <p>
          <span className="font-bold">Author:</span> {author}
        </p>
        <ul className="mb-4">
          <li>
            <span className="font-bold">Publisher: </span>
            {publisher}
          </li>
          <li>
            <span className="font-bold">ISBN: </span>
            {primary_isbn10}
          </li>
          <li>
            <span className="font-bold">Age Group: </span> {age_group || "none"}
          </li>
        </ul>
        <ul>
          <h3 className="font-bold text-xl">Buy Now:</h3>
          {buy_links.map((link) => (
            <BuyLink linkItem={link} key={link.name} />
          ))}
        </ul>
      </div>
    </article>
  );
}

export default BookItem;
