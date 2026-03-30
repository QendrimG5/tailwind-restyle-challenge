import { Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  return (
    <section id="contact">
      <div>
        <div>
          <span>Contact</span>
          <h2>Get in touch</h2>
          <p>
            Have questions? We would love to hear from you. Send us a message and
            we will respond as soon as possible.
          </p>
        </div>

        <div>
          <div>
            <div>
              <div>
                <Mail size={22} />
              </div>
              <div>
                <h4>Email</h4>
                <p>hello@flowboard.io</p>
              </div>
            </div>
            <div>
              <div>
                <Phone size={22} />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <div>
                <MapPin size={22} />
              </div>
              <div>
                <h4>Office</h4>
                <p>123 Innovation Drive, San Francisco, CA 94107</p>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <div>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="enterprise">Enterprise Sales</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
