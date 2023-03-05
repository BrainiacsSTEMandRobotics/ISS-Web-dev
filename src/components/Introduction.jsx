import cartoon from "./images/cartoon.png";
import "./styles/introduction.css"
const Introduction = () => {
	return (
		<section className="introduction">
            <div className="intro-img-section">
                <img src={cartoon} alt="rerading cartoon"
                />
            </div>
			<div className="intro-content">
				<h3>Goals of our book society</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
					adipisci facere iusto eaque. Optio neque magni enim perferendis
					repellat ipsa.
				</p>

				<h3>Our offers</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
					sequi.
				</p>
			</div>
		</section>
	);
};
export default Introduction;
