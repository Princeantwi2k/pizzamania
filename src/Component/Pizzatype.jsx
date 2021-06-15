import React from 'react';
import imgCk from '../image/ck.jpg'
import img2k from '../image/2k.jpg'
import imgH from '../image/h.jpg'
import imgJl from '../image/jl.jpg'


const Pizzatype = () => {
    return (
        <div className="row">
		<div className="text-center">
			<h3>Pizza types</h3>
		</div>
		<div className="col-md-3">
			<div className="thumbnail">
         <img src={imgCk} alt="about pizza"/>
      <div className="caption">
        <h3>pepperona pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </p>
      </div>
    </div>
		</div>
		<div className="col-md-3">
			<div className="thumbnail">
      <img src={imgH} alt="about pizza" />
      <div className="caption">
        <h3>Bossu pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </p>
      </div>
    </div>
		</div>
		<div className="col-md-3">
			<div className="thumbnail">
      <img src={imgJl} alt="about pizza" />
      <div className="caption">
        <h3>cheese pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </p>
      </div>
    </div>
		</div>
		<div className="col-md-3">
			<div className="thumbnail">
      <img src={img2k} alt="about pizza" />
      <div className="caption">
        <h3>Vegetarian pizza</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </p>
      </div>
    </div>
		</div>
	</div>
    );
}

export default Pizzatype;
