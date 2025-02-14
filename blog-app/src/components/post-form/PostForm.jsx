import React, { useCallback , useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import RTE from "../RTE";
import Select from "../Select";
import appwriteService from "../../appwrite/config.js";
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Loader from "../../pages/Loader.jsx";
import { clearServiceError, Loading } from "../../store/authSlice.js";

// This functional component accepts a post prop.
// If post is provided, it means the user is editing an existing post.
// If post is undefined, the user is creating a new post.
export default function PostForm({ post }) {
  // while using useForm we don't need to manage many states for input fields
  // For More - https://react-hook-form.com/docs/useform
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "Active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const serviceError = useSelector((state) => state.auth.serviceError);
  const loading = useSelector((state) => state.auth.loading)
  const dispatch = useDispatch()

  const submit = async (data) => {
    
    // If post exists, update the existing post.
    if (post) {
      dispatch(Loading(true))
    if(serviceError){
      dispatch(Loading(false))
      toast.error(serviceError, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        
        setTimeout(() => {
          dispatch(clearServiceError())
        }, 5000);
    }
      // Uploads a new image if provided.
      const file = data.featuredImage[0]
        ? await appwriteService.uploadFile(data.featuredImage[0])
        : null;

      // Deletes the old image (if a new one is uploaded).
      if (file) {
        await appwriteService.deletFile(post.featuredImage);
      }

      // Updates the post in the database
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      // if the post is updated successfully then i will redirect the user
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
        dispatch(Loading(false))
      }
    }
    // If post does not exist, create a new post.
    else {
      dispatch(Loading(true))
      // Uploads an image to Appwrite.
      const file = await appwriteService.uploadFile(data.featuredImage[0]);
      if(serviceError){
        dispatch(Loading(false))
        toast.error(serviceError, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          
          setTimeout(() => {
            dispatch(clearServiceError())
          }, 5000);
          
      }


      if (file) {
        const fileId = file.$id;
        // Stores the image's fileId in data.featuredImage.
        data.featuredImage = fileId;
        // Saves the post to the database.
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          // Redirects to the newly created post.
          navigate(`/post/${dbPost.$id}`);
          dispatch(Loading(false))
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
        .replace(/\s+/g, "-"); // Replace spaces with hyphens
    }
    return "";
  }, []);
  

  React.useEffect(() => {
    // Watches the title field
    watch((value, { name }) => {
      if (name === "title") {
        // Automatically updates the slug field in real-time.
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
  }, [watch, slugTransform, setValue]);

  return (
    <>
    {loading ? (<Loader/>) : (
      <form onSubmit={handleSubmit(submit)} className="flex md:flex-row flex-col  md:flex-wrap ">
      <div className="md:w-2/3 w-full px-2">
        <Input
          label="Title"
          placeholder="Title"
          className="mb-1"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 10,
              message: "Title must be greater than 10 characters",
            },
            maxLength: {
              value: 100,
              message: "Title must be less than 100 characters",
            },
          })}
        />
        {errors.title && (
          <p className="text-red-600 text-sm mt-1 text-center">{errors.title.message}</p>
        )}

        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
          rules={{ required: "Content is required" }}
        />
      </div>
      <div className="md:w-1/3 w-full md:mt-0 mt-5 px-2">
        <Input
          label="Featured Image"
          type="file"
          className="mb-1"
          accept="image/png, image/jpg, image/jpeg"
          {...register("featuredImage", {
            required: { value: !post, message: "Image is required" },
          })}
        />
        {errors.featuredImage && (
          <p className="text-red-600 text-sm mt-1 text-center">
            {errors.featuredImage.message}
          </p>
        )}
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["Active", "Inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full hover:bg-blue-600 hover:transition-all"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
    )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      
    </>
  );
}
