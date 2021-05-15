import { useCallback, useState } from "react";

import { get } from "api";
import { IEmployee } from "types/employee/interface";
import { DEFAULT_PAGINATION } from "config/constant";

type LoadEmployeeCollectionType = {
  page?: number;
  limit?: number;
};

const useGetEmployees = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [employeeCollection, setEmployeeCollection] = useState<IEmployee[]>([]);
  const [totalEmployees, setTotalEmployees] = useState<number>(0);

  const loadEmployeeCollection = useCallback(async function ({
    limit,
    page,
  }: LoadEmployeeCollectionType = DEFAULT_PAGINATION) {
    setIsLoading(true);
    try {
      const { data: apiResponse } = await get("employees", {
        page,
        limit,
        order: "desc",
        sortBy: "createdAt",
      });
      setEmployeeCollection(apiResponse?.data);
      setTotalEmployees(apiResponse?.total);
    } catch (error) {
      console.log("error :>> ", error);
    }
    setIsLoading(false);
  },
  []);

  return {
    totalEmployees,
    employeeCollection,
    isLoading,
    loadEmployeeCollection,
  };
};

export { useGetEmployees };
