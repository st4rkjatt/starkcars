import React from 'react'
import './main3.css'
function Main3(props) {
  return (

    <>
    <div class="image-area">
		<div class="img-wrapper card">
			<img  src={props.img} alt="Atul Prajapati"/>
			<h3>{props.name}</h3>
			{/* <ul>
				<li><a href="https://github.com/atuljustano"><i class="fab fa-github"></i></a></li>
				<li><a href="https://www.instagram.com/atulkprajapati2000/"><i class="fab fa-instagram"></i></a></li>
				<li><a href="https://twitter.com/atuljustano"><i class="fab fa-twitter"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw"><i class="fab fa-youtube"></i></a></li>
			</ul> */}
		</div>
	</div>



    </>
  )
}

export default Main3;