import {useState} from "react";
import {Form, useNavigate} from 'react-router-dom';
import "./Login.css"
import {login} from "../../../Data/UserData";

export async function action({request}) {
    const formData = await request.formData();
    const username = formData.get('username');
    const password = formData.get('password');
    return await login(username, password);
}

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="login">
            <h1>Login</h1>
            <Form method='post'>
                <input
                    type="username"
                    placeholder="Email"
                    id='username'
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="Button" type="submit">Login</button>
                <p onClick={() => {navigate('/reset')}}>
                    Forget Password? Click here to reset!
                </p>
                <p onClick={() => {navigate('/register')}}>
                    Don't have an account? Register now!
                </p>
            </Form>
        </div>
    );
}

export default Login;