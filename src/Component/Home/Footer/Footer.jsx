
import { FaFacebook, FaInstagram, FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer className="footer p-10 text-neutral-content bg-gray-800">
            <div className="flex w-full  justify-around items-center mx-auto ">
  <div className="flex-col items-center">
    <div className="flex-row justify-center">

        <div className="avatar">
            <div className="w-16 mask mask-hexagon ">
                <img src="https://i.ibb.co/N73ybkf/4b9f847d-d9b4-4518-9964-124373a4afa9.jpg" alt="Avatar" />
            </div>
        </div>
    </div>
    <div className="flex-row  -translate-x-9 space-x-11">
        <div className="avatar">
            <div className="w-16 mask mask-hexagon">
                <img src="https://i.ibb.co/Qd5wKb3/2e5a8f95-6d3b-4417-ba32-cc71b638b4a8.jpg" alt="Avatar" />
            </div>
        </div>
        <div className="avatar">
            <div className="w-16 mask mask-hexagon">
                <img src="https://i.ibb.co/2nKHJJs/894fc92c-b81b-4e16-a3fb-b72fe07fad22.jpg" alt="Avatar" />
            </div>
        </div>
    </div>
    <div className="flex-row justify-center">
        <div className="avatar">
            <div className="w-16 mask mask-hexagon">
                <img src="https://i.ibb.co/p1SyQwR/2e6d0398-6d4f-47de-a4f6-077c2646f441.jpg" alt="Avatar" />
            </div>
        </div>
    </div>
</div>



                <div>
               <h1 className="text-2xl font-semibold text-center text-white mb-4">community</h1>
               <p>Explore</p>
               <p>Resources</p>
               <p>Connect With Us</p>
               <p>Stay Connected</p>
               <p>Explore More</p>
                </div>


                <div>
                <h1  className="text-2xl font-semibold text-center text-white mb-4">Details About Us</h1>
                <p>Useful Info</p>
               <p>Follow Us</p>
               <p>Contact Us</p>
               <p>Social Media</p>
                </div>

               <div>
                <h1 className="text-2xl font-semibold text-center text-white mb-4">Follow Us</h1>
                 <div className="grid grid-cols-3 gap-5">
                <FaFacebook className="text-3xl"/>
                <FaInstagram  className="text-3xl"/>
                <FaXTwitter className="text-3xl"/>
                <FaLinkedinIn  className="text-3xl"/>
                <FaRedditAlien className="text-3xl"/>
                </div>
               </div>

            </div>

        </footer>
    );
};

export default Footer;