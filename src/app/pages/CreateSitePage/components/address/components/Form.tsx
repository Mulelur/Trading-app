import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';

const AddressForm: React.FC = () => {
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
        label="Address 1"
        name="address1"
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input
          style={{
            width: '26rem',
          }}
        />
      </Form.Item>
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        label="Address 2"
        name="address2"
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input
          style={{
            width: '26rem',
          }}
        />
      </Form.Item>
      <Form.Item
        style={{ paddingBottom: '0.1rem', marginBottom: '0.4rem' }}
        label="City"
        name="city"
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
        label="State / Province"
        name="state"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Select
          style={{ width: '26rem' }}
          showSearch
          placeholder="State / Province"
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
        label="Country"
        name="country_of_citizenship"
        rules={[{ required: true, message: 'Please input your country!' }]}
      >
        <Select
          style={{ width: '26rem' }}
          showSearch
          placeholder="State / Province"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'limpopo',
              label: 'Limpopo',
            },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default AddressForm;
