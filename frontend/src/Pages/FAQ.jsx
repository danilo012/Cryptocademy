import { motion } from "framer-motion";
import Sidebar from "../Components/Sidebar";
import TabNavigation from "../Components/TabNavigation";

const FAQ = () => {
  return (
    <div className="bg-black ">
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden pt-6 md:pt-0">
        <Sidebar active={`faq`} />
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black"
        >
          <p className="text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3 px-2 md:px-4">
            F.A.Q
          </p>

          <div tabindex="0" className="collapse collapse-arrow  border-white border-b-2 mx-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-md font-medium text-white">
              Does it involve real money?
            </div>
            <div className="collapse-content text-gray-300">
              <p>No, cryptocademy offers it's users virtual usd to buy and sell crypto currency.</p>
            </div>
          </div>

          <div tabindex="0" className="collapse collapse-arrow  border-white border-b-2 mx-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-md font-medium text-white">
              How to deposit money into Cryptocademy?
            </div>
            <div className="collapse-content text-gray-300">
              <p>
                Cryptocademy is NOT a wallet, exchange or escrow service of any form. Please do not
                accept any offers from anyone claiming to provide you with a way to deposit anything
                onto the Cryptocademy website or Mobile App. The only deposit we will accept and
                wholeheartedly appreciate would be a kind donation from you to buy us a cup of
                coffee! You can find our donation addresses at the footer of our website.
              </p>
            </div>
          </div>

          <div tabindex="0" className="collapse collapse-arrow  border-white border-b-2 mx-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-md font-medium text-white">
              Can cryptocademy be trusted?
            </div>
            <div className="collapse-content text-gray-300">
              <p>
                Cryptocademy provides a real-time, risk-free trading simulator that allows you to
                msater crypto trading and investing at zero cost. Hone your skills and feel
                confident with crypto trading and investing.
              </p>
            </div>
          </div>

          <div tabindex="0" className="collapse collapse-arrow  border-white border-b-2 mx-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-md font-medium text-white">
              How can I contact support?
            </div>
            <div className="collapse-content text-gray-300">
              <p>
                You can email us at webdripdev@gmail.com or fill out the contact form on our
                website.
              </p>
            </div>
          </div>

          <div tabindex="0" className="collapse collapse-arrow  border-white border-b-2 mx-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-md font-medium text-white">
              What sources does Cryptocademy use for its data?
            </div>
            <div className="collapse-content text-gray-300">
              <p>Cryptocademy gets its cryptocurrency data from the Coingecko API.</p>
            </div>
          </div>

          <div tabindex="0" className="collapse collapse-arrow  border-white border-b-2 mx-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-md font-medium text-white">
              What are the future plans of Cryptocademy?
            </div>
            <div className="collapse-content text-gray-300">
              <p>
                We have plans to help users to learn more about cryptocurrency & trading. Currently
                we only have a global leaderboard with the top 100 users. We're planning to add a
                feature where users can create custom rooms and compete with their friends.
                <br />
                Do drop us an email at webdripdev@gmail.com with any suggestions or feedback that
                you may have for us. We would appreciate that!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default FAQ;
