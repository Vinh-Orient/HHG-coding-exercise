import { useCallback, useState } from "react";

import { post } from "api";
import { IEmployee } from "types/employee/interface";

const usePostEmployee = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postEmployee = useCallback(
    async ({ name, email, position }: IEmployee) => {
      setIsLoading(true);
      try {
        await post("employees", {
          name,
          email,
          position,
        });
      } catch (error) {
        console.log("error :>> ", error);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    postEmployee,
    isLoading,
  };
};

export { usePostEmployee };
