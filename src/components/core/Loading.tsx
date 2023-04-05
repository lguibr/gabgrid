import React from "react";

type LoadingProps = { message?: string };

function Loading({ message = "test" }: LoadingProps) {
  console.log();
  return <div>{message ?? "loading"}</div>;
}

export default Loading;
