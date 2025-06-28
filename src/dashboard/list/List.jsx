import './style.css'
import ListHead from '../../components/ListHead/ListHead'
import ListRow from '../../components/ListRow/ListRow'

export default function List({ data }) {
    const categoryObject = data.reduce((acc, item) => {
        const category = acc.find(c => c.category === item.category);

        if (!category) {
            acc.push({
                category: item.category,
                items: [item]
            });
        } else {
            category.items.push(item);
        }

        return acc;
    }, []);

    var rows = categoryObject.map(x =>
        <div key={x.category}>
            <ListHead key={x.category} name={x.category} />
            {x.items.map(y =>
                <ListRow key={y.name} name={y.name} value={y.price} stocked={y.stocked} />
            )}
        </div>
    );

    return (
        <>
            {rows}
        </>
    );
}