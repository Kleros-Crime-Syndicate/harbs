/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  HarbergerAdsFactory,
  HarbergerAdsFactoryInterface,
} from "../../src/HarbergerAdsFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract HarbergerAds",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "_currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_collector",
        type: "address",
      },
    ],
    name: "CollectionCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collector",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061299d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634cc2ad8e14610030575b600080fd5b61004361003e366004610187565b610045565b005b60008b8b8b8b8b8b8b8b8b8b8b60405161005e90610115565b6100729b9a9998979695949392919061028f565b604051809103906000f08015801561008e573d6000803e3d6000fd5b5090507f474df8b2df399ae66b461e124d7b64cda0dc3b3a27de0a9068d6c46e1a962e71818d8d8d8d8d6040516100ff969594939291906001600160a01b0396871681526020810195909552604085019390935260608401919091528316608083015290911660a082015260c00190565b60405180910390a1505050505050505050505050565b61265a8061030e83390190565b80356001600160a01b038116811461013957600080fd5b919050565b60008083601f84011261015057600080fd5b50813567ffffffffffffffff81111561016857600080fd5b60208301915083602082850101111561018057600080fd5b9250929050565b60008060008060008060008060008060006101008c8e0312156101a957600080fd5b8b359a5060208c0135995060408c013598506101c760608d01610122565b97506101d560808d01610122565b965067ffffffffffffffff8060a08e013511156101f157600080fd5b6102018e60a08f01358f0161013e565b909750955060c08d013581101561021757600080fd5b6102278e60c08f01358f0161013e565b909550935060e08d013581101561023d57600080fd5b5061024e8d60e08e01358e0161013e565b81935080925050509295989b509295989b9093969950565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8b8152602081018b9052604081018a90526001600160a01b0389811660608301528816608082015261010060a082018190526000906102d1838201898b610266565b905082810360c08401526102e6818789610266565b905082810360e08401526102fb818587610266565b9e9d505050505050505050505050505056fe6101206040523480156200001257600080fd5b506040516200265a3803806200265a833981016040819052620000359162000238565b60c088905260808790526001600160a01b0380861660e05260a087905284166101005280516200006d906002906020840190620000a8565b50825162000083906004906020860190620000a8565b50815162000099906003906020850190620000a8565b5050505050505050506200034a565b828054620000b6906200030d565b90600052602060002090601f016020900481019282620000da576000855562000125565b82601f10620000f557805160ff191683800117855562000125565b8280016001018555821562000125579182015b828111156200012557825182559160200191906001019062000108565b506200013392915062000137565b5090565b5b8082111562000133576000815560010162000138565b80516001600160a01b03811681146200016657600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200019357600080fd5b81516001600160401b0380821115620001b057620001b06200016b565b604051601f8301601f19908116603f01168101908282118183101715620001db57620001db6200016b565b81604052838152602092508683858801011115620001f857600080fd5b600091505b838210156200021c5785820183015181830184015290820190620001fd565b838211156200022e5760008385830101525b9695505050505050565b600080600080600080600080610100898b0312156200025657600080fd5b8851975060208901519650604089015195506200027660608a016200014e565b94506200028660808a016200014e565b60a08a01519094506001600160401b0380821115620002a457600080fd5b620002b28c838d0162000181565b945060c08b0151915080821115620002c957600080fd5b620002d78c838d0162000181565b935060e08b0151915080821115620002ee57600080fd5b50620002fd8b828c0162000181565b9150509295985092959890939650565b600181811c908216806200032257607f821691505b602082108114156200034457634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516121cf6200048b60003960008181610417015281816107cc01528181610a3a01528181610f5b0152818161162d0152818161183401528181611aea0152611bd20152600081816104c1015281816106fc0152818161079d015281816108be01528181610962015281816109f801528181610afe01528181610bea01528181610e8001528181610f2e015281816111a6015281816112470152818161146c0152818161154901528181611600015281816118070152611abd0152600081816103330152818161062201528181610db001528181610fe90152818161108f0152818161114301528181611337015281816116bb015281816117890152818161186801526119ba01526000818161021d01528181610cb4015261195c0152600081816103dd01526110f301526121cf6000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c806370a0823111610104578063b88d4fde116100a2578063cf264e9a11610071578063cf264e9a146104a9578063e5a6b10f146104bc578063e6d28063146104e3578063e985e9c5146104f657600080fd5b8063b88d4fde14610462578063c397ae3914610470578063c87b56dd14610483578063ce3f865f1461049657600080fd5b8063913e77ad116100de578063913e77ad1461041257806395d89b4114610439578063a22cb46514610441578063a65e2cfd1461044f57600080fd5b806370a08231146103b8578063771a3a1d146103d85780638a784c4a146103ff57600080fd5b806318160ddd1161017c57806342842e0e1161014b57806342842e0e146103685780635a8b754d1461038957806362043bd81461039c5780636352211e146103a557600080fd5b806318160ddd1461032e57806320c5429b1461035557806323b872dd14610368578063379664041461037657600080fd5b8063081812fc116101b8578063081812fc14610262578063095ea7b31461028d57806311a7a4c0146102a25780631281311d1461031b57600080fd5b806301ffc9a7146101df57806304646a491461021857806306fdde031461024d575b600080fd5b6102036101ed366004611cd4565b6001600160e01b03191663861c59cd60e01b1490565b60405190151581526020015b60405180910390f35b61023f7f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161020f565b610255610504565b60405161020f9190611cfe565b610275610270366004611d53565b610596565b6040516001600160a01b03909116815260200161020f565b6102a061029b366004611d88565b6105d8565b005b6102e96102b0366004611d53565b600060208190529081526040902080546001820154600283015460038401546004909401546001600160a01b0390931693919290919085565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a00161020f565b6102a0610329366004611db2565b610612565b61023f7f000000000000000000000000000000000000000000000000000000000000000081565b6102a0610363366004611d53565b610dae565b6102a061029b366004611de4565b61023f610384366004611d53565b610fe5565b61023f610397366004611d53565b611069565b61023f61271081565b6102756103b3366004611d53565b61108b565b61023f6103c6366004611e20565b60016020526000908152604090205481565b61023f7f000000000000000000000000000000000000000000000000000000000000000081565b61023f61040d366004611d53565b6110e8565b6102757f000000000000000000000000000000000000000000000000000000000000000081565b610255611132565b6102a061029b366004611e4c565b6102a061045d366004611e83565b611141565b6102a061029b366004611eee565b6102a061047e366004611e83565b611335565b610255610491366004611d53565b6116b7565b6102a06104a4366004611d53565b611787565b6102a06104b7366004611e83565b611866565b6102757f000000000000000000000000000000000000000000000000000000000000000081565b6102a06104f1366004611f5d565b6119b8565b610203610270366004611fa9565b60606004805461051390611fdc565b80601f016020809104026020016040519081016040528092919081815260200182805461053f90611fdc565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b5050505050905090565b60405162461bcd60e51b815260206004820152600f60248201526e1393d5081253541311535153951151608a1b60448201526000906064015b60405180910390fd5b60405162461bcd60e51b815260206004820152600f60248201526e1393d5081253541311535153951151608a1b60448201526064016105cf565b60008481526020819052604090207f0000000000000000000000000000000000000000000000000000000000000000851061065f5760405162461bcd60e51b81526004016105cf90612017565b80546001600160a01b03163314156106b15760405162461bcd60e51b815260206004820152601560248201527410d85b89dd08189d5e481e5bdd5c881bdddb881859605a1b60448201526064016105cf565b60006106bc86610fe5565b825460028401549192506001600160a01b03169082111561084e576106e5878460020154611a97565b60405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906107339030908a9060040161203d565b602060405180830381600087803b15801561074d57600080fd5b505af1158015610761573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107859190612056565b506040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906107f69033907f0000000000000000000000000000000000000000000000000000000000000000908b90600401612073565b602060405180830381600087803b15801561081057600080fd5b505af1158015610824573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108489190612056565b50610ae7565b85836001015411156108925760405162461bcd60e51b815260206004820152600d60248201526c2637bbb130b6361037b33332b960991b60448201526064016105cf565b6108a0878460020154611a97565b8254600284015460405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169363a9059cbb936108f89391909216919060040161203d565b602060405180830381600087803b15801561091257600080fd5b505af1158015610926573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094a9190612056565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906109999030908a9060040161203d565b602060405180830381600087803b1580156109b357600080fd5b505af11580156109c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109eb9190612056565b5082546001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116916323b872dd9133911615610a385785546001600160a01b0316610a5a565b7f00000000000000000000000000000000000000000000000000000000000000005b896040518463ffffffff1660e01b8152600401610a7993929190612073565b602060405180830381600087803b158015610a9357600080fd5b505af1158015610aa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acb9190612056565b610ae75760405162461bcd60e51b81526004016105cf90612097565b60405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390610b35903090889060040161203d565b602060405180830381600087803b158015610b4f57600080fd5b505af1158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b879190612056565b50610b9185611069565b841015610bd35760405162461bcd60e51b815260206004820152601060248201526f4e6f7420656e6f7567682066756e647360801b60448201526064016105cf565b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90610c2390339030908990600401612073565b602060405180830381600087803b158015610c3d57600080fd5b505af1158015610c51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c759190612056565b610c915760405162461bcd60e51b81526004016105cf90612097565b82546001600160a01b031916331783556002830184905560018301859055610cd97f0000000000000000000000000000000000000000000000000000000000000000426120d3565b60048401554260038401553360009081526001602081905260408220805491929091610d069084906120d3565b9091555050604051879033906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90600090a4867fb607f618d42004a68651337cff412752d042354c4fd3a56fe8ae01e34fa969c886604051610d7591815260200190565b60405180910390a28660008051602061217a83398151915285604051610d9d91815260200190565b60405180910390a250505050505050565b7f00000000000000000000000000000000000000000000000000000000000000008110610ded5760405162461bcd60e51b81526004016105cf90612017565b600081815260208190526040902080546001600160a01b03163314610e405760405162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b60448201526064016105cf565b6000610e4b83610fe5565b905081600201548111610f1257610e628382611a97565b8154600283015460405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169363a9059cbb93610eba9391909216919060040161203d565b602060405180830381600087803b158015610ed457600080fd5b505af1158015610ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0c9190612056565b50610fd7565b600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91610f83917f00000000000000000000000000000000000000000000000000000000000000009160040161203d565b602060405180830381600087803b158015610f9d57600080fd5b505af1158015610fb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd59190612056565b505b610fe083611bb8565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000082106110265760405162461bcd60e51b81526004016105cf90612017565b60008281526020819052604081206001810154909190611045906110e8565b905081600301544261105791906120eb565b6110619082612102565b949350505050565b600080611075836110e8565b905061108481622819a0612102565b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000082106110cc5760405162461bcd60e51b81526004016105cf90612017565b506000908152602081905260409020546001600160a01b031690565b6000806127106111187f000000000000000000000000000000000000000000000000000000000000000085612102565b6111229190612121565b90506110846301e1338082612121565b60606003805461051390611fdc565b7f000000000000000000000000000000000000000000000000000000000000000082106111805760405162461bcd60e51b81526004016105cf90612017565b60008281526020819052604090819020905163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906111dd903090869060040161203d565b602060405180830381600087803b1580156111f757600080fd5b505af115801561120b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122f9190612056565b506040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061128090339030908790600401612073565b602060405180830381600087803b15801561129a57600080fd5b505af11580156112ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d29190612056565b6112ee5760405162461bcd60e51b81526004016105cf90612097565b8181600201600082825461130291906120d3565b90915550506002810154604051908152839060008051602061217a833981519152906020015b60405180910390a2505050565b7f000000000000000000000000000000000000000000000000000000000000000082106113745760405162461bcd60e51b81526004016105cf90612017565b600082815260208190526040902080546001600160a01b031633146113c75760405162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b60448201526064016105cf565b806004015442101561140c5760405162461bcd60e51b815260206004820152600e60248201526d57616974206d6f72652074696d6560901b60448201526064016105cf565b600061141784610fe5565b9050816002015481116115e45761142e8482611a97565b816002015483101561152b578282600201600082825461144e91906120eb565b9091555050815460405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169263a9059cbb926114a7929190911690879060040161203d565b602060405180830381600087803b1580156114c157600080fd5b505af11580156114d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f99190612056565b508360008051602061217a833981519152836002015460405161151e91815260200190565b60405180910390a26116b1565b8154600283015460405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169363a9059cbb936115839391909216919060040161203d565b602060405180830381600087803b15801561159d57600080fd5b505af11580156115b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d59190612056565b506115df84611bb8565b6116b1565b600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91611655917f00000000000000000000000000000000000000000000000000000000000000009160040161203d565b602060405180830381600087803b15801561166f57600080fd5b505af1158015611683573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a79190612056565b506116b184611bb8565b50505050565b60607f000000000000000000000000000000000000000000000000000000000000000082101561177357600280546116ee90611fdc565b80601f016020809104026020016040519081016040528092919081815260200182805461171a90611fdc565b80156117675780601f1061173c57610100808354040283529160200191611767565b820191906000526020600020905b81548152906001019060200180831161174a57829003601f168201915b50505050509050919050565b505060408051602081019091526000815290565b7f000000000000000000000000000000000000000000000000000000000000000081106117c65760405162461bcd60e51b81526004016105cf90612017565b6000818152602081905260408120906117de83610fe5565b90508160020154811061185c57600282015460405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91610f83917f00000000000000000000000000000000000000000000000000000000000000009160040161203d565b610fe08382611a97565b7f000000000000000000000000000000000000000000000000000000000000000082106118a55760405162461bcd60e51b81526004016105cf90612017565b600082815260208190526040902080546001600160a01b031633146118f95760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b60448201526064016105cf565b81816001015411156119505780600401544210156119505760405162461bcd60e51b8152602060048201526014602482015273546f6f20736f6f6e20746f20646563726561736560601b60448201526064016105cf565b600181018290556119817f0000000000000000000000000000000000000000000000000000000000000000426120d3565b600482015560405182815283907fb607f618d42004a68651337cff412752d042354c4fd3a56fe8ae01e34fa969c890602001611328565b7f000000000000000000000000000000000000000000000000000000000000000083106119f75760405162461bcd60e51b81526004016105cf90612017565b600083815260208190526040902080546001600160a01b03163314611a565760405162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c8818da185b99d95cc81859605a1b60448201526064016105cf565b7fae0663072bcb7f24f009e8ad0e7bd01cb00a189760d428d8ff269525830db407848484604051611a8993929190612143565b60405180910390a150505050565b60008281526020819052604090819020905163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90611b14907f000000000000000000000000000000000000000000000000000000000000000090869060040161203d565b602060405180830381600087803b158015611b2e57600080fd5b505af1158015611b42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b669190612056565b5081816002016000828254611b7b91906120eb565b909155505042600382015560405182815283907f65c3c2ca9c0a91fa382799173e8eaba4f2d15dc17f9d7b3194a673f5311ccdaa90602001611328565b6000818152602081815260408083208054600282018590557f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081166001600160a01b03198316178355600180840187905533875294859052928520805492959390911693929091611c339084906120eb565b90915550506040516000815283907fb607f618d42004a68651337cff412752d042354c4fd3a56fe8ae01e34fa969c89060200160405180910390a28260008051602061217a8339815191526000604051611c8f91815260200190565b60405180910390a260405183906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505050565b600060208284031215611ce657600080fd5b81356001600160e01b03198116811461108457600080fd5b600060208083528351808285015260005b81811015611d2b57858101830151858201604001528201611d0f565b81811115611d3d576000604083870101525b50601f01601f1916929092016040019392505050565b600060208284031215611d6557600080fd5b5035919050565b80356001600160a01b0381168114611d8357600080fd5b919050565b60008060408385031215611d9b57600080fd5b611da483611d6c565b946020939093013593505050565b60008060008060808587031215611dc857600080fd5b5050823594602084013594506040840135936060013592509050565b600080600060608486031215611df957600080fd5b611e0284611d6c565b9250611e1060208501611d6c565b9150604084013590509250925092565b600060208284031215611e3257600080fd5b61108482611d6c565b8015158114611e4957600080fd5b50565b60008060408385031215611e5f57600080fd5b611e6883611d6c565b91506020830135611e7881611e3b565b809150509250929050565b60008060408385031215611e9657600080fd5b50508035926020909101359150565b60008083601f840112611eb757600080fd5b50813567ffffffffffffffff811115611ecf57600080fd5b602083019150836020828501011115611ee757600080fd5b9250929050565b600080600080600060808688031215611f0657600080fd5b611f0f86611d6c565b9450611f1d60208701611d6c565b935060408601359250606086013567ffffffffffffffff811115611f4057600080fd5b611f4c88828901611ea5565b969995985093965092949392505050565b600080600060408486031215611f7257600080fd5b83359250602084013567ffffffffffffffff811115611f9057600080fd5b611f9c86828701611ea5565b9497909650939450505050565b60008060408385031215611fbc57600080fd5b611fc583611d6c565b9150611fd360208401611d6c565b90509250929050565b600181811c90821680611ff057607f821691505b6020821081141561201157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b4e6f74206578697374696e6760a01b604082015260600190565b6001600160a01b03929092168252602082015260400190565b60006020828403121561206857600080fd5b815161108481611e3b565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020808252600c908201526b2130b2103a3930b739b332b960a11b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082198211156120e6576120e66120bd565b500190565b6000828210156120fd576120fd6120bd565b500390565b600081600019048311821515161561211c5761211c6120bd565b500290565b60008261213e57634e487b7160e01b600052601260045260246000fd5b500490565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f191601019291505056fee2c574ac6f15605f6ea5c165e0fa6af366d8f1ee6203f57dd2d3e8c82ce27aa7a264697066735822122051a62c71897d760fffca38e564e00e798aaedbcc19becd88761dbc52759a09c464736f6c63430008090033a264697066735822122019d25becf3d9e5d7f1933909897674f225c65d03cd2574df2cf2e3279a67e8c864736f6c63430008090033";

type HarbergerAdsFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HarbergerAdsFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HarbergerAdsFactory__factory extends ContractFactory {
  constructor(...args: HarbergerAdsFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HarbergerAdsFactory> {
    return super.deploy(overrides || {}) as Promise<HarbergerAdsFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HarbergerAdsFactory {
    return super.attach(address) as HarbergerAdsFactory;
  }
  override connect(signer: Signer): HarbergerAdsFactory__factory {
    return super.connect(signer) as HarbergerAdsFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HarbergerAdsFactoryInterface {
    return new utils.Interface(_abi) as HarbergerAdsFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HarbergerAdsFactory {
    return new Contract(address, _abi, signerOrProvider) as HarbergerAdsFactory;
  }
}
