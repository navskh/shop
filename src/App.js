import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import bg from './assets/bg.png';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Young Shopping</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
						<Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
						<Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
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
						</>
					}
				></Route>
				<Route
					path="/detail"
					element={<Detail/>}
				></Route>
        <Route path="/about" element={<About></About>}>
          <Route path='member' element={ <div>멤버임</div> } ></Route>
          <Route path='location' element={ <div> About  location</div> }></Route>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path='one' element={ <div>첫 주문시 양배추즙 서비스</div> } ></Route>
          <Route path='two' element={ <div> 생일기념 쿠폰받기</div> }></Route>
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
	return (
		<div className="col-md-4">
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
