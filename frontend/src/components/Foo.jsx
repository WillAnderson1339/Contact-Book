import '../css/ContactCard.css'

function FooCard({contact}) {
  return (
    <div className="contact-card">
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
    </div>
  )
}

export default FooCard
