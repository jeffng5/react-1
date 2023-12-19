import React, { useState } from 'react'
import {MyForm} from "./Forms.js"







const Madlibs = ({noun, noun1, adjective, color}) => {
return (
<>
<h3> Madlib </h3>
<p> {noun} was with {noun1}
and they were very {adjective}. Their favorite color is {color}
</p>
</>
)
}

export {Madlibs}