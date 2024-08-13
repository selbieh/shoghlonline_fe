import { message } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const AuthGuard = (WrappedComponent: React.ComponentType) => {
  return (props: {}) => {
    const router = useRouter();
    const { status } = useSession({
      required: true,
      onUnauthenticated() {
        // The user is not authenticated, handle it here.
        message.warning("You need to login first");
        router.push("/auth/login");
      },
    });
    if (status === "authenticated") {
      // Render the wrapped component if authenticated
      return <WrappedComponent {...props} />;
    } else if (status === "loading") {
      <div className="">loading</div>;
    } else {
      return null;
    }
  };
};

export default AuthGuard;
