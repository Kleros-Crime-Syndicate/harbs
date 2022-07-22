// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract HarbergerAds is IHarbergerAds {
  struct Ad {
    uint256 valuation; // current valuation of the item.
    uint256 valuationChangeTimestamp; // must be set any time valuation changes
    uint256 taxDueTimestamp; // taxes are paid on collect and meaningful interactions (value change, buys...)
    uint256 fund; // after revoking, due is substracted and then refunded to owner.
    address owner;
  }

  event AdSet(uint256 _tokenId, string _ipfsUri);

  uint256 immutable taxRate; // rate times divider, per year.
  uint256 constant DIVIDER = 10_000;

  IERC20 immutable currency;
  address immutable collector; // recipient of the taxes

  mapping(uint256 => Ad) ads;
  mapping(address => uint256) balances;

  constructor(uint256 _taxRate, IERC20 _currency) {
    taxRate = _taxRate;
    currency = _currency;
  }

  // edge cases:
  // if due taxes cannot be paid, the buyer gets ownership of the item and doesnt have to pay.

  function buy(uint256 _tokenId, uint256 _offer, uint256 _valuation, uint256 _fund) external {
    // check if item has enough funds to pay taxes
    Ad storage ad = ads[_tokenId];
    uint256 amountDue = dueTaxes(_tokenId);
    if (amountDue > ad.fund) {
      // there's not enough to pay. item no longer belongs to original owner.
      // send whatever's left to the collector
      currency.transfer(collector, ad.fund);
      // buy from collector
      currency.transferFrom(msg.sender, collector, _offer);
    } else {
      // check if offer is over valuation
      require(ad.valuation <= _offer, "Lowball offer");
      // cool, proceed to buy the item
      // first, original owner pays due taxes
      currency.transfer(collector, amountDue);
      // reimburse remainder
      currency.transfer(ad.owner, ad.fund - amountDue);

      // buy the item from previous owner
      currency.transferFrom(msg.sender, ad.owner, _offer);
    }
    // is new fund enough?
    require(_fund >= minimumFund(_valuation), "Not enough funds");
    currency.transferFrom(msg.sender, address(this), _fund);

    // set the ad data
    ad.owner = msg.sender;
    ad.fund = _fund;
    ad.valuation = _valuation;
    ad.valuationChangeTimestamp = block.timestamp;
    ad.taxDueTimestamp = block.timestamp;
    }
  }

  function fund(uint256 _tokenId, uint256 _value) external {
    
  }

  function defund(uint256 _tokenId, uint256 _value) external {
    // check how much is due
    uint256 dueTaxes = 
  }

  function revoke(uint256 _tokenId) external {

  }

  function changeValuation(uint256 _tokenId, uint256 _valuation) external {

  }

  function setAd(uint256 _tokenId, string _ipfsUri) external {

  }

  /// INTERNAL FUNCTIONS

  /// VIEW FUNCTIONS

  function dueTaxes(uint256 _tokenId) view public {
    Ad storage ad = ads[_tokenId];
    uint256 rate = taxesPerSecond(ad.valuation);
    return (rate * (block.timestamp - ad.taxDueTimestamp));
  }

  function taxesPerSecond(uint256 _value) view public {
    // figures out dynamically how much is owed per second
    uint256 perYear = _value * taxRate / DIVIDER;
    return perYear / 31_536_000; // <-- some tokens will go to zero like this lol
  }

  function minimumFund(uint256 _value) view public {
    uint256 rate = taxesPerSecond(_value);
    return rate * 2_628_000;
  } 
}