import { useEffect } from "react"
import { FaUserCircle, FaEnvelope } from "react-icons/fa"
import { useFormik } from "formik"
import UpdatePassword from "./UpdatePassword"
import { useMutation, useQuery } from "@tanstack/react-query"
import { updateProfileAPI, getProfileAPI } from "../../services/users/userService"
import AlertMessage from "../../components/Alert/AlertMessage"

const UserProfile = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
    },
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data) => {
        })
        .catch((error) => console.error("Update error:", error))
    },
  })
  const {
    data: profileData,
    isLoading: isProfileLoading,
    isError: isProfileError,
    error: profileError,
    refetch,
  } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfileAPI,
    enabled: true,
    staleTime: 300000,
    onSuccess: (data) => {
      if (data) {
        formik.setValues({
          username: data.username || "",
          email: data.email || "",
        })
      }
    },
    onError: (err) => {
      console.error("Profile fetch error:", err)
    },
  })

  // Mutación para actualizar el perfil
  const mutation = useMutation({
    mutationFn: updateProfileAPI,
    mutationKey: ["update-profile"],
    onSuccess: () => {
      refetch()
    },
  })

  const { mutateAsync, isPending, isError, error, isSuccess } = mutation

  // Efecto para asegurarse de que los datos se carguen correctamente
  useEffect(() => {
    if (profileData && (!formik.values.username || !formik.values.email)) {      
      formik.setValues({
        username: profileData.username || "",
        email: profileData.email || "",
      })
    }
  }, [profileData])

  return (
    <>
      <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
        {isProfileLoading ? <AlertMessage type="loading" message="Loading profile..." />:
        <>
        <h1 className="mb-2 text-2xl text-center font-extrabold">
          Welcome
          <span className="text-gray-500 text-sm ml-2">{formik.values.email}</span>
        </h1>        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile</h3>        
        {isPending && <AlertMessage type="loading" message="Updating..." />}
        {isError && <AlertMessage type="error" message={error?.response?.data?.message || "Error updating profile"} />}
        {isSuccess && <AlertMessage type="success" message="Updated successfully" />}        
        {isProfileError && (
          <AlertMessage type="error" message={profileError?.response?.data?.message || "Error loading profile"} />
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* User Name Field */}
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-3xl text-gray-400" />
            <div className="flex-1">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                {...formik.getFieldProps("username")}
                type="text"
                id="username"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your username"
              />
            </div>
            {formik.touched.username && formik.errors.username && (
              <span className="text-xs text-red-500">{formik.errors.username}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-gray-400" />
            <div className="flex-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <span className="text-xs text-red-500">{formik.errors.email}</span>
            )}
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isPending || isProfileLoading}
            >
              {isPending ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
        </>
      }
      </div>
      <UpdatePassword />
    </>
  );
};

export default UserProfile;