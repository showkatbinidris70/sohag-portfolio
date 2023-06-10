import React, {useState} from "react";

const Contact = () => {
    const contact_info = [
        {
            logo: "mail",
            text: "sohaginfo1@gmail.com"
        }, {
            logo: "logo-whatsapp",
            text: "+8801733745812"
        }, {
            logo: "location"
        },
    ];

    // form handle
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({
            ...values,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact
                    <span className="text-cyan-600">
                        {" "}Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

                <div className="mt-16 flex md:flex-row flex-col
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
                    <form className="flex flex-col flex-1 gap-5"
                        onSubmit={handleSubmit}
                        action="showkatbinidris70@gmail.com">
                        <input type="text" name="name"
                            value={
                                inputs.name || ""
                            }
                            onChange={handleChange}
                            placeholder="Your Name"/>
                        <input type="Email" name="email"
                            value={
                                inputs.email || ""
                            }
                            onChange={handleChange}
                            placeholder="Your Email Address"/>
                        <textarea placeholder="Your Message" name="textarea"
                            value={textarea}
                            onChange={handleChange}
                            rows={10}></textarea>
                        <button type="submit" className="btn-primary w-fit">Send Message</button>
                    </form>
                    <div className="flex flex-col  gap-7 ">
                        {
                        contact_info.map((contact, i) => (
                            <div key={i}
                                className="flex flex-row
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          text-left gap-4 flex-wrap items-center">
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                    <ion-icon name={
                                        contact.logo
                                    }></ion-icon>
                                </div>
                                <p className="md:text-base text-sm  break-words">
                                    {
                                    contact.text
                                } </p>


                            </div>
                        ))
                    }
                        <div className="google-map-code"
                            style={
                                {
                                    marginLeft: "4rem",
                                    marginTop: "-4rem"
                                }
                        }>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.782524042!2d87.70378100186713!3d23.48944602204458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1686305482213!5m2!1sen!2sbd" width="180" height="120" frameborder="0"
                                style={
                                    {border: 0}
                                }
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
