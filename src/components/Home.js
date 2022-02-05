import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { useDispatch, useSelector } from "react-redux";

// const Home = (props) => {
//     let dispatch = useDispatch()

//     handleClick = (id) => {
//         dispatch(addToCart(id))
//     }


//     let itemList = props.items.map(item => {

//         <div className="card" key={item.id}>
//             <div className="card-image">
//                 <img src={item.image} alt={item.title} />
//                 <span className="card-title">{item.title}</span>
//                 <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { handleClick(item.id) }}><i className="material-icons">add</i></span>
//             </div>

//             <div className="card-content">
//                 <p>{item.desc}</p>
//                 <p><b>Price: {item.price}{item.currency}</b></p>
//             </div>
//         </div>
//     })
//     return (
//         <div className="container">
//             <h3 className="center">Our items</h3>
//             <div className="box">
//                 {itemList}
//             </div>
//         </div>
//     )
// }

// export default connect(
//     (state) => ({
//         items: state.items
//     }),
//     {
//         addToCart: (id) => { dispatch(addToCart(id)) }
//     }
// )(Home);


class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        debugger
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.image} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}{item.currency}</b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)