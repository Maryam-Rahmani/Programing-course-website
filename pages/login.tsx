import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import { LoginInfo } from '../types/types'
import { clearMessage } from "../store/slices/message";
import { AppDispatch } from "../types/types"
import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../store/slices/actions/login.action';

const LoginForm: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInfo>()
    const [formValue, setFormValue] = useState<LoginInfo>({
      email: "",
      password: "",
    })

    const { isLoggedIn } = useSelector((state:any) => state.auth);
    const { message } = useSelector((state:any) => state.message);
    console.log(message)
  
    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const onSubmit = () =>{
        console.log(formValue) 
        dispatch(login(formValue))
        .unwrap()
        .then(() => {
            console.log(message)
            console.log('ok')
        })
        .catch(() => {
            console.log(message)
            console.log('no')
        });
        formValue.email =  ""
        formValue.password =  ""
    }

   
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                    type="email"
                    value={formValue.email}
                    {...register("email",
                        { required: 'please inter email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'invalid email address'
                            }
                        }
                    )}
                    onChange={e => setFormValue({...formValue, email:(e.target.value)})}
                    autoComplete="email"
                    />
                    {errors.email && <div className='alert alert-danger'>{errors.email?.message}</div>}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        value={formValue.password}
                        {...register("password",
                            { required: 'please inter password',
                                minLength: {
                                    value: 8,
                                    message: 'password must be at list 8 character'
                                }
                            }
                        )}
                        onChange={e => setFormValue({...formValue, password:(e.target.value)})}
                    />
                    {errors.password && <div className='alert alert-danger'>{errors.password?.message}</div>}
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-primary mt-4 float-start"
                data-testid="submit-button"
            >
                login
            </button>
        </form>
    )
 }

export default LoginForm