import { useState } from "react";

export default function EmailContent() {

    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleTypeChange = (e) => {
        setSubject("new subject");
        setBody("new body");
    }

    return (
        <>
            <div title="Email Content"></div>
            <label for="type">Type</label>
            <select id="type" onChange={handleTypeChange}>
                <option value={1}>Sales Order</option>
                <option value={2}>Sales Quote</option>
            </select>
            <br />
            <label for="subject">Subject</label>
            <input data-testid="subject" id="subject" value={subject} />
            <br />
            <label for="body">Body</label>
            <textarea data-testid="body" id="body" value={body}></textarea>
            <br />
            <button>Update</button>
        </>
    );
}