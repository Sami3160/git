type SubjectProps = {
    name: string;
    totalC: number;
    questionC:number;
    notesC:number;
    onlineRefC:number; 
}

function Subject({name,totalC, questionC, notesC, onlineRefC}: SubjectProps) :React.JSX.Element{
    return (
        <div className="card bg-white p-2 rounded-lg shadow-2xl ">
            <div className="title text-2xl font-bold">{name}</div>
            <div className="list-none flex flex-col">
                <div className="text-sm">Total Files: {totalC}</div>
                <div className="text-sm">Question Sets: {questionC}</div>
                <div className="text-sm">Notes: {notesC}</div>
                <div className="text-sm">Available Notes: {onlineRefC}</div>
            </div>
            <div className="content text-lg cursor-pointer text-center">View Notes</div>
        </div>
    )
}
export default Subject;