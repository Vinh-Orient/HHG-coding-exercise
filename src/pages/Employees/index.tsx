import { useCallback, useState } from "react";
import AddNewEmployee from "./components/AddNewEmployee";
import EmployeeTable from "./components/EmployeeTable";
import LinkButtons from "./components/LinkButtons";

const EmployeesPage = () => {
  const [localEffect, setLocalEffect] = useState(0);

  const onRecallAPI = useCallback(() => {
    setLocalEffect(localEffect + 1);
  }, [localEffect]);

  return (
    <div className="employees">
      <h1>Employees page</h1>
      <AddNewEmployee onRecallAPI={onRecallAPI} />
      <EmployeeTable effect={localEffect} />
      <LinkButtons />
    </div>
  );
};

export default EmployeesPage;
