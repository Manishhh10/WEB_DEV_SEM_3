import { data } from "react-router-dom";

function Form() {
  const SimpleForm = () => {
    const onSubmit = (data) => {};
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Welcome Form!
        </h2>
        <div className="flex flex-col w-[300px]">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            type="text"
            placeholder="First Name"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            type="text"
            placeholder="Middle Name"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            type="text"
            placeholder="Email"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            type="text"
            placeholder="Password"
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
