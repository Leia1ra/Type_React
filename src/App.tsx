import React, {JSX, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {diffieHellman} from "node:crypto";

function App() {
	const post: string = '강남 우동 맛집';
	/*Destructuring 문법*/
	const [data, setData]: [string[], React.Dispatch<React.SetStateAction<string[]>>]
		= useState(["남자 코트 추천", "강남 우동 맛집", "리엑트 독학"]);

	const [heart, setHeart]
		= useState([0,0,0]);

	function heartFn(index:number) {
		let copy = [...heart];
		copy[index] += 1;
		setHeart(copy);
	}

	function dataSort() {
		setData([...data.sort()])
	}
	const [modal, setModal]
		= useState([false,false,false]);


	return (
		<div className="App">
			<div className="black-nav">
				<h4 id={post}>블로그임</h4>
			</div>
			<h4 style={{color: 'red', fontSize: '16px'}}>{post}</h4>{/*데이터 바인딩이라고 함*/}
			<hr/>
			{/*
			<button onClick={dataSort}>정렬</button>
			<div className="list">
				<button onClick={() => {
					data[0] = '여자 코트 추천';
					setData([...data]);
				}}>변경
				</button>
				<h4 onClick={()=>{
					setModal(!modal)
				}}>{data[0]} <span onClick={heartFn}>👍</span>{heart}</h4>
				<p>2월 17일 발행</p>
				{
					modal ? <Modal/>:null
				}
			</div>
			<div className="list">
				<h4>{data[1]} <span onClick={function () {
					console.log(1)
				}}>👍</span>{heart}</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className="list">
				<h4>{data[2]} <span onClick={() => {
					console.log()
				}}>👍</span>{heart}</h4>
				<p>2월 17일 발행</p>
			</div>
			*/}
			{
				data.map((value, index, array)=>{
					return (
						<div className="list" key={index}>
							<h4 onClick={() => {
								if(modal[index]) {
									modal[index] = !modal[index]
								} else {
									modal[index] = !modal[index]
								}
								setModal([...modal])
							}}>
								{value}
							</h4>
							<span onClick={()=>{heartFn(index)}}>👍</span>
							{heart[index]}
							<p>2월 17일 발행</p>
							{modal[index] ? <Modal i={index} p={data} set={setData}/> : null}
						</div>
					)
				})
			}
		</div>
	);
}
type Props = {
	i:number;
	p:string[];
	set:React.Dispatch<React.SetStateAction<string[]>>;
	c?:string;
}
function Modal(props:Props) {
	/*component
	* 1. 반복적인 HTML 축약할때
	* 2. 큰 페이지
	* 3. 자주 변경되는 UI
	*
	* 단점 : state 가져다 쓰기 힘듦
	* */
	return (
		<div className="modal" style={{color: props.c, background:"lightyellow"}}>
			<h4>{props.p[props.i]}</h4>
			<p>날짜</p>
			<p>상세 내용</p>
			<button onClick={() => {
				props.p[props.i] = "여자 코트 추천";
				props.set([...props.p])
			}}>변경
			</button>
		</div>
	)
}

export default App;