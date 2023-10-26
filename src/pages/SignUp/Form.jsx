import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { AuthContext } from "../../hooks/useAuth";

const Form  = () => {

    // const { login } = useContext(AuthContext)

    const [ sending, setSending ] = useState(false)

    const [ details, setDetails ] = useState({
        username: "",
        email: "",
        password: ""
    })

    // Function to handle change of input value
    const handleChange = (e) => {
        const { name, value } = e;
        setDetails({
            ...details,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
            e.preventDefault();
            setSending(true);
            await fetch(`http://josh565.pythonanywhere.com/api/register`, {
               method: 'POST',
               body: JSON.stringify(details),
               headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                  "Accept": "application/json",
               },
            })
               .then((response) => response.json())
               .then((data) => {
                    console.log(data)
                    setSending(false)
                    // login()
                    setDetails({
                        username: "",
                        email: "",
                        password: ""
                    })
               })
               .catch((err) => {
                    console.log(err);
               });
    }

    return (
        <div className="bg-white h-full py-10 w-full flex justify-center rounded-xl">
            <div className="w-full px-8">
                <h3 className="text-center text-dark text-2xl font-bold mb-10">Create Account</h3>
                <form className="w-full flex flex-col space-y-8" onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" placeholder="Name" onChange={handleChange} className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email Address" className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <input type="password" name="password" onChange={handleChange} id="password" placeholder="Password" className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <p className="text-center text-dark/[.7] mb-6">By clicking on “Create Account”, I agree to Weblify’s terms & condition and Privacy policy</p>
                    <div onClick={handleSubmit}>
                        <Button text="Create Account"/>
                    </div>
                    {sending && <ReactLoading type={"spin"} color={"#ffffff"} height={'1rem'} width={'1rem'} />}
                    <p className="text-center">Already have an Account? <Link className="text-blue font-bold" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Form;