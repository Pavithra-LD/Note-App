import React from 'react'
import {useSelector} from 'react-redux'
import NoteItem from './NoteItem'

const NoteList=(props)=>{
    const notes=useSelector((state)=>{
        return state.notes
    })
    return(
        <div>
            {notes.length==0 ?            
                <>
                    <h2>No Note found</h2>
                    <p>Add your notes</p>
                </>
            :(
                <>
                <h2>My Notes -{notes.length}</h2>
                {notes.map((note)=>{
                    return <NoteItem 
                    key={note._id}
                    {...note}
                    />
                })}
                </>
            )    
            }
        </div>
    )
}
export default NoteList