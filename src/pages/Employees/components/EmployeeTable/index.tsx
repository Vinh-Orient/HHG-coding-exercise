import { Table, TablePaginationConfig } from "antd";
import { get } from "api";
import { useCallback, useEffect, useState } from "react";
import columns from "./components/columns";

type employeeTableType = {
  effect: number;
};

const EmployeeTable = ({ effect }: employeeTableType) => {
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [localEffect] = useState(0);

  const onHandleSetEmployees = useCallback(async (page = 1, limit = 5) => {
    setIsLoading(true);
    try {
      const { data: apiResponse } = await get("employees", {
        order: "desc",
        sortBy: "createdAt",
        page,
        limit,
      });
      setTotal(apiResponse.total);
      setEmployees(apiResponse.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    onHandleSetEmployees();
  }, [onHandleSetEmployees]);

  useEffect(() => {
    if (effect > localEffect) {
      onHandleSetEmployees();
    }
  }, [effect, localEffect, onHandleSetEmployees]);

  const onChangePagination = useCallback(
    ({ current }: TablePaginationConfig) => {
      console.log("current :>> ", current);
      onHandleSetEmployees(current);
    },
    [onHandleSetEmployees]
  );

  return (
    <div className="employees__table">
      <Table
        rowKey="id"
        bordered
        loading={isLoading}
        columns={columns}
        dataSource={employees}
        size="middle"
        pagination={{
          pageSize: 5,
          total,
        }}
        onChange={onChangePagination}
      />
    </div>
  );
};

export default EmployeeTable;
