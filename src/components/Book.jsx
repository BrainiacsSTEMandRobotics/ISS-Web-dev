import React from "react"
import "./styles/book.css"
const Book = ({ title, link, img }) => { 
    console.log("book")
    return (
			<div class="books">
				
					<div class="card">
                    <img src={img} alt={ title} />
                    <p> { title}</p>
                    <button>
                        <a href={link}>read more</a>
                        </button>
					</div>
				
			</div>
		);
}
export default Book