import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, devesh</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

            <CheckoutProduct
               id="11"
                title="book"
                price="400"
                rating={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />
            <CheckoutProduct
               id="11"
                title="book"
                price="400"
                rating={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />
            <CheckoutProduct
               id="11"
                title="book"
                price="400"
                rating={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />
            <CheckoutProduct
               id="11"
                title="book"
                price="400"
                rating={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />
            
         

        </div>
      </div>

      {/* <div className="checkout__right">
      </div> */}
    </div>
  );
}

export default Checkout;