import { createContext, useState, Dispatch, SetStateAction } from "react";

export type RequestDataContextType = {
  requestData: any[];
  setRequestData: Dispatch<SetStateAction<any[]>>;
};

const RequestDataContext = createContext<RequestDataContextType>({
  requestData: [],
  setRequestData: () => {},
});

export const RequestDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [requestData, setRequestData] = useState<any[]>([]);

  const contextValue: RequestDataContextType = {
    requestData,
    setRequestData,
  };

  return (
    <RequestDataContext.Provider value={contextValue}>
      {children}
    </RequestDataContext.Provider>
  );
};

export default RequestDataContext;
