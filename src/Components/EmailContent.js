export default function EmailContent() {
    return (
        <>
            <div title="Email Content"></div>
            <label for="type">Type</label>
            <select id="type">
                <option value={1}>Sales Order</option>
                <option value={2}>Sales Quote</option>
            </select>
        </>
    );
}