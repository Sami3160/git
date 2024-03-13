import React from 'react';

function Footer(){
    return (
        <footer className="bg-gray-900 text-white py-4 ">
            <div className="container mx-auto grid grid-rows-4 sm:grid-cols-4 sm:grid-rows-1">
                <div className="links row-span-1 sm:col-span-1">
                    <h2>Imp Links</h2>
                    <ul>
                        <li>Instutute Membership</li>
                        <li>GIT Social Accountability</li>
                        <li>Collage prospectus</li>
                    </ul>
                </div>
                <div className="quicklinks row-span-1 sm:col-span-1">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Webmail</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="portals row-span-1 sm:col-span-1">
                    <h2>Portals</h2>
                    <ul>
                        <li>Mumbai University</li>
                        <li>Directorate Of Technical Eductaion</li>
                        <li>NAAC</li>
                    </ul>
                </div>
                <div className="contact row-span-1 sm:col-span-1">
                    <h2>Contact</h2>
                    <h3>Gharda Institute Of Technology</h3>
                    <ul>
                        <li>9422152788 Registrar</li>
                        <li>9822765402 Academics</li>
                        <li>9420376273 Accounts</li>
                        <li>7798312364 Exam</li>
                        <li>Email: principal@git-india.edu.in</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;