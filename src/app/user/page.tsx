"use client";

import { useEffect, useState } from "react";

import Client from "./client";

export default function Home() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // For POST, PATCH, and PUT requests
      body: JSON.stringify({ key: "value" }),
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  });

  return (
    <main>
      <Client data={data} />
    </main>
  );
}
