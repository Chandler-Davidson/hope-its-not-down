import { useState, useEffect } from "react";
import { isSiteOnline } from "../isSiteOnline";

export default function (props: {url: string}) {
  const [status, setStatus] = useState("DOWN");

  useEffect(() => {
    function handleChange(isSiteOnline: boolean) {
      setStatus(isSiteOnline ? "UP" : "DOWN");
    }

    setInterval(() => {
      isSiteOnline(props.url, handleChange);
    }, 2000);

    isSiteOnline(props.url, handleChange);
  });

  return (
    <div>
      <p><strong>{status}</strong> - {props.url}</p>
    </div>
  );
}
