import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { tab } from "@testing-library/user-event/dist/tab";
import { Context1 } from './../App';

function Detail(props) {
  let { id } = useParams(); // 현재 url의 parameter 정보가 남음
  let [alertshow, setShow] = useState(true);
  let [count, setCount] = useState(1);
  let [num, setNum] = useState(0);

  let [tab, setTab] = useState(0);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('그러지 마세요');
    }
  }, [num]);

  let [end, setEnd] = useState('');
  useEffect(() => {
    setEnd('end');
  })


  return (
    <div className={"container start " + end}>
			{alertshow == true ? (
				<div className="alert alert-warning">2초 이내 구매 시 할인</div>
			) : null}
			<div className="row">
				<div className="col-md-6">
					<img
						src={`https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`}
						width="100%"
					/>
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{props.shoes[id].title}</h4>
					<p>{props.shoes[id].content}</p>
					<p>{props.shoes[id].price}원</p>
					<button className="btn btn-danger">주문하기</button>
					<input
						onChange={e => {
							setNum(e.target.value);
						}}
					/>
				</div>
			</div>

			<Nav variant="tabs" defaultActiveKey="link0">
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(0);
						}}
						eventKey="link0"
					>
						버튼0
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(1);
						}}
						eventKey="link1"
					>
						버튼1
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTab(2);
						}}
						eventKey="link2"
					>
						버튼2
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<TabContent tab={tab}></TabContent>
		</div>
	);
  
}

function TabContent({ tab }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(timer);
      setFade('');
    }
  }, [tab])
  return (
    <div className={"start " + fade}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}</div>
	);
}




export default Detail;