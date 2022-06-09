import { useAppDispatch } from "../hooks";
import { setUser } from "../features/userSlice";
import { useState, useEffect } from "react";
import { useLoginMutation } from "../features/apiSlice";

const initialState = {
  email: "",
  password: "",
};
let user = {};
function Login() {
  const [values, setValues] = useState(initialState);

  const [loginUser, { data: data }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    loginUser(values);
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
    }
  }, [data]);

  return (
    <section className="h-full bg-gray-200 gradient-form md:h-screen">
      <div className="container h-full px-6 py-12">
        <div className="flex flex-wrap items-center justify-center h-full text-gray-800 g-6">
          <div className="xl:w-10/12">
            <div className="block bg-white rounded-lg shadow-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="px-4 lg:w-6/12 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="w-48 mx-auto"
                        src="/src/public/images/logo.png"
                        alt="logo"
                      />
                      <h4 className="pb-1 mt-1 mb-12 text-xl font-semibold">
                        Preschool App
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4">Lütfen hesabınıza giriş yapınız</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Şifre"
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                        />
                      </div>
                      <div className="pt-1 pb-1 mb-12 text-center">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #22c1c3,#fdbb2d,#4c8e55 )",
                          }}
                          onClick={() => handleSubmit()}
                        >
                          Giriş Yap
                        </button>
                        <a className="text-gray-500" href="#!">
                          Şifremi Unuttum
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #22c1c3,#fdbb2d,#4c8e55 )",
                  }}
                >
                  <div className="px-4 py-6 text-white md:p-12 md:mx-6">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
