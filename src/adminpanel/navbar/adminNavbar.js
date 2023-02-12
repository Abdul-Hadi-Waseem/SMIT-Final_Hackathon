import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, Space } from 'antd';
import './nav.css';

function Navigation() {
    return (
       <Nav>
        <header>
        <div>
            <ul className="navbar">
                <li>
                    <NavLink className="a" to="/adminpanel"><i class="fa-solid fa-house-chimney"></i></NavLink>
                </li>
                <li>
                    <NavLink className="a" to="/additem"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                </li>
                <li>
                    <NavLink className="a" to="/adminprofile"><i class="fa-solid fa-user"></i></NavLink>
                </li>
            </ul>
        </div>
        </header>
        
       </Nav>
       
    );
  }
  
  const Nav = styled.nav`
  padding:10px;
 
  .navbar-list{
    display:flex;
    gap: 2.5rem;
    margin-right:300px;
   
    
    li{

        list-style:none;

        .navbar-links{
            text-decoration:none;
            color:#181818;
            font-family: 'Roboto', sans-serif; 
        }
        
    }

    li a:hover{
        color:#0155ca;
       
    }

    #btn{
        margin-top:-4px;
    }
  
        
    }
    
    

  }
  `;
  export default Navigation;