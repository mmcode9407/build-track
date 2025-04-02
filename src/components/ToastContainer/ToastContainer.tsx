import { ToastContainer as BaseToastContainer } from "react-toastify";

import { useTheme } from "@/components/Theme/ThemeProvider";

const ToastContainer = () => {
  const { themeMode } = useTheme();

  return (
    <BaseToastContainer
      pauseOnFocusLoss={false}
      autoClose={2000}
      position="bottom-right"
      theme={themeMode}
    />
  );
};

export { ToastContainer };
