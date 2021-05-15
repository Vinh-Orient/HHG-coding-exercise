import { Button, Form, FormInstance, Input } from "antd";

const { Item } = Form;

type employeeFormType = {
  onCreateEmployee: (values: any) => void;
  employeeForm: FormInstance;
};

const EmployeeForm = ({ onCreateEmployee, employeeForm }: employeeFormType) => {
  return (
    <Form
      labelCol={{
        sm: { span: 4 },
      }}
      wrapperCol={{
        sm: { span: 20 },
      }}
      onFinish={onCreateEmployee}
      form={employeeForm}
      className="employees--form"
    >
      <Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input employee name!" }]}
      >
        <Input />
      </Item>
      <Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input employee email!" }]}
      >
        <Input />
      </Item>
      <Item
        label="Position"
        name="position"
        rules={[{ required: true, message: "Please input employee position!" }]}
      >
        <Input />
      </Item>
      <Item className="employees--form--item">
        <Button type="primary" htmlType="submit">
          Add new
        </Button>
      </Item>
    </Form>
  );
};

export default EmployeeForm;
