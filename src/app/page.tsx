

import Button from "@/components/ui/Button/Button";

import HomePage from "@/pages/main/Home/Home";

export default function Home() {
  return <div>

    <Button text="hello world" className="bg-red-500" />

    <Button outlet={true} text="hello world" className="" />



    <h1 className="w-40 h-40 bg-primary text-smoke">Hello boss</h1>
  </div>
}
