function PasswordInput({
  handleBlur,
  handleChange,
  values,
  name,
  id,
  placeholder,
  img,
}: {
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: string;
  name: string;
  id: string;
  placeholder: string;
  img: string;
}) {
  return (
    <div>
      <div className="relative">
        <label className="input input-bordered flex items-center gap-2 bg-white">
          <input
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
            className="py-3 px-4 ps-11 block w-full bg-white border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            value={values}
            name={name}
            id={id}
            placeholder={placeholder}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <img src={img} className="w-5" />
          </div>
        </label>
      </div>
    </div>
  );
}

export default PasswordInput;
