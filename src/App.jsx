import { useState } from 'react'
import './App.css'
import Filter from './dashboard/filter/Filter'
import List from './dashboard/list/List'

export default function App() {
  const data = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
    { category: 'Fruits', price: '$3', stocked: true, name: 'Mango' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Carrot' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Starfruit' },
    { category: 'Dairy', price: '$5', stocked: true, name: 'Milk' },
    { category: 'Fruits', price: '$4', stocked: true, name: 'Pineapple' },
    { category: 'Vegetables', price: '$3', stocked: false, name: 'Eggplant' },
    { category: 'Dairy', price: '$3', stocked: true, name: 'Cheese' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Banana' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Broccoli' },
    { category: 'Dairy', price: '$4', stocked: false, name: 'Yogurt' }
  ];

  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className='box'>
      <Filter data={data} filteredData={filteredData} setFilteredData={setFilteredData} />
      <List data={filteredData} />
    </div>
  )
}
