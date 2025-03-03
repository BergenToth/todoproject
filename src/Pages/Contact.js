function Contact() {
  return (
    <div className="contact-form">
      <h1>Contact</h1>
      
      <form>
        <label htmlFor="f-name">First Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="l-name">Last Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default Contact;