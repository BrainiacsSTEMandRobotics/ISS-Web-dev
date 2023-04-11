import cartoon from "./images/cartoon.png";
import "./styles/introduction.css"
const Introduction = () => {
	return (
		<section className="introduction">
            <div className="intro-img-section">
                <img src={cartoon} alt="reading cartoon"
                />
            </div>
			<div className="intro-content">
				<h3>Goals of our book society</h3>
				<p>
					Our book society aims at making books available to everyone
				</p>

				<h3>Our offers</h3>
				<p>
					we offer free ebooks
				</p>
			</div>
		</section>
	);
};
export default Introduction;
