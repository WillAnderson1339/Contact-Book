import '../css/ContactCard.css'

function ContactCard( {contact} ) {
  return (
    <div className="contacts">
        <article className="contact-card">
            <img src={contact.image} alt={contact.image} />
            <h3>{contact.name}</h3>
            <div className="info-group">
                <img src='/Phone.png' alt='phone image' />
                <span>{contact.phone}</span>
            </div>
            <div className="info-group">
                <img src='/Email.png' alt='email image' />
                <span>{contact.email}</span>
            </div>
        </article>
    </div>
  )
}

export default ContactCard

