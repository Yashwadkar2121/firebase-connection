import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function Home() {
  const messagRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messagRef.current.value);

    let data = {
      message: messagRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <label htmlFor="message">Enter Message</label>
        <input type="text" id="message" ref={messagRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
