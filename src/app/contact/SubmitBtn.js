"use client";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-800 text-white p-2 rounded-md"
      disabled={pending}
    >
      {pending ? "Submitting ..." : "Submit"}
    </button>
  );
}
