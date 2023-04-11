import React from 'react'
import Book from './Book'
import { bookStore } from './store'
import "./styles/book.css";
const BookContainer = () => {
    // console.log("hello")
  return (
		<section>
			<h2>List of Books</h2>
			<div className="card-container">
				{bookStore?.map((item) => (
					<Book title={item.title} img={item.img} link={item.link} />
				))}
			</div>
		</section>
	);
}

export default BookContainer
