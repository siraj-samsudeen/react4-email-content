import { useState } from "react";

export default function EmailContent() {

    const [type, setType] = useState("1");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleTypeChange = (e) => {
        setSubject("new subject");
        setBody("new body");
    }

    const handleCancel = () => {
        setSubject("");
        setBody("");
        setType("");
    }

    return (
        <>
            <div title="Email Content"></div>
            <label for="type">Type</label>
            <select id="type" value={type} onChange={handleTypeChange}>
                <option value={""}></option>
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
            <button onClick={handleCancel}>Cancel</button>
        </>
    );
}