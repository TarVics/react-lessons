import {useForm} from "react-hook-form";

import css from "./UserForm.module.css"

function UserForm({addUser}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = user => {
        addUser(user).then(() => reset())
    }

    return (
        <>
            <div className="layout-row" >
                <form className={css.UserForm} onSubmit={handleSubmit(onSubmit)}>
                    <input className={css.formInput} {...register("name", { required: true })} />
                    <button className={css.formButton}>ADD</button>
                </form>
            </div>
            {errors.name && <div className="layout-row">This field is required</div>}
        </>
    )
}

export { UserForm }