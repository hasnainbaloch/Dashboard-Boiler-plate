import React, { useState } from "react";
import "./login.scss";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { login } from "../../../utils";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    const isLogin = login(values);
    isLogin ? history.push("/dashboard") : history.push("/");
  };

  return (
    <div className="login-wrap">
      <div className="form">
        <div className="content">
          <h2>Please login into your account</h2>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <div className="input-wrap">
              <Input
                bordered={false}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <div className="input-wrap">
              <Input
                bordered={false}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </div>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Recover password
            </a>
          </Form.Item>

          <Form.Item>
            <div className="login-btn-wrap">
              <Button
                loading={false}
                shape="round"
                block
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </div>
            <Divider style={{ color: "#ffffff", borderColor: "#ffffff" }}>
              Or continue with
            </Divider>
            <div className="social-media-logins">
              <FacebookOutlined className="social-media-icon" />
              <GoogleOutlined className="social-media-icon" />
              <TwitterOutlined className="social-media-icon" />
            </div>
            Or <span>register now!</span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
