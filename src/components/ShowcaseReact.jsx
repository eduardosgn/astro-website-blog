import { useState } from "react";

function Showcase() {
    const [name, setName] = useState('Eduardo');

    return (
        <h2>Showcase component in ReactJS | using useState - {name}</h2>
    );
}

export default Showcase;