import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  return {};
}


export default function Home() {
  return <div><h1>ASDsadafgwsfg</h1><Welcome /></div>
}
