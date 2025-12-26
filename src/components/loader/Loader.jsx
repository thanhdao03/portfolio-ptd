import { FiLoader } from "react-icons/fi";

function LoaderComponent() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-light dark:bg-primary-dark">
      <FiLoader className="w-14 h-14 animate-spin text-primary" />
    </div>
  );
}

export default LoaderComponent;
