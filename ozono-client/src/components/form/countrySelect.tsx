function CountrySelect({
  handleBlur,
  handleChange,
  name,
  id,
  values,
}: {
  handleBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  values: string;
  name: string;
  id: string;
}) {
  return (
    <select
      onBlur={handleBlur}
      onChange={handleChange}
      name={name}
      id={id}
      value={values}
      className="select select-bordered w-full max-w-full bg-white text-black">
      <option disabled selected>
        Elige su país
      </option>
      <option value="Argentina">Argentina 🇦🇷</option>
      <option value="Brasil">Brasil 🇧🇷</option>
      <option value="Chile">Chile 🇨🇱</option>
      <option value="Uruguay">Uruguay 🇺🇾</option>
      <option value="Paraguay">Paraguay 🇵🇾</option>
      <option value="Ecuador">Ecuador 🇪🇨</option>
      <option value="Venezuela">Venezuela 🇻🇪</option>
      <option value="Colombia">Colombia 🇨🇴</option>
      <option value="Mexico">Mexico 🇲🇽</option>
    </select>
  );
}

export default CountrySelect;
