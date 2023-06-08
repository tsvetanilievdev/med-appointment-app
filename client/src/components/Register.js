import React from 'react';
import { Button, Form, Input } from 'antd';
function Register() {
    return (
        <div className="authentication">
            <div className="authentication-form card p-3">
                <h1 className="card-title">Nice to meet you</h1>
                <Form layout="vertical">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name',
                            },
                        ]}
                    >
                        <Input
                            className="override"
                            placeholder="Enter your name"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username',
                            },
                        ]}
                    >
                        <Input
                            className="override"
                            placeholder="Enter your username"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password',
                            },
                        ]}
                    >
                        <Input.Password style={{ className: 'override' }} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary primary-button" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Register;
