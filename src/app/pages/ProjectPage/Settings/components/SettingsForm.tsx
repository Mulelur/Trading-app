import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const SettingsForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      wrapperCol={{ span: 11 }}
      labelCol={{ span: 4 }}
      layout="vertical"
      name="nest-messages"
      size="large"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        name={['user', 'name']}
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        name={['user', 'name']}
        label="Last Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[{ type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingsForm;
