
import React, { useContext, useEffect, useState } from 'react'
import './login.scss';
import Button from '../../components/button';
import { UserContext } from '../../store/UserContext';
import { useNavigate } from 'react-router-dom/dist';
import Loader from '../../components/loader';



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const { isAuthenticated, error, handleLogin, isloading, email,user } = useContext(UserContext);

    const handleSubmit = () => {
        handleLogin(username, password);
        user.accountType === 'campOwner' ? navigate('/director/camps') : ( user.accountType === 'Parent' )? navigate('/athlete/camps'):navigate('/athlete/camps')
    };
    const handleChangeEmailAdd=(e)=>{
        const {name,value} = e.target
        setUsername((prev)=>{
            return value;
        })
    }

    const handleChangePassword=(e)=>{
        const {name, value} = e.target;
        setPassword((prev)=>{
            return value;
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/director/camps');
        }
    }, [isAuthenticated, isloading]);

    if (isloading) {
        return <Loader />
    } else {

        return (
            <div className='login'>

                <div className='loginBackground'>
                    <img src="/loginHero.png" alt="" />
                    <div className='loginForm'>
                        <h1>
                            Login to your CampID Account
                        </h1>
                        <div className='loginInput'>
                            <label htmlFor="">Email Address</label>
                            <input type="email" style={{
                                fontSize:'20px'
                            }} onChange={(e)=>handleChangeEmailAdd(e)}/>
                        </div>
                        <div className='loginInput'>
                            <label htmlFor="">Password</label>
                            <input type="password" style={{
                                fontSize:'20px'
                            }} onChange={(e)=>handleChangePassword(e)} />
                        </div>
                        
                        <Button width={'450px'} height={'48px'} onClick={handleSubmit}>Login</Button>
                        <p>Reset Password</p>

                    </div>
                    <div className='loginButton'>
                        <p>Don’t have an account?</p>
                        <Button width={'450px'} height={'48px'} background={'white'} color='#ec6f00' onClick={() => navigate("/parent-athlete-signup")}>Parent/Athlete Signup</Button>
                        <Button width={'450px'} height={'48px'} background={'white'} color='#ec6f00' onClick={() => navigate("/campdirectorsignup")}>Camp Director Signup</Button>
                    </div>
                </div>
            </div>
        )
    }
}

    export default Login;