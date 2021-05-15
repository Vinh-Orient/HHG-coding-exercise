import { Table, TablePaginationConfig } from "antd";
import { DEFAULT_TABLE_PAGINATION } from "config/constant";
import { useGetEmployees } from "hooks/useGetEmployees";
import { useCallback, useEffect, useState } from "react";
import columns from "./components/columns";

type EmployeeTableType = {
  effect: number;
};

function EmployeeTable({ effect }: EmployeeTableType) {
  const {
    employeeCollection,
    totalEmployees,
    isLoading,
    loadEmployeeCollection,
  } = useGetEmployees();
  const [localEffect] = useState<number>(0);

  useEffect(
    function () {
      loadEmployeeCollection();
    },
    [loadEmployeeCollection]
  );

  useEffect(
    function () {
      if (effect > localEffect) {
        loadEmployeeCollection();
      }
    },
    [effect, loadEmployeeCollection, localEffect]
  );

  const onChangePagination = useCallback(
    function ({ current }: TablePaginationConfig) {
      loadEmployeeCollection({
        page: current,
      });
    },
    [loadEmployeeCollection]
  );

  return (
    <div className="employees__table">
      <Table
        rowKey="id"
        bordered
        loading={isLoading}
        columns={columns}
        dataSource={employeeCollection}
        size="middle"
        pagination={{
          ...DEFAULT_TABLE_PAGINATION,
          total: totalEmployees,
        }}
        onChange={onChangePagination}
      />
    </div>
  );
}

export default EmployeeTable;
