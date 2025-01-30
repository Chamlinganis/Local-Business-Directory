import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthService } from "../services/auth.api";

export default function EmailVerificationPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      AuthService.verifyEmail(token)
        .then(() => {
          navigate("/login"); // Redirect to login after successful verification
        })
        .catch(() => {
          navigate("/error"); // Redirect to error page if verification fails
        });
    }
  }, [searchParams, navigate]);

  return <div>Verifying your email...</div>;
}