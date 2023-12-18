"use client";

import { useRouter } from "next/navigation";

const Button = (props: { route: any; icon: any; name: any }) => {
  const router = useRouter();

  return (
    <button
      className="m-2 px-4 pt-4 flex flex-col justify-end items-center space-y-2 hover:border-b-2 hover:pt-2 hover:pb-1 hover:-translate-y-1 transition-all duration-100"
      onClick={() => router.push(props.route)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        {props.icon}
      </svg>
      <div className="font-mono">{props.name}</div>
    </button>
  );
};

export default Button;
