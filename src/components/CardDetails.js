import { green } from "@mui/material/colors";
import React from "react";
import Table from "react-bootstrap/Table";

const CardDetails = () => {
  return (
    <>
      <div className="container" mt-2>
        <h2 className="text-center">Item Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt="imagefood"
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong>: Massala Theoryy
                    </p>
                    <p>
                      <strong>Price</strong>: ₹300
                    </p>
                    <p>
                      <strong>Dishes</strong>: North Indian,Biryani,Mughlai
                    </p>
                    <p>
                      <strong>Total</strong>: ₹ 350
                    </p>
                  </td>

                  <td>
                    <p>
                      <strong>
                        Rating :
                        <span style={{ background: "green" }}> 3.8★</span>
                      </strong>
                    </p>
                    <p>
                      <strong>Order Review : </strong>
                      <span> 1175 + order placed from here recently</span>
                    </p>
                    <p>
                      <strong>
                        Remove: <span></span>{" "}
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>
                      </strong>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
