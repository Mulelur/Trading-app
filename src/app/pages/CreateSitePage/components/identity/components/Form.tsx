import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';

const FormCreate: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        label="Full Name"
        name="fullname"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          style={{
            width: '26rem',
          }}
        />
      </Form.Item>
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        label="Last Name"
        name="lastname"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          style={{
            width: '26rem',
          }}
        />
      </Form.Item>
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        label="Date Of Birth"
        name="date_of_birth"
        rules={[
          { required: true, message: 'Please select your date of birth!' },
        ]}
      >
        <DatePicker
          style={{
            width: '26rem',
          }}
          defaultValue={dayjs('2015/01/01', dateFormat)}
          format={dateFormat}
        />
      </Form.Item>
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        label="Country"
        name="country_of_citizenship"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Select
          style={{ width: '26rem' }}
          showSearch
          placeholder="country of citizenship"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'tom',
              label: 'Tom',
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        label="Funding"
        name="funding"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Select
          style={{ width: '26rem' }}
          showSearch
          placeholder="funding source"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'tom',
              label: 'Tom',
            },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default FormCreate;
