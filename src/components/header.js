import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div className="mainmenufixed">
            <img src={require('../assets/logo.png')} alt="logo" />
        </div>
        );
    }
}
  
export default Header;
