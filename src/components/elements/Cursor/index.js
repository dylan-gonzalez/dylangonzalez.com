import React, { useEffect, useState } from 'react'
import classNames from "classnames";
import './Cursor.css';

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
}

const Cursor = () => {
   

    const [position, setPosition] = useState({x: 0, y: 0})
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    
    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    if (typeof navigator !== "undefined" && isMobile()) {
        return null;

    }

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    
    }

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    }

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("span").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    }

    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    }

    const onMouseEnter = () => {
        setHidden(false);
    }

    const onMouseLeave = () => {
        setHidden(true);
    }

    const onMouseDown = () => {
        setClicked(true);
    }

    const onMouseUp = () => {
        setClicked(false);
    }

    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered
        },
    );

    return (
        <div>
            <div className = {cursorClasses} style = {{
                left: `${position.x}px`,
                top: `${position.y}px`
                }}></div>
        </div>
        
    )
}

export default Cursor;
