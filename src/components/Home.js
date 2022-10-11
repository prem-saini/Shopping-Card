import React from "react"
import "./Home.css"
import Img from '../Img/shop1.jpg'
import Imge from '../Img/shop2.jpg'
import Imga from '../Img/shop3.jpg'

function Home(props) {
    return (

        <>
            <div className="container">
                <h1 className="you">Shopping Cart</h1>
                <div className="card-group">
                    <div className="card">
                        <div>
                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src={Img} />
                                </div>
                                <div className="text-wrapper item">
                                    <span>Kachori:</span>
                                    <span>Price: $10.00</span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button onClick={() => props.addToCardHandler({ price: 10, name: 'kachori' })}>Add To Cart</button>
                                    <button className="remove" onClick={() => props.removeToCardHandler({})}>Remove To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src={Imge} />
                                </div>
                                <div className="text-wrapper item">
                                    <span>Samosha:</span>
                                    <span>Price: $20.00</span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button onClick={() => props.addToCardHandler({ price: 10, name: 'kachori' })}>Add To Cart</button>
                                    <button className="remove" onClick={() => props.removeToCardHandler({})}>Remove To Cart</button>
                                </div>
                            </div>
                        </div>




                        <div>
                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src={Imga} />
                                </div>
                                <div className="text-wrapper item">
                                    <span>Special Kachori:</span>
                                    <span>Price: $30.00</span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button onClick={() => props.addToCardHandler({ price: 10, name: 'kachori' })}>Add To Cart</button>
                                    <button className="remove" onClick={() => props.removeToCardHandler({})}>Remove To Cart</button>
                                </div>
                            </div>
                        </div>






                    </div>
                </div>

                <div className="card-group">
                    <div className="card12">
                        <div>
                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src={Img} />
                                </div>
                                <div className="text-wrapper item">
                                    <span>Kachori:</span>
                                    <span>Price: $10.00</span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button onClick={() => props.addToCardHandler({ price: 10, name: 'kachori' })}>Add To Cart</button>
                                    <button className="remove" onClick={() => props.removeToCardHandler({})}>Remove To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src={Imge} />
                                </div>
                                <div className="text-wrapper item">
                                    <span>Samosha:</span>
                                    <span>Price: $20.00</span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button onClick={() => props.addToCardHandler({ price: 10, name: 'kachori' })}>Add To Cart</button>
                                    <button className="remove" onClick={() => props.removeToCardHandler({})}>Remove To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src={Imga} />
                                </div>
                                <div className="text-wrapper item">
                                    <span> Special Kachori:</span>
                                    <span>Price: $30.00</span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button onClick={() => props.addToCardHandler({ price: 10, name: 'kachori' })}>Add To Cart</button>
                                    <button className="remove" onClick={() => props.removeToCardHandler({})}>Remove To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>

    )
}
export default Home