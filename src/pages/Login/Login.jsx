import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth";


export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const login = (e)=>{
        const user = e.target.username.value
        signIn(user, () => navigate(fromPage, {replace: true}))
    }
    
    return (
        <main className={box}>
            <h1 className={title}>Login:</h1>
            <form className={form} onSubmit={(event)=>login(event)}>
                <label className={name}>
                    Name: <input type="text" name='username' className={input} autoComplete="off"/>
                </label>
                <button type='submit' className={button}>LOGIN</button>
            </form>
        </main>
    );
};

const box ='flex flex-col justify-center'
const title ='font-bold text-2xl text-left mb-4'
const form ='flex justify-center items-end'
const name ="flex items-end"
const input ='border-b-[1px] border-black outline-none px-2'
const button ='font-bold black text-white text-sm p-1 px-2 active:bg-purple-900'


