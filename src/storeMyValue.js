import web3 from "./web3";
//access local copy to contract deployed on rinkeby
//use your own contract address
const address = "0xe3d4f559627fd2db18402e4538066a04903140ae";

//use abi from contract

const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "x",
        type: "string"
      }
    ],
    name: "set",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "get",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
