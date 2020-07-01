import React from 'react'
import { ComponentWrpper, Span, H1 } from '../../Helpers/Styles/Error/404'
export const NotFound404 = () => {
    return (
        <ComponentWrpper data-testid="wrapper" >
            <H1 data-testid="header">404</H1>
            <Span data-testid="span">Page not found</Span>
        </ComponentWrpper>
    )
}