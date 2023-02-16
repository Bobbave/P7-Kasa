import React, {useState, useRef, useEffect} from "react";

export default function Collapse({props, title}) {
    const chevronUp = <i className="fa-solid fa-chevron-up"> </i>;
    const chevronDown = <i className="fa-solid fa-chevron-down"></i>;

    const [height, setHeight] = useState();
    const [toggle, setToggle] = useState(false);

    const refHeight = useRef();

    const toggleState = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        setHeight(`${refHeight.current.scrollHeight}px`);
    }, []);

    const displayProps = () => {
        if (typeof props === "object") {
            return (
                <ul>
                    {props.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            return <p>{props}</p>;
        }
    };

    return (
        <div className="collapse">
            <div onClick={toggleState} className="collapse_show">
                <h3>{title}</h3>
                <div className="collapse_chevron">
                    {toggle ? chevronUp : chevronDown}
                </div>
            </div>
            <div
                ref={refHeight}
                className={
                    toggle ? "collapse_off animation" : "collapse_off"
                }
                style={{ height: toggle ? `${height}` : "0px" }}
            >
                {displayProps()}
            </div>
        </div>
    );
}