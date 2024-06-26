export const OpenmeshGenesisContract = {
  address: "0x0810B44e9454C82C2f4d2e482DB2291e49812C5E",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "_validatorPass",
          type: "address",
          internalType: "contract IERC721Mintable",
        },
        {
          name: "_pricePeriods",
          type: "tuple[]",
          internalType: "struct IOpenmeshGenesis.PricePeriod[]",
          components: [
            { name: "mintCount", type: "uint256", internalType: "uint256" },
            { name: "price", type: "uint256", internalType: "uint256" },
          ],
        },
        { name: "_publicMintTime", type: "uint32", internalType: "uint32" },
        { name: "_whitelistRoot", type: "bytes32", internalType: "bytes32" },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "canPublicMint",
      inputs: [{ name: "_account", type: "address", internalType: "address" }],
      outputs: [{ name: "allowed", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "canWhitelistMint",
      inputs: [
        { name: "_account", type: "address", internalType: "address" },
        { name: "_proof", type: "bytes32[]", internalType: "bytes32[]" },
        { name: "_mintTime", type: "uint32", internalType: "uint32" },
      ],
      outputs: [{ name: "allowed", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "collectFunds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getCurrentPrice",
      inputs: [],
      outputs: [
        { name: "currentPrice", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "hasContributed",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
      outputs: [{ name: "contributed", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "mintCount",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "pure",
    },
    {
      type: "function",
      name: "pricePeriods",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "mintCount", type: "uint256", internalType: "uint256" },
        { name: "price", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "publicMint",
      inputs: [],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "publicMintTime",
      inputs: [],
      outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "rescue",
      inputs: [
        { name: "_token", type: "address", internalType: "contract IERC20" },
        { name: "_to", type: "address", internalType: "address" },
        { name: "_amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "validatorPass",
      inputs: [],
      outputs: [
        { name: "", type: "address", internalType: "contract IERC721Mintable" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "whitelistMint",
      inputs: [
        { name: "_proof", type: "bytes32[]", internalType: "bytes32[]" },
        { name: "_mintTime", type: "uint32", internalType: "uint32" },
      ],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "whitelistRoot",
      inputs: [],
      outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
      stateMutability: "view",
    },
    {
      type: "event",
      name: "Mint",
      inputs: [
        {
          name: "account",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "paid",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "AddressEmptyCode",
      inputs: [{ name: "target", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "AddressInsufficientBalance",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
    { type: "error", name: "FailedInnerCall", inputs: [] },
    { type: "error", name: "MintOver", inputs: [] },
    { type: "error", name: "NotAllowed", inputs: [] },
    {
      type: "error",
      name: "SafeERC20FailedOperation",
      inputs: [{ name: "token", type: "address", internalType: "address" }],
    },
    { type: "error", name: "TransferReverted", inputs: [] },
    {
      type: "error",
      name: "Underpaying",
      inputs: [
        { name: "attached", type: "uint256", internalType: "uint256" },
        { name: "minRequired", type: "uint256", internalType: "uint256" },
      ],
    },
  ],
} as const;
