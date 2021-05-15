import { useCallback, useState } from "react";
import { Button, Modal, Form, Spin } from "antd";

import EmployeeForm from "./components/EmployeeForm";
import { usePostEmployee } from "hooks/usePostEmployee";
import { IEmployee } from "types/employee/interface";

const { useForm } = Form;

type AddNewEmployeeType = {
  onRecallAPI: () => void;
};

function AddNewEmployee({ onRecallAPI }: AddNewEmployeeType) {
  const { isLoading, postEmployee } = usePostEmployee();
  const [isDisplayModal, setIsDisplayModal] = useState<boolean>(false);
  const [employeeForm] = useForm();

  const onCreateEmployee = useCallback(
    function (employee: IEmployee) {
      postEmployee(employee);
      onRecallAPI();
    },
    [onRecallAPI, postEmployee]
  );

  return (
    <div className="employees--add-new">
      <Button
        onClick={function () {
          setIsDisplayModal(true);
        }}
        className="employees--add-new__button"
      >
        + New
      </Button>
      <Modal
        visible={isDisplayModal}
        onCancel={function () {
          setIsDisplayModal(false);
        }}
        title="Add employee"
        footer={null}
      >
        <Spin spinning={isLoading}>
          <EmployeeForm
            employeeForm={employeeForm}
            onCreateEmployee={onCreateEmployee}
          />
        </Spin>
      </Modal>
    </div>
  );
}

export default AddNewEmployee;
