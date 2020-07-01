import React from 'react'
import { ComponentWrpper, Span, H1 } from '../../Helpers/Styles/Error/404'
export const notFound404 = () => {
    return (
        <ComponentWrpper data-testid="wrapper" >
            <H1>404</H1>
            <Span>Page not found</Span>
        </ComponentWrpper>
    )
}