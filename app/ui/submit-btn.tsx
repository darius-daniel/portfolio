import { useFormStatus } from "react-dom"
import { PulseLoader } from "react-spinners";

export default function SendMessage() {
  const { pending } = useFormStatus();
  return (<button
    type="submit"
    className="py-2 px-4 bg-ash disabled:bg-ash hover:bg-secondary-1 text-white hover:font-medium rounded-lg w-fit lg:w-4/5 lg:mx-auto"
    disabled={pending}
  >
    {pending ? <PulseLoader size={12} color="#fff" /> : "submit-message"}
  </button>)
}
