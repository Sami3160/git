type SubjectProps = {
    subjectName: string;
}

function Subject({ subjectName }: SubjectProps) :React.JSX.Element{
    return (
        <div className="card bg-white p-2 rounded-lg shadow-2xl">
            <div className="title text-2xl font-bold">{subjectName}</div>
            <div className="content text-lg">View Notes</div>
        </div>
    )
}
export default Subject;