import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://frontend-take-home-service.fetch.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
          credentials: "include",
        }
      );

      if (response.ok) {
        console.log("Authentication successful!");
        navigate("/search");
      } else {
        setError("Invalid credentials. Please try again.");
        console.log("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("An error occurred:", error);
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-bg">
          <div className="login-logo-title">Dog Finder</div>
        </div>
        
        <div className="form-content">
          
          <form onSubmit={handleSubmit}>
            <h3 className="form-text">Login</h3>
            
            <label className="form-label">Name:</label>
            <input
              type="text"
              placeholder="Please enter your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="form-label">Email:</label>
            <input
              type="text"
              placeholder="Please enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="login-btn form-text">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;