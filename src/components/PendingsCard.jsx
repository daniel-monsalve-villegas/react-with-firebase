function PendingsCard({ pending }) {
  return (
    <div>
      <div>
        <h3>Priority</h3>
        <p>{pending.priority}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{pending.description}</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>{pending.email}</p>
      </div>
    </div>
  );
}

export default PendingsCard;
