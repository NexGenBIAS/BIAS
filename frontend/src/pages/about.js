import React from 'react';
import "./default-about.css";

const About = () => {
    const wwoData = [
        ["AI-Powered Solutions", "Our platform utilizes cutting-edge AI technology to generate precise and high-quality solutions to a wide range of CSE assignments and experiments."],
        ["Editable Solutions", "Users have the flexibility to edit and customize the generated solutions according to their specific requirements, ensuring personalized learning experiences."],
        ["PDF Downloads", "Once customized, users can easily download their edited solutions in PDF format, making it convenient to access and reference offline."]
    ];

    const otData = [
        ["Mayur Hiwale", "Lead Developer/Back-end Lead"],
        ["Om Patil", "Lead Developer/Front-end Lead"],
        ["Shashank Bhave", "Front-end Developer"],
    ]

    return (
        <div className="about" style={{ margin: "0 10% 50px 10%", textAlign: "justify" }}>
            <h1><center>About BIAS (<u>B</u>ot for <u>I</u>nstant <u>A</u>ssignment <u>S</u>olutions)</center></h1>
            <h2>Our Mission</h2>
            <p>
                BIAS is dedicated to revolutionizing the way computer science and engineering (CSE) students learn and complete assignments and experiments. Our mission is to provide a platform powered by artificial intelligence (AI) that offers accurate and comprehensive solutions to CSE problems, empowering students to learn effectively and excel in their studies.
            </p>

            <h2>What We Offer</h2>
            <table>
                <tbody>
                    {wwoData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Our Team</h2>
            <p>
                BIAS is developed and maintained by a team of dedicated computer science professionals and AI experts passionate about enhancing the educational experience for CSE students. Meet the minds behind our platform:
            </p>
            <table>
                <tbody>
                    {otData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Our Vision</h2>
            <p>
                At BIAS, we envision a future where learning complex CSE concepts is accessible, engaging, and enjoyable for students worldwide. Through continuous innovation and collaboration, we strive to become the go-to platform for CSE students seeking reliable and efficient assignment and experiment solutions.
            </p>

            <h2>Contact Us</h2>
            <p>
                We welcome your feedback, questions, and inquiries. Feel free to reach out to us via email at [contact@email.com] or through our [Contact Page]. We value your input and are committed to providing the best possible experience for our users.
            </p>

            <h2>Connect With Us</h2>
            <p>
                Stay updated on the latest news, features, and updates from BIAS. Follow us on [Social Media Platforms] for valuable insights, tips, and announcements.
            </p>
            GitHub<br />
            Discord<br />
            <p>
                Thank you for choosing BIAS as your trusted resource for CSE assignment and experiment solutions. We look forward to supporting your academic journey!
            </p>
        </div>
    )
};

export default About;
