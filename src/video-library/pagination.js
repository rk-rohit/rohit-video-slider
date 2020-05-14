import React from 'react'

const Pagination = ({slides, activeSlide, goToSlide}) => {
	const pageItem = slides && slides.map((item, index)=>{
		return (
			<li 
				className={index == activeSlide ? "page-item active" : "page-item"}
				onClick={()=>goToSlide(index)}
				key={index}
			>
			<a className="page-link" href="#">{index + 1}</a>
		</li>)
	})

	return (
		<nav aria-label="Page navigation example" className="pagination-row">
			<ul className="pagination justify-content-center">
				{pageItem}
			</ul>
		</nav>
	)
}

export default Pagination