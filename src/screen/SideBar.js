import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { HiClipboardList } from "react-icons/hi";
import { AiOutlineQrcode, AiOutlineReconciliation, AiOutlineInbox } from "react-icons/ai";

//Can find icon from here ya ~ Then do like above ok d, import~
//https://react-icons.github.io/react-icons/

const SideBar = props => {

    //This is one of the react functional component | Hook (useState)
    //useState will be used alot for frontend develop
    //can read this ~ https://reactjs.org/docs/hooks-state.html
    const [expand, setExpand]=useState(false);

    return (

    <div style={{
        flexDirection: 'column',
        //backgroundColor: '#FFE5B4',
        height: '100vh', //this 100vh will make sure the height cover full screen ya
    }}>
        <header style={{
            display: 'flex', //Must use this only can justify/align the content to center or other ya
            justifyContent:'center',
            width: '100%',
        }}>
            <img src={require('../constant/img/venzy.png')} 
                width={'50%'} 
                height={'50%'} />
        </header>

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
        }}>

            {/* copy one set and paste below then can add one more d~ */}

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingTop: 10, //给上面有位置~
                paddingBottom: 10, //给下面有位置~
                //backgroundColor: '#D2691E', //uncomment这个test看那个area多大~
                justifyContent: 'space-between', //分开那个箭头~
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10,
                }}>
                    <AiOutlineQrcode size={40} color={'#7B8E92'}/>
                    <p style={{ 
                        paddingLeft: 15,
                        color: '#7B8E92',
                        fontWeight: '600'
                     }}>F & B</p>
                </div>
                <button onClick={() => {
                    console.log('test') 
                //press F12 then see the console, when press if the word "test" come out means successfully clicked
                }}
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                    paddingRight: 5,
                }}
                >
                <FiChevronRight size={22} color={'#7B8E92'}/>
                </button>
            </div>

            {/* Copy until here */}

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingTop: 10, //给上面有位置~
                paddingBottom: 10, //给下面有位置~
                //backgroundColor: '#D2691E', //uncomment这个test看那个area多大~
                justifyContent: 'space-between', //分开那个箭头~
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10,
                }}>
                    <AiOutlineReconciliation size={40} color={'#7B8E92'}/>
                    <p style={{ 
                        paddingLeft: 15,
                        color: '#7B8E92',
                        fontWeight: '600'
                     }}>Client</p>
                </div>
                <button onClick={() => {
                    console.log('test')
                }}
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                    paddingRight: 5,
                }}
                >
                <FiChevronRight size={22} color={'#7B8E92'}/>
                </button>
            </div>

        {/* I do one example function here ya, to expand */}

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingTop: 10, //给上面有位置~
                paddingBottom: 10, //给下面有位置~
                backgroundColor: expand ? '#FFDD99' : '#FFFFFF', 
                justifyContent: 'space-between', //分开那个箭头~
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10,
                }}>
                    <AiOutlineInbox size={40} color={'#7B8E92'}/>
                    <p style={{ 
                        paddingLeft: 15,
                        color: '#7B8E92',
                        fontWeight: '600'
                     }}>Supplier</p>
                </div>
                <button onClick={() => {
                    console.log('test')
                    // set the expand value to true and false when click~
                    // then the value is true will show the expand and change icon~
                    if (expand === false){
                        setExpand(true);
                    }
                    else {
                        setExpand(false);
                    }
                }}
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                    paddingRight: 5,
                }}
                >
                { expand === false? //if expand is true, change the icon
                <FiChevronRight size={22} color={'#7B8E92'}/>
                :
                <FiChevronDown size={22} color={'#7B8E92'}/>
                }
                </button>
            </div>
            
            { expand === true ? //if expand is true, then show <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFDD99',
                width: '100%',
                paddingTop: 5,
                paddingBottom: 5,
            }}>
                <p style={{ 
                        paddingLeft: 0,
                        color: '#7B8E92',
                        fontWeight: '600'
                     }}>Vendor</p>
            </div>
            : //else, show nothing~
            <></>    
            }

        {/* expand function until here */}

        <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                paddingTop: 10, //给上面有位置~
                paddingBottom: 10, //给下面有位置~
                //backgroundColor: '#D2691E', //uncomment这个test看那个area多大~
                justifyContent: 'space-between', //分开那个箭头~
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10,
                }}>
                    <HiClipboardList size={40} color={'#7B8E92'}/>
                    <p style={{ 
                        paddingLeft: 15,
                        color: '#7B8E92',
                        fontWeight: '600'
                     }}>Inventory</p>
                </div>
                <button onClick={() => {
                    console.log('test')
                }}
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                    paddingRight: 5,
                }}
                >
                <FiChevronRight size={22} color={'#7B8E92'}/>
                </button>
            </div>

        </div>

    </div>
    );
};


export default SideBar;