import './style.css'

export default function ListHead({ name }) {
    return (
        <div className="tittle">
            <span>{name}</span>
        </div>
    );
}