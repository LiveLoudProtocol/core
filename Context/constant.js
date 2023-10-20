// 0x1A1FEe7EeD918BD762173e4dc5EfDB8a78C924A8
import lens from  "./LensHub.json";
import lensHubStorage from "./LensHubStorage.json";
import followNFT from "./FollowNFT.json";
import collectNFT from "./CollectNFT.json";
import base_erc_numerable from "./ERC721Enumerable.json";
import base_erc_time from "./ERC721Time.json";
import base_ierc_time from "./IERC721Time.json";
import base_lensBase from "./LensNFTBase.json";
import base_lensMultiState from "./LensMultiState.json";
import module_collect_freeCollect from "./FreeCollectModule.json";
import module_collect_limitedFeeCollected from "./LimitedFeeCollectModule.json";
import module_collect_limitedTimedFeeCollect from "./LimitedTimedFeeCollectedModule.json";
import module_collect_Revertcollect from "./RevertCollectModule.json";
import module_collect_TimedFeeCollect from "./TimedFeeCollectModule.sol";
import module_FeeModule from "./FeeModulebase.json";
import module_follow_ApprovalFollow from "./ApprovalFollowModule.json";
import module_follow_feeValidator from "./FollowValidatorFollowModule.json";
import module_follow_feeFollow from "./FeeFollowModule.json";
import module_follow_profileFollow from "./ProfileFollowModule.json";
import module_follow_revertFolloe from "./RevertFollowModule.json";
import module_followValidation from "./FollowValidationModuleBase.json";
import module_moduleBase from "./ModuleBase.json";
import module_moduleGlobals from "./ModuleBase.json";
import module_reference from "./reference/FollowerOnlyReferenceModule.json";

 
// {
//     "lensHub proxy": "0x1A1FEe7EeD918BD762173e4dc5EfDB8a78C924A8",
//     "lensHub impl:": "0xf784709d2317D872237C4bC22f867d1BAe2913AB",
//     "publishing logic lib": "0x8858eeB3DfffA017D4BCE9801D340D36Cf895CCf",
//     "interaction logic lib": "0x0078371BDeDE8aAc7DeBfFf451B74c5EDB385Af7",
//     "follow NFT impl": "0x3619dbe27d7c1e7e91aa738697ae7bc5fc3eaca5",
//     "collect NFT impl": "0x038b86d9d8fafdd0a02ebd1a476432877b0107c8",
//     "currency": "0xc4905364b78a742ccce7B890A89514061E47068D",
//     "lens periphery": "0x500D1d6A4c7D8Ae28240b47c8FCde034D827fD5e",
//     "module globals": "0x7c2C195CD6D34B8F845992d380aADB2730bB9C6F",
//     "fee collect module": "0xD6C850aeBFDC46D7F4c207e445cC0d6B0919BDBe",
//     "limited fee collect module": "0x8B5B7a6055E54a36fF574bbE40cf2eA68d5554b3",
//     "timed fee collect module": "0xEcc0a6dbC0bb4D51E4F84A315a9e5B0438cAD4f0",
//     "limited timed fee collect module": "0x20Ce94F404343aD2752A2D01b43fa407db9E0D00",
//     "revert collect module": "0x1d80315fac6aBd3EfeEbE97dEc44461ba7556160",
//     "free collect module": "0x2D8553F9ddA85A9B3259F6Bf26911364B85556F5",
//     "fee follow module": "0x52d3b94181f8654db2530b0fEe1B19173f519C52",
//     "profile follow module": "0xd15468525c35BDBC1eD8F2e09A00F8a173437f2f",
//     "revert follow module": "0x7e35Eaf7e8FBd7887ad538D4A38Df5BbD073814a",
//     "follower only reference module": "0x5bcb88A0d20426e451332eE6C4324b0e663c50E0",
//     "UI data provider": "0x3521eF8AaB0323004A6dD8b03CE890F4Ea3A13f5",
//     "Profile creation proxy": "0x53369fd4680FfE3DfF39Fc6DDa9CfbfD43daeA2E"
//   }


export const lensAddress="0x1A1FEe7EeD918BD762173e4dc5EfDB8a78C924A8";
export const lensABI=lens.abi;

export const lensHubAddress="0x1A1FEe7EeD918BD762173e4dc5EfDB8a78C924A8";
export const lensHubABI=lensHubStorage.abi;

export const followAddress="";
export const followABI=followNFT.abi;

export const collectAddress="";
export const collectABI=collectNFT.abi;

// all files of inside core -> base


