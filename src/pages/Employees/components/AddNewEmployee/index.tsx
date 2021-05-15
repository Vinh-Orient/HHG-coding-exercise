import { useCallback, useState } from "react";
import { Button, Modal, Form } from "antd";
import EmployeeForm from "./components/EmployeeForm";
import { post } from "api";

const { useForm } = Form;

type addNewEmployeeType = {
  onRecallAPI: () => void;
};

const AddNewEmployee = ({ onRecallAPI }: addNewEmployeeType) => {
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [employeeForm] = useForm();

  const onCreateEmployee = useCallback(
    async (values: any) => {
      try {
        await post("employees", values);
        onRecallAPI();
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
    [onRecallAPI]
  );

  return (
    <div className="employees--add-new">
      <Button
        onClick={() => setIsDisplayModal(true)}
        className="employees--add-new__button"
      >
        + New
      </Button>
      <Modal
        visible={isDisplayModal}
        onCancel={() => setIsDisplayModal(false)}
        title="Add employee"
        footer={null}
      >
        <EmployeeForm
          employeeForm={employeeForm}
          onCreateEmployee={onCreateEmployee}
        />
      </Modal>
    </div>
  );
};

export default AddNewEmployee;
