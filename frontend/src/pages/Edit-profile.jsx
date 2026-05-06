import { ArrowRight, User, Mail } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { getData } from "@/context/userContext";

const EditProfile = () => {
  const { user } = getData();
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔥 Replace with your actual API call
      console.log("Updated Data:", { username, email });

      // Example:
      // await axios.put("/api/user/update", { username, email });

      alert("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full md:h-[700px] h-screen bg-green-50 overflow-hidden">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">

            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-green-600 text-3xl font-bold sm:text-4xl">
                Edit Your Profile
              </h1>
              <p className="text-muted-foreground">
                Update your account details below
              </p>
            </div>

            {/* Form Card */}
            <form
              onSubmit={handleUpdate}
              className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-green-100 text-left"
            >

              {/* Username */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="flex items-center border rounded-lg px-3">
                  <User className="w-5 h-5 text-green-600 mr-2" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full py-2 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="flex items-center border rounded-lg px-3">
                  <Mail className="w-5 h-5 text-green-600 mr-2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-center space-x-4 pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-500"
                >
                  {loading ? "Updating..." : "Update Profile"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/profile")}
                  className="text-green-800 border-green-200"
                >
                  Cancel
                </Button>
              </div>

            </form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
