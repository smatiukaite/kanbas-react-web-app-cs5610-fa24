export default function TernaryOperator() {
    let loggedIn = true;
    let true1 = false;
    return (
        <div id="wd-ternary-operator">
            <h4>Logged In</h4>
            {loggedIn ? <p>Welcome</p> : <p>Please login</p>} <hr />
            {true1 && <p>true1</p>} 
            {/* if it's false, it won't render, if it's true, it will */}
        </div>)
}