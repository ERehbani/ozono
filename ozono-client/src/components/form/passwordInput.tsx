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
    <div className="max-w-sm">
      <label className="input input-bordered flex items-center gap-2 bg-white">
        <img src={img} alt="password" className="w-5"/>
        <input
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
          className="grow"
          value={values}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default PasswordInput;
