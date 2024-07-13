import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../Login/Login.css";
import BackgroundImage from "../../assets/images/background-2.png";
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);
    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    const handlePassword = () => {};

    return (
        <div className="sign-in__wrapper" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="sign-in__backdrop"></div>

            {/* Form */}
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="h4 mb-2 text-center">Sign In</div>
                {
                    show ? (
                        <Alert
                            className="mb-2"
                            variant="danger"
                            onClose={() => setShow(false)}
                            dismissible
                        >
                            Incorrect username or password.
                        </Alert>
                    ) : (
                        <div />
                    )
                }
                
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="checkbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                {!loading ? (
                    <Button className="w-100" variant="primary" type="submit">
                        Log In
                    </Button>
                ) : (
                    <Button className="w-100" variant="primary" type="submit" disabled>
                        Logging In...
                    </Button>
                )}

                <div className="d-grid justify-content-end">
                    <Button
                        className="text-muted px-0"
                        variant="link"
                        onClick={handlePassword}
                    >
                        Forgot password?
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;
