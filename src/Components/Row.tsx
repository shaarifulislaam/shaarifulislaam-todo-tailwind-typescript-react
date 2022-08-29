type Todo = {
    id: string,
    task : string,
    isComplete : boolean
}
type todoProps ={
    todo : Todo;
}
export const Row = ({todo:{task , isComplete}}: todoProps) =>{
    <div>
        <p>{task}</p>
        <button aria-level="Delete a todo" onClick={()=> null}>X</button>
        <input type="checkbox" checked={isComplete}  onChange={()=>null}/>
    </div>
}