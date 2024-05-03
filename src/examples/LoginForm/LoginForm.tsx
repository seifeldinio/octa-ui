import {
  //  Box,

  Button,
  Input,
  // Input,
  // Text
} from "@/components";
// import { Input } from "@/components/Input";

export const LoginForm = () => {
  return (
    <div className="w-[270px]">
      <h1 className="font-bold text-2xl mb-2">Ahlan! 👋</h1>

      <p className="text-[#636363] mb-6">Login to your account.</p>

      <Input type="text" id="username" label="Username" className="mb-5" />

      <Input id="password" type="password" label={"Password"} />

      <Button type="submit" variant={"material"} className="mt-5 w-full">
        Login
      </Button>
    </div>
  );
};
