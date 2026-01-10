// src/components/Card.jsx

// We define 'title', 'description', and 'isGold' as props

export default function Card({ title, description, price, isGold = false }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
}