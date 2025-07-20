import React from 'react'; 

function Contact() {
    return (
        <div id="contact" className="contact-section">
            <h3 className="contact-title">Get in Touch</h3>
            <form
                action="https://formspree.io/f/mrbleyln" // replace with your actual Formspree ID
                method="POST"
                className="conact-form"
            >
                <label>
                    Name
                    <input type="text" name="name" required />
                </label>

                <label>
                    Email
                    <input type="email" name="email" required />
                </label>

                <label>
                    Message
                    <textarea name="message" rows="5" required />
                </label>

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact; 