import { ArrowRight, User, Mail, Calendar } from "lucide-react";
import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { getData } from "@/context/userContext";

const Profile = () => {
  const { user } = getData();
  const navigate = useNavigate();

  return (
    <div className="relative w-full md:h-[700px] h-screen bg-green-50 overflow-hidden">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">

            {/* Header */}
            <div className="space-y-2">
              <Badge
                variant="secondary"
                className="mb-4 text-green-800 border border-green-200"
              >
                <User className="w-3 h-3 mr-1" />
                Your Profile
              </Badge>

              <h1 className="text-green-600 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Manage Your Account
              </h1>

              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                View and manage your personal details and account settings.
              </p>
            </div>

            {/* Profile Card */}
            {user && (
              <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-green-100">

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <User className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {user.username}
                  </h2>
                </div>

                <div className="space-y-4 text-left">

                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span>{user.email || "No email provided"}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span>
                      Joined{" "}
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "Recently"}
                    </span>
                  </div>

                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <Button
                    onClick={() => navigate("/edit-profile")}
                    className="bg-green-600 hover:bg-green-500"
                  >
                    Edit Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="text-green-800 border-green-200"
                  >
                    Go to Dashboard
                  </Button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
