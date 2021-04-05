import React, { ReactElement } from "react";
import * as RM from "react-modifier";
import "./styles.scss";

export interface __cname__Theme extends RM.IModifiableTheme {
    
}

export interface __cname__Props extends RM.IModifiableProps<__cname__Theme> {

}

export class C extends RM.ModifiableComponent<__cname__Theme, __cname__Props> {
    renderThemed(): ReactElement {
        return (
            <div>
                
            </div>
        );
    }
}

export const def__cname__Theme: __cname__Theme = {
    head: RM.createModifier('')
}