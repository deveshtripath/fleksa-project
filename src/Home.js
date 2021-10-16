import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
        {/* <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/personalized-devices/make_it_personal_hero_5._TTH_.jpg" alt=""/> */}

        <div className="home__row">
            <Product
                id="11"
                title="book"
                price="400"
                rating={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />

                <Product
                id="12"
                title="book"
                price="400"
                rating={5}
                image="http://img1a.flixcart.com/fk-sp-static/21072015/blue-24744-yepme-8-400x400-imadqtjww8cwpthg.jpeg"    />
       
        </div>
        <div className="home__row">
        <Product
                id="13"
                title="book"
                price="400"
                rating={5}
                image="http://img1a.flixcart.com/fk-sp-static/21072015/blue-24744-yepme-8-400x400-imadqtjww8cwpthg.jpeg"    />
                
       <Product
                id="14"
                title="Amazon.in Buy Chemistry for Degree Students (First Year) Book Onlin"
                price="500"
                rating={1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    />


       {/* <Product
                id="15"
                title="book"
                price="400"
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    /> */}

        </div>

        <div className="home__row">
        <Product
                id="13"
                title="book"
                price="400"
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    />
                
       {/* <Product
                id="14"
                title="Amazon.in Buy Chemistry for Degree Students (First Year) Book Onlin"
                price="500"
                rating={1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    /> */}


       <Product
                id="15"
                title="book"
                price="400"
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    />

        </div>


        <div className="home__row">
        <Product
                id="13"
                title="book"
                price="400"
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    />
                
       {/* <Product
                id="14"
                title="Amazon.in Buy Chemistry for Degree Students (First Year) Book Onlin"
                price="500"
                rating={1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    /> */}


       <Product
                id="15"
                title="book"
                price="400"
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />

        </div>


        <div className="home__row">
        {/* <Product
                id="13"
                title="book"
                price="400"
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />
                 */}
       <Product
                id="14"
                title="Amazon.in Buy Chemistry for Degree Students (First Year) Book Onlin"
                price="500"
                rating={1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU"    />


       <Product
                id="15"
                title="book"
                price="400"
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU"    />

        </div>



        </div>
    )
}

export default Home
