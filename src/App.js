import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import bg from './assets/bg.png';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  let [재고] = useState([10, 11, 12]);

	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Young Shopping</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link
							onClick={() => {
								navigate('/');
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate('/detail');
							}}
						>
							상세페이지
            </Nav.Link>
            <Nav.Link
							onClick={() => {
								navigate('/cart');
							}}
						>
							카트
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate('/about');
							}}
						>
							About
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<Routes>
				<Route
					path="/"
					element={
						<>
							<div
								className="main-bg"
								style={{ backgroundImage: `url(${bg})` }}
							></div>

							<div className="contanier">
								<div className="row">
									{shoes.map((v, k) => {
										return (
											<Goods key={k} shoes={shoes[k]} imgIndex={k}></Goods>
										);
									})}
								</div>
							</div>
							<button
								onClick={() => {
									axios
										.get('https://codingapple1.github.io/shop/data2.json')
										.then(response => {
											let data = response.data;
											let cpShoes = [...shoes, ...data];
											setShoes(cpShoes);
										})
										.catch(err => {
											console.err(err);
										});
								}}
							>
								더보기
							</button>
						</>
					}
				></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/cart" element={<Cart  />}></Route>
				<Route path="/about" element={<About></About>}>
					<Route path="member" element={<div>멤버임</div>}></Route>
					<Route path="location" element={<div> About location</div>}></Route>
				</Route>
				<Route path="/event" element={<Event></Event>}>
					<Route
						path="one"
						element={<div>첫 주문시 양배추즙 서비스</div>}
					></Route>
					<Route path="two" element={<div> 생일기념 쿠폰받기</div>}></Route>
				</Route>
				<Route path="*" element={<div>없는페이지요</div>}></Route>
			</Routes>
		</div>
	);
}

function Event() {
  return ( 
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return ( 
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Goods(props) {
	let navigate = useNavigate();
	return (
		<div
			className="col-md-4"
			style={{ cursor: 'pointer' }}
			onClick={() => {
				navigate(`/detail/${props.shoes.id}`);
			}}
		>
			<img
				src={`${process.env.PUBLIC_URL}/img/shoes${props.imgIndex + 1}.jpg`}
				width="80%"
			/>
			<h4>{props.shoes.title}</h4>
			<p>{props.shoes.content}</p>
			<p>{props.shoes.price}</p>
		</div>
	);
}

export default App;
