import React from "react";
import css from './DataCard.module.css';
import {DataCard} from "./DataCard";

function DataLayout({width, columns, className, children, ...props}) {
    const classList = [css['layout']];
    const style = {};
    let childWidth;

    if (className) classList.push(className);

    let name = css['width-' + width];
    if (name) {
        classList.push(name);
    } else {
        style.width = width;
    }

    name = css['columns-' + columns];
    if (name) {
        classList.push(name);
    } else {
        const cols = +columns;
        if (!isNaN(cols)) {
            childWidth = 'calc(' + Math.round(100 / columns)  + '% - 4px);'
        }
    }

    console.log(children);

    return (
        <div style={style} className={classList.join(' ')} {...props}>
            {React.Children.map(children, child => {
                return (childWidth && child.constructor === DataCard)
                    ? React.cloneElement(child, {width: childWidth}) : child
            })}
        </div>
    )
}

export {DataLayout}