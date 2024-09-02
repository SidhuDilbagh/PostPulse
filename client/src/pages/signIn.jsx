import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function signIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const change = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("missing fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok===true){
        navigate('/');
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(data.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tl from-orange-200 to-amber-100 ">
      <div className="rounded-xl mx-10 px-12 py-8 bg-white flex flex-col md:flex-row items-cente gap-10">
        <div className="flex-1 flex items-center flex-col">
          <Link
            to="/"
            className="whitespace-nowrap text-6xl font-bold px-2  py-2
          bg-gradient-to-tl from-orange-400 to-amber-200
         hover:bg-rose-950 border-y-2 rounded-full text-rose-950 hover:text-orange-100"
          >
            Post Pulse
          </Link>
          <p className="my-2 font-semibold">Welcome to PostPulse!</p>
          <p className="text-center">
            Join our vibrant community of writers, thinkers, and creators. Share
            your unique voice with the world, connect with like-minded
            individuals, and explore a diverse range of topics. Whether you're
            here to write, read, or discover new perspectives, PostPulse is your
            space to pulse with creativity. Sign up today and start your journey
            with us!
          </p>
        </div>
        <div className="flex-1 whitespace-nowrap flex flex-col gap-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmission}>
            <div>
            </div>
            <div>
              <Label value="email" />
              <TextInput
                type="email"
                placeholder="your.email@example.com"
                id="email"
                onChange={change}
              />
            </div>
            <div>
              <Label value="password" />
              <TextInput
                type="password"
                placeholder="enter a strong password"
                id="password"
                onChange={change}
              />
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-tl from-orange-400 to-amber-200 text-rose-950"
              outline disabled={loading}
            >
             { loading?(
                <Spinner size='sm' />
              ):
              "signIn"}
            </Button>
          </form>
          <div>
            Not registered yet?
            <Link to="/signIn"> signUp</Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5 max-w-sm whitespace-normal" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
