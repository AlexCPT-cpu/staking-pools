import { ButtonProps } from "..";
import { Loader2 } from "lucide-react";

const Button = ({ children, loading, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="active:scale-95 px-4 py-2 flex justify-center items-center text-center rounded-md transition-colors focus:outline-none 
    focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
    bg-[#005AFF] text-white"
    >
      {loading ? (
        <Loader2 className="h-4 w-4 mx-2 my-1 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
