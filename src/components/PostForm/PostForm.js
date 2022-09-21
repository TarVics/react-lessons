import {useForm} from "react-hook-form";

import css from "./PostForm.module.css";

function PostForm({addPost}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = post => {
        addPost(post).then(() => reset());
    }

    return (
        <>
            <div className="layout-row">
                <form className={css.PostForm} onSubmit={handleSubmit(onSubmit)}>
                    <input className={css.formInput} {...register("title", { required: true })}/>
                    <button className={css.formButton}>ADD</button>
                </form>
            </div>
            {errors.title && <div className="layout-row">This field is required</div>}
        </>
    )
}

export { PostForm }