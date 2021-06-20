import React from 'react'

const WelcomeComponent = (props) => {
    let { selectedProduct, changeView } = props;

    const buttonClicked = () => {
        changeView();
    }

    return (
        <div>
            <div className="secondPage">
                <h1>BINGO!!!!!!!</h1><br />
                <h2>Enjoy Your Free Trial Of <b>{selectedProduct}</b>!</h2>
                <button onClick={buttonClicked}>Home</button>
            </div>
            <br /><br />
        </div>
    )
}

export default WelcomeComponent
