interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name?: string;
}

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  name,
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-4 py-3 outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
          }
          bg-white text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-white`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
