import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {changeName} from "../store.js";

function Cart() {
  let stock = useSelector((state) => { return state.stock });
  let state = useSelector((state) => { return state });
  let dispatch = useDispatch();
  return (
    <div>
      {state.user} 의 장바구니
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
					</tr>
        </thead>
        <tbody>
        {
          stock.map((v,k) => {
            return (
              <tr key={k}>
                <td>{k+1}</td>
                <td>{ stock[k].name }</td>
                <td>{ stock[k].count }</td>
                <td><button onClick={() => {
                  dispatch(changeName())
                }}>+</button></td>
              </tr>
            )
          })
        }
				</tbody>
			</Table>
		</div>
	);
}

export default Cart;