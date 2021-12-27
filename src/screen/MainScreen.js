import React from 'react';
import { FaHeart } from 'react-icons/fa';
import SideBar from './SideBar';

const MainScreen = props => {
    return (

    <div style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
        {/* Everytime create a new screen, copy like this, 
            import sidebar then code content on the right side~ */}
        <div style={{
            width: '20%', //Sidebar Width
        }}>
        <SideBar/>
        </div>

        <div style={{
            width: '80%', //Content Width
            height: '100vh', //Must gt this ya
            backgroundColor: '#5F9EA0', //Temporary use this color first~
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
        }}>
            <p>Content Here</p>
            <FaHeart size={30} color={'red'} style={{ paddingLeft: 10 }}/>
        </div>

    </div>

    );
};

export default MainScreen;