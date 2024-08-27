import React from 'react';

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  border: '1px solid #E5E7EB',
  borderRadius: '8px',
  backgroundColor: '#F3F4F6',
  color: '#000',
  cursor: 'pointer',
  margin: '10px',
  transition: 'background-color 0.3s, color 0.3s',
};

const Hackathon: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: 'url(https://i.ibb.co/jgPCpYr/zechub-hackathon-4.png)',
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-4">Zechub Hackathon</h1>
      <p className="text-xl text-center mb-8">
        Welcome to the Zechub Hackathon! Join the challenge and showcase your skills in building with Zcash. Here’s everything you need to know:
      </p>

      <h2 className="text-2xl font-semibold text-center mb-6">Challenge Overview</h2>

      <h3 className="text-xl font-semibold mb-4">Run a Zcash Node</h3>
      <p className="mb-4">Set up and run a Zcash node. To ensure you understand the fundamentals of the Zcash network:</p>
      <a href="https://zcash.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonStyle}
          className="hover:bg-blue-500 hover:text-white"
        >
          Read Zcash Documentation
        </button>
      </a>
      <a href="https://zcash.github.io/rpc/" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonStyle}
          className="hover:bg-blue-500 hover:text-white"
        >
          RPC Docs
        </button>
      </a>
      <p className="mb-8">Here is our guide to set up a zcashd node:</p>
      <a href="https://github.com/ZecHub/zechub/blob/main/site/guides/How_to_run_zcashd_on_Akash_Network.md" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonStyle}
          className="hover:bg-blue-500 hover:text-white"
        >
          Akash Network Guide
        </button>
      </a>

      <h3 className="text-xl font-semibold mt-8 mb-4">Create a Zcash App</h3>
      <p className="mb-4">Develop an application that leverages the Zcash network. Zcash enables fast private payments (~75 seconds) and encrypted messages up to 512 bytes per transaction.</p>
      <p className="mb-4">Here are some ideas:</p>
      <a href="https://github.com/ZecHub/zechub/blob/main/site/contribute/Build_on_Zcash.md" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonStyle}
          className="hover:bg-blue-500 hover:text-white"
        >
          Build on Zcash
        </button>
      </a>
      <p className="mb-8">It could be a simple game that requires Zcash payment to play or something more complex like a messenger. Be creative—think about privacy, security, and usability!</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Show Us How It Works</h3>
      <p className="mb-8">Document your process and demonstrate how your application functions. This can be in the form of a simple markdown document / illustrated representation of the system or some combination.</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Voting Process</h3>
      <p className="mb-4">The <a href="https://zechub.wiki/dao" target="_blank" rel="noopener noreferrer">ZecHub DAO</a> will have an informal public poll on all entries submitted for the hackathon. To be considered in the voting, post your completed project to the Zcash Global Discord server:</p>
      <a href="https://discord.gg/zcash" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonStyle}
          className="hover:bg-blue-500 hover:text-white"
        >
          Join Zcash Global Discord
        </button>
      </a>

      <h3 className="text-xl font-semibold mt-8 mb-4">DAO Vote Date:</h3>
      <p className="mb-8">The voting will take place on October 12th. Make sure your project is posted before this date to be considered.</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Prizes</h3>
      <ul className="mb-8">
        <li>1st Prize: 15 ZEC</li>
        <li>2nd Prize: 5 ZEC</li>
        <li>3rd Prize: 5 ZEC</li>
      </ul>

      <p className="font-semibold mb-8">Documentation is Required</p>
      <p className="mb-8">To be eligible for a prize, you must provide thorough documentation of your project. This includes the setup, execution, and final presentation of your Zcash app.</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">How to Participate</h3>
      <p>If you need assistance with your project, feel free to give us a shout in the Zcash Global Discord. Akash Network Zcash nodes can be requested as well.</p>
    </div>
  );
};

export default Hackathon;
