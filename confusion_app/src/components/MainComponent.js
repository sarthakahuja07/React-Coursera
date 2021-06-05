
import React, { useState } from "react";
import Menu from "./MenuComponents";
import DishDetail from './DishDetailComponent'
import Dishes from '../shared/dishes';
import Header from './HeaderComponent'
import Contact from './ContactComponent';
import Home from './HomeComponent'
import Footer from './FooterComponent'
import {Switch,Route,Redirect} from 'react-router-dom'
import { DISHES } from '../shared/dishes';

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function Main() {

	const [dishes, setdishes] = useState(DISHES);
	const [comments, setcomments] = useState(COMMENTS);
	const [promotions, setpromotions] = useState(DISHES);

	const [leaders, setleaders] = useState(LEADERS);


	function HomePage(){
		return (
            <Home  dish={dishes.filter((dish) => dish.featured)[0]}
            promotion={promotions.filter((promo) => promo.featured)[0]}
            leader={leaders.filter((leader) => leader.featured)[0]} 
            />
        );
    }
     function MenuPage(){
        return (
            <Menu dishes = {dishes}/>
        );
    }

	return (
		<div >
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/home" component={() => HomePage()} ></Route>
					<Route exact path="/menu" component={() => MenuPage()} ></Route>
					<Route exact path="/contactus" component={()=><Contact />} ></Route>
					<Redirect to='/home'> </Redirect>
				</Switch>
				<Footer />
			</React.Fragment>
		</div>
	);
}

export default Main;
