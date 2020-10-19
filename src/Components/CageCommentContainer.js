import React from "react"

export default function( {cageComments} ){

    return(
        <section>
            {
                cageComments.map( cageComment =>{
                    return(
                        <div class="comment">
                            <p>{ cageComment }</p>
                            <button>X</button>
                        </div>
                    )
                } )
            }
        </section>
    )
}