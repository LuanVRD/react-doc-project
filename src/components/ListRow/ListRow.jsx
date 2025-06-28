import './style.css'
import cn from 'classnames';

export default function ListRow({ name, value, stocked }) {
    return (
        <div className='row'>
            <div className={cn('column', { missing: !stocked })}>{name}</div>
            <div className='column'>{value}</div>
        </div >
    );
}