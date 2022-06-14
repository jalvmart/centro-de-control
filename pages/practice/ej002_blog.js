//incompleto 13/06/2022 falta actualizar. ver bitácora día 13/06/2022

import { useState } from "react";

export default function Create() {

    const [title, setTitle] = useState('')

    return (
        <div className="create">
            <h2>Crear un Nuevo Blog</h2> 
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea required></textarea>
                <label>Blog author:</label>
                <select>
                    <option value="Juan A.">Juan A.</option>
                    <option value="María G.">María G.</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
            </form>    
        </div>
    )
}