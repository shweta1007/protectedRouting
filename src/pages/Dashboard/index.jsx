import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";  
import { Link } from "react-router-dom";
import { useTableData } from "../../hooks/Auth";

const Dashboard = () => {
  const [productList, setProductList] = useState([])
  const {data} = useTableData();
  console.log(data)

  const apiCaller = async () => {
    // try {
    //   const { data } = await TableApi();
    //   setProductList(data.carts)
    // } catch (error) {
    //   console.log(error)
    // }
  }
  useEffect(() => {
    // apiCaller();
  }, [])

  return (
    <>
      <div className='p-5'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Dis</th>
              <th>UserID</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              data.data.carts?.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.total}</td>
                  <td>{item.discountedTotal}</td>
                  <td>{item.userId}</td>
                  <td>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/edit" state={{productData: item}}>
                      <Button variant="dark">Edit</Button>
                    </Link>
                  </td>
                </tr>
              ))
            }
            {/* <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>@John</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Harry</td>
              <td>Potter</td>
              <td>@harrypotter</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Kylie Jainer</td>
              <td>@Kylie</td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
