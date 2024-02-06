import React from 'react';
import "./default-about.css";

const About = () => {
    return (
        <div className="about" style={{ margin: "0 10% 50px 10%", textAlign: "justify" }}>
            <h1><center>About BIAS</center></h1>
            <h2><center>(<u>B</u>ot for <u>I</u>nstant <u>A</u>ssignment <u>S</u>olutions)</center></h2>
            <h2>Our Mission</h2>
            <p className="text-white">
                BIAS is dedicated to revolutionizing the way computer science and engineering (CSE) students learn and complete assignments and experiments. Our mission is to provide a platform powered by artificial intelligence (AI) that offers accurate and comprehensive solutions to CSE problems, empowering students to learn effectively and excel in their studies.
            </p>

            <h2>What We Offer</h2>
            <ul className="text-white">
                <li><strong className='inline-block text-left'>AI-Powered Solutions:</strong> Our platform utilizes cutting-edge AI technology to generate precise and high-quality solutions to a wide range of CSE assignments and experiments.</li>
                <li><strong className='inline-block text-left'>Editable Solutions:</strong> Users have the flexibility to edit and customize the generated solutions according to their specific requirements, ensuring personalized learning experiences.</li>
                <li><strong className='inline-block text-left'>PDF Downloads:</strong> Once customized, users can easily download their edited solutions in PDF format, making it convenient to access and reference offline.</li>
            </ul>

            <h2>Our Team</h2>
            <p className="text-white">
                BIAS is developed and maintained by a team of dedicated computer science professionals and AI experts passionate about enhancing the educational experience for CSE students. Meet the minds behind our platform:
            </p>
            <ul className="text-white">
                <li><strong className='inline-block text-left'>Mayur Hiwale:</strong> Lead Developer & Back-end Lead</li>
                <li><strong className='inline-block text-left'>Om Patil:</strong> Lead Developer & Front-end Lead</li>
                <li><strong className='inline-block text-left'>Shashank Bhave:</strong> Front-end Developer</li>
            </ul>

            <h2>Our Vision</h2>
            <p className="text-white">
                At BIAS, we envision a future where learning complex CSE concepts is accessible, engaging, and enjoyable for students worldwide. Through continuous innovation and collaboration, we strive to become the go-to platform for CSE students seeking reliable and efficient assignment and experiment solutions.
            </p>

            <h2>Contact Us</h2>
            <p className="text-white">
                We welcome your feedback, questions, and inquiries. Feel free to reach out to us via email at [contact@email.com] or through our [Contact Page]. We value your input and are committed to providing the best possible experience for our users.
            </p>

            <h2>Connect With Us</h2>
            <p className="text-white">
                Stay updated on the latest news, features, and updates from BIAS. Follow us on [Social Media Platforms] for valuable insights, tips, and announcements.
            </p>
            <a href="https://github.com/NexGenBIAS/BIAS" target="_blank">GitHub</a><br />
            <a href="https://discord.com/" target="_blank">Discord</a><br />
            <p className="text-white">
                Thank you for choosing BIAS as your trusted resource for CSE assignment and experiment solutions. We look forward to supporting your academic journey!
            </p>
        </div>
    )
};

export default About;
