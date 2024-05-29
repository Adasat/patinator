import './Card.css'
export const Card = ({student, onClick}) => {

    

    const handleClick = () => {
        onClick(student.id); // Pasar el ID del estudiante al hacer clic
    };

    return (
        <div className={student.hasPato ? 'cardPato' : 'card'} onClick={handleClick}>
            <h2>{student.name}</h2>
        </div>
    )
}