import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null: return;
            case false: return <li><a href = "/auth/google">Lonin With Google</a></li>  ;
            default: return <li><a href= "/api/logout">Logout</a></li>;
        }
    };

    render() {
        //console.log(this.props);
        return (
            <nav>
            <div class="nav-wrapper">
             <a class="left brand-logo">Email</a>
             <ul class="right">
             <li>
                {this.renderContent()}
            </li>
             </ul>
            </div>
            </nav>
        )
    }
};

function mapStateToProps({ auth }){
    return { auth };
};

export default connect(mapStateToProps)(Header);
