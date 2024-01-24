import React from "react";

const Contact = () => {
  return (
    <div name="Contact">
      <div className="bg-[#350905] text-white py-8 px-4 md:px-16">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h6 className="font-bold uppercase pt-2"> Solutions</h6>
            <ul>
              <li className="py-1">🌟 Precision Motion Controls:</li>
              <li className="py-1">⚙️ Automation Excellence:</li>
              <li className="py-1">🔬 Biomedical Solutions</li>
              <li className="py-1">🖥️ PLC Programming and Retrofitting</li>
              <li className="py-1">🔧 Specialized Machines:</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold uppercase pt-2">Contact us</h6>
            <ul>
              <li className="py-1">
                <a href="tel:+917876274221">+91-7876274221</a>
              </li>
              <li className="py-1">
                <a href="tel:+918894855061">+91-8894855061</a>
              </li>
              <li className="py-1">
                <a href="tel:+916283706588">+91-6283706588</a>
              </li>
            </ul>
            <h6 className="font-bold uppercase pt-2"> Emails</h6>
            <div className="flex flex-col items-center md:items-start md:pl-4"> {/* Centered container with padding */}
              <ul>
                <li className="py-1">
                  <a href="mailto:INFOKANNANSOLUTIONS@gmail.com" className="block md:inline text-sm">INFOKANNANSOLUTIONS@gmail.com</a>
                </li>
                <li className="py-1">
                  <a href="mailto:KANNANAUTOMATIONANDSOLUTIONS@gmail.com" className="block md:inline text-sm">KANNANAUTOMATIONANDSOLUTIONS@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-full lg:col-span-2">
            <p className="font-bold uppercase"></p>
            <iframe
              title="Map of Kannan Automation and Solutions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.5753008911743!2d76.85863787538106!3d30.92649317449136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8b4a1ffd622b%3A0xbbfbc0035cbe53c3!2sKannan%20Automation%20and%20Solutions!5e0!3m2!1sen!2sin!4v1704541029926!5m2!1sen!2sin"
              width="100%"
              height="300px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
