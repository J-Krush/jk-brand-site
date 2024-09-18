import { useState } from 'react';
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";


const ContactForm = () => {

  const [formUserName, setFormUserName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
	// const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  // const [formBotField, setFormBotField] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

	const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
    
  const handleSubmit = e => {

    console.log('handle submit');
    console.log('name: ', formUserName);
    console.log('email: ', formEmail);
    console.log('message: ', formMessage);
    
    e.preventDefault();

    fetch("https://jkrush.dev/.netlify/functions/recaptcha-verify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ 
          formName: "contact-form",
          name: formUserName,
          phone: formPhone,
          email: formEmail,
          // subject: formSubject,
          message: formMessage,
          // "bot-field": formBotField
        })
      })
        .then(() => {
        // console.log('success');
        alert("Success!");
        setFormSubmitted(true);
      })
        .catch(error => {
        console.log('error: ', error);
        alert(error)
      });
  };

  return (
    <article
      className="relative flex w-full items-center  justify-center rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      /> {/* card shadow */}
      <div className="animate-on-scroll w-full">
        <div className="pt-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                placeholder="Your Name"
                className="w-full rounded-lg p-3 text-dark" 
                onChange={(e) => setFormUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
              <input
                id="phone"
                placeholder="Your Phone (optional)"
                className="w-full rounded-lg p-3 text-dark" 
                onChange={(e) => setFormPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg p-3 text-dark" 
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                placeholder="Your message"
                className="w-full rounded-lg p-3 text-dark"
                onChange={(e) => setFormMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base" 
             onClick={(e) => handleSubmit(e)}
             >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default function Connect() {
  
  return (
    <>
      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <AnimatedText
              text="Let's Connect"
              className="mb-8 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <p className="font-medium mb-8 text-center">
                I love collaborating. Got an idea or project? Let&apos;s make something awesome together!
          </p>

          <div className="flex w-full items-start justify-between md:flex-col">
            <ContactForm/>
          </div>
        </Layout>
      </article>
    </>
  );
}
