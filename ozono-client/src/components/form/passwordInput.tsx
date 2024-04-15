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
      <div className="flex">
        <div className="relative flex-1">
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values}
            name={name}
            type="password"
            id={`hs-strong-password-with-indicator-and-hint-in-popover ${id}`}
            className="py-3 px-4 ps-11 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder={placeholder}
          />
          <img
            src={img}
            alt="Password icon"
            className="absolute inset-y-0 left-0 flex items-center h-full w-9 ps-4 pointer-events-none"
          />
          <div
            id="hs-strong-password-popover"
            className="hidden absolute z-10 w-full bg-white shadow-md rounded-lg p-4 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
            <div
              id="hs-strong-password-in-popover"
              data-hs-strong-password='{
            "target": "#hs-strong-password-with-indicator-and-hint-in-popover",
            "hints": "#hs-strong-password-popover",
            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
            "mode": "popover"
          }'
              className="flex mt-2 -mx-1"></div>

            <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
              Your password must contain:
            </h4>

            <ul className="space-y-1 text-sm text-gray-500">
              <li
                data-hs-strong-password-hints-rule-text="min-length"
                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                <span className="hidden" data-check="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span data-uncheck="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                Minimum number of characters is 6.
              </li>
              <li
                data-hs-strong-password-hints-rule-text="lowercase"
                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                <span className="hidden" data-check="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span data-uncheck="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                Should contain lowercase.
              </li>
              <li
                data-hs-strong-password-hints-rule-text="uppercase"
                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                <span className="hidden" data-check="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span data-uncheck="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                Should contain uppercase.
              </li>
              <li
                data-hs-strong-password-hints-rule-text="numbers"
                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                <span className="hidden" data-check="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span data-uncheck="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                Should contain numbers.
              </li>
              <li
                data-hs-strong-password-hints-rule-text="special-characters"
                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                <span className="hidden" data-check="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span data-uncheck="">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                Should contain special characters.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
