import {useForm} from "react-hook-form";

function PostForm({addPost}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = post => {
        addPost(post).then(() => reset());
    }

    return (
        <>
            <div className="layout-row" style={{width: '100%'}}>
                <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                    <input {...register("title", { required: true })} style={{width: 'calc(100% - 8px)'}}/>
                    <button style={{width: '100%'}}>ADD</button>
                </form>
            </div>
            {errors.title && <div className="layout-row">This field is required</div>}
        </>
    )
}

export { PostForm }